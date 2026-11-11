import os
import shutil
from PIL import Image

# Directories
public_img = r"D:\portfolio\public\images"
public_doc = r"D:\portfolio\public\documents"
public_creative = r"D:\portfolio\public\projects\creative"
public_eng = r"D:\portfolio\public\projects\engineering"
public_tech = r"D:\portfolio\public\projects\technology"

for d in [public_img, public_doc, public_creative, public_eng, public_tech]:
    os.makedirs(d, exist_ok=True)

# 1. Copy Portraits
shutil.copy2(r"D:\portfolio\mine.jpg", os.path.join(public_img, "thoufikur-hero.jpg"))
shutil.copy2(r"D:\portfolio\mine1.jpg", os.path.join(public_img, "thoufikur-about.jpg"))

# Also generate WebP versions for fast web performance
with Image.open(r"D:\portfolio\mine.jpg") as im:
    im.save(os.path.join(public_img, "thoufikur-hero.webp"), "WEBP", quality=90)
with Image.open(r"D:\portfolio\mine1.jpg") as im:
    im.save(os.path.join(public_img, "thoufikur-about.webp"), "WEBP", quality=90)

# 2. Copy Resume PDF
resume_src = r"D:\portfolio\THOUFIKUR RAHAMAN Y — Resume (Original Format).pdf"
shutil.copy2(resume_src, os.path.join(public_doc, "thoufikur-rahaman-resume.pdf"))

print("Portraits and resume successfully placed in public assets.")

