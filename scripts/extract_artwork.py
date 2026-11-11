import os
import hashlib
import json
import pymupdf
from PIL import Image

pdf_path = r"D:\portfolio\GRAPHIC DESIGN (1).pdf"
doc = pymupdf.open(pdf_path)

output_raw_dir = r"D:\portfolio\extracted_artwork"
os.makedirs(output_raw_dir, exist_ok=True)

manifest_items = []

for i, page in enumerate(doc):
    imgs = page.get_images()
    page_num = i + 1
    
    if not imgs:
        print(f"Page {page_num}: No image found!")
        continue
        
    xref = imgs[0][0]
    bimg = doc.extract_image(xref)
    ext = bimg["ext"]
    data = bimg["image"]
    w = bimg["width"]
    h = bimg["height"]
    cs = bimg["colorspace"]
    
    h_md5 = hashlib.md5(data).hexdigest()
    
    filename = f"art_p{page_num:02d}_{w}x{h}.{ext}"
    out_path = os.path.join(output_raw_dir, filename)
    with open(out_path, "wb") as f:
        f.write(data)
        
    aspect = round(w / h, 2)
    
    manifest_items.append({
        "page": page_num,
        "filename": filename,
        "width": w,
        "height": h,
        "aspect": aspect,
        "md5": h_md5,
        "format": ext
    })

with open(r"D:\portfolio\scripts\raw_manifest.json", "w") as f:
    json.dump(manifest_items, f, indent=2)

print(f"Successfully extracted {len(manifest_items)} images to {output_raw_dir}")

# Check duplicate md5s
md5_map = {}
for item in manifest_items:
    md5_map.setdefault(item["md5"], []).append(item["page"])

duplicates = {k: v for k, v in md5_map.items() if len(v) > 1}
print(f"Exact duplicates found: {len(duplicates)}")
for k, pages in duplicates.items():
    print(f"  Hash {k[:8]}... appears on pages: {pages}")

