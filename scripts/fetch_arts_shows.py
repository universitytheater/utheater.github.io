from bs4 import BeautifulSoup
import requests
import yaml
from tqdm import tqdm
import shutil
import os


def get_show_info(slug):
    req = requests.get(f"https://arts.uchicago.edu/{slug}")
    soup = BeautifulSoup(req.content, "html.parser")

    info = dict()

    info["subheader"] = ""

    if soup.find(class_="subhead") is not None:
        subhead_elem = soup.find(class_="subhead").find("p")
        if subhead_elem is not None:
            info["subheader"] = subhead_elem.text.strip()

    description_elems = [str(p) for p in soup.find(class_="content-body").find_all("p")]

    info["description"] = "\n".join(description_elems)

    banner = soup.find(class_="main-gallery-slide").find("img")["src"]
    slug = slug.split("/")[-1]
    filename = f"assets/show-banners/{slug}.jpg"

    if not os.path.exists(filename):
        download_image(banner, filename)
    elif slug == "streetcar-named-desire":
        slug = "streetcar-named-desire-2014"
        filename = f"assets/show-banners/{slug}.jpg"
        download_image(banner, filename)

    slideshow = soup.find_all(class_="supplemental-gallery-slide")
    for i, image in enumerate(slideshow):
        slide = image.find("a")["href"]
        os.makedirs(f"assets/show-slideshow/{slug}", exist_ok=True)
        filename = f"assets/show-slideshow/{slug}/slide-{i + 1:02}.jpg"

        if not os.path.exists(filename):
            download_image(slide, filename)

    info["slug"] = slug

    return info


def download_image(url, path):
    img_req = requests.get(url, stream=True)
    img_req.raw.decode_content = True

    with open(path, "wb") as out:
        shutil.copyfileobj(img_req.raw, out)


def build_shows(output=False):
    req = requests.get("https://arts.uchicago.edu/utshows")
    soup = BeautifulSoup(req.content, "html.parser")
    year_obj = soup.find_all(class_="gallery-section")

    show_list = dict()
    show_infos = list()

    for year in year_obj:
        year_group = year.find("h2").text.strip()
        show_obj = year.find_all(class_="gallery-item")

        show_list[year_group] = list()

        for show in tqdm(show_obj):
            try:
                props = {
                    "title": show.find("h3").text.strip(),
                    "slug": show.find("h3").find("a")["href"][1:],
                    "quarter": show.find("p").text.split("\n")[-1],
                }
            except AttributeError:
                continue

            show_info = get_show_info(props["slug"])
            show_info["title"] = props["title"]
            show_infos.append(show_info)

            props["slug"] = props["slug"].split("/")[-1]

            thumbnail = show.find("img")["src"]
            filename = f"assets/show-thumbnails/{props['slug']}.jpg"

            if not os.path.exists(filename):
                download_image(thumbnail, filename)

            show_list[year_group].append(props)

    if not output:
        return

    with open("_data/show-info.yml", "w+") as out:
        out.write(yaml.dump(show_infos, sort_keys=False))

    with open("_data/shows.yml", "w+") as out:
        out.write(yaml.dump(show_list, sort_keys=False))


if __name__ == "__main__":
    build_shows()
