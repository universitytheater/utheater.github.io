from glob import glob
import os
import yaml

for show in glob("_shows/**/**/*.md"):
    show_info = yaml.load(open(show, "r", encoding="utf8").read().split("---")[1])

    show_info["date"] = show_info["date"].replace(year=show_info["year"])

    open(show, "w", encoding="utf8").write(f"---\n{yaml.dump(show_info, sort_keys=False)}\n---")

    # slug = show_info['slug']
    # new_path = f"assets/images/{show_info['year']}/{slug}"

    # os.makedirs(new_path, exist_ok=True)

    # os.system(f"git mv assets/show-banners/{show_info['slug']}.jpg {new_path}/banner.jpg")
    # os.system(f"git mv assets/show-thumbnails/{show_info['slug']}.jpg {new_path}/thumbnail.jpg")

    # if os.path.exists(f"assets/show-slideshow/{slug}"):
    #     for img in sorted(glob(f"assets/show-slideshow/{slug}/*.jpg")):
    #         os.system(f"git mv {img} {new_path}/")