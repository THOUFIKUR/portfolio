import os
from PIL import Image, ImageStat

for fn in ["mine.jpg", "mine1.jpg"]:
    p = os.path.join(r"D:\portfolio", fn)
    with Image.open(p) as img:
        stat = ImageStat.Stat(img)
        print(f"=== {fn} ===")
        print(f"Format: {img.format}, Size: {img.size}, Mode: {img.mode}")
        print(f"Mean RGB: {stat.mean[:3]}")
        print(f"StdDev RGB: {stat.stddev[:3]}")

