# This script seems to have been used to download all of the company photos from My H8 Letter To The Gr8 American Theater (it was a TAPS Pro-Show, so they had photos)
# It seems to have been used once to download them, and never again.
# It is therefore unnecessary. - Will

from bs4 import BeautifulSoup
import requests
import shutil
import os


def download_image(url, path):
    img_req = requests.get(url, stream=True)
    img_req.raw.decode_content = True

    with open(path, "wb") as out:
        shutil.copyfileobj(img_req.raw, out)


if __name__ == "__main__":
    contents = open("_shows/2021/winter/my-h8-letter.md", "r").read().split("---")[-1]

    soup = BeautifulSoup(contents, "html.parser")
    for person in soup.find_all(class_="field--name-field-paragraph-image"):
        sources = person.find("img")["srcset"]

        new_sources = []
        for source in sources.split(", "):

            url, viewport = source.split(" ")

            res = url.split("styles/")[-1].split("/")[0]
            filename = url.split("/")[-1].replace("%20", "_").split("?")[0]
            path = f"assets/images/2021/my-h8-letter/{res}/{filename}"

            os.makedirs(f"assets/images/2021/my-h8-letter/{res}/", exist_ok=True)

            if not os.path.exists(path):
                download_image(url, path)

            new_sources.append(f"/{path} {viewport}")

        person.find("img")["srcset"] = ", ".join(new_sources)
        person.find("img")["src"] = new_sources[0].split(" ")[0]

    print(soup)
    with open("new_soup.html", "w+") as out:
        out.write(str(soup))
