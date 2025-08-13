# From what I can tell, this script was used to migrate to a new database struccture, and is now unnecessary.
# It seems like the original system had the information for every show in a single yaml file, instead of as a collection.
# This script was used to automate the process of migrating the data from the yaml file into the shows collection.
# That migration is well and truly complete, so this file is unnecessary. - Will

from glob import glob
import os
import yaml

for show in glob("_shows/**/**/*.md"):
    show_info = yaml.load(open(show, "r", encoding="utf8").read().split("---")[1])

    show_info["date"] = show_info["date"].replace(year=show_info["year"])

    open(show, "w", encoding="utf8").write(
        f"---\n{yaml.dump(show_info, sort_keys=False)}\n---"
    )

    # slug = show_info['slug']
    # new_path = f"assets/images/{show_info['year']}/{slug}"

    # os.makedirs(new_path, exist_ok=True)

    # os.system(f"git mv assets/show-banners/{show_info['slug']}.jpg {new_path}/banner.jpg")
    # os.system(f"git mv assets/show-thumbnails/{show_info['slug']}.jpg {new_path}/thumbnail.jpg")

    # if os.path.exists(f"assets/show-slideshow/{slug}"):
    #     for img in sorted(glob(f"assets/show-slideshow/{slug}/*.jpg")):
    #         os.system(f"git mv {img} {new_path}/")
