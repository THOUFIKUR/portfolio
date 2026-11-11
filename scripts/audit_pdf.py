import os
import pymupdf

pdf_path = r"D:\portfolio\GRAPHIC DESIGN (1).pdf"
doc = pymupdf.open(pdf_path)
print(f"Total pages: {len(doc)}")

output_dir = r"D:\portfolio\extracted_pages"
os.makedirs(output_dir, exist_ok=True)

page_info = []

for i, page in enumerate(doc):
    rect = page.rect
    width, height = rect.width, rect.height
    aspect = width / height
    
    # Check embedded images
    imgs = page.get_images()
    img_meta = []
    for img in imgs:
        xref = img[0]
        try:
            bimg = doc.extract_image(xref)
            img_meta.append({
                "xref": xref,
                "ext": bimg["ext"],
                "w": bimg["width"],
                "h": bimg["height"],
                "cs": bimg["colorspace"]
            })
        except Exception as e:
            img_meta.append({"error": str(e)})

    # Also render a thumbnail/preview image to inspect content easily
    pix = page.get_pixmap(dpi=150)
    img_name = f"page_{i+1:02d}.jpg"
    img_path = os.path.join(output_dir, img_name)
    pix.save(img_path)
    
    page_info.append({
        "page": i + 1,
        "width": width,
        "height": height,
        "aspect": round(aspect, 2),
        "img_count": len(imgs),
        "img_meta": img_meta,
        "rendered": img_name
    })

print(f"Rendered all {len(doc)} pages to {output_dir}")
for p in page_info[:15]:
    print(f"Page {p['page']:02d}: {p['width']}x{p['height']} (ratio {p['aspect']}), images: {p['img_meta']}")

