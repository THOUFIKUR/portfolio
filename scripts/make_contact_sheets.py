import pathlib
from PIL import Image, ImageDraw, ImageFont

root = pathlib.Path("D:/portfolio")
pages_dir = root / "extracted_pages"
art_dir = root / "extracted_artwork"
out_dir = pathlib.Path(r"C:\Users\thouf\.gemini\antigravity\brain\8b965f44-a068-429b-9aaf-0e10b08c1d55\scratch\contact_sheets")
out_dir.mkdir(parents=True, exist_ok=True)

# Prefer extracted_pages (rendered full PDF pages) or fallback to extracted_artwork
imgs = {}
for p in range(1, 80):
    candidates = list(pages_dir.glob(f"*p{p:02d}*")) + list(pages_dir.glob(f"page_{p:02d}*")) + list(pages_dir.glob(f"page-{p:02d}*"))
    if not candidates:
        candidates = list(art_dir.glob(f"art_p{p:02d}_*"))
    if candidates:
        imgs[p] = candidates[0]

print(f"Found {len(imgs)} page images. Pages dir sample:", [x.name for x in list(pages_dir.iterdir())[:5]] if pages_dir.exists() else [])

cols, rows = 5, 4
cell_w, cell_h = 280, 320
pad = 12

for sheet_idx, start_p in enumerate(range(1, 80, cols * rows), 1):
    canvas = Image.new("RGB", (cols * cell_w, rows * cell_h), (245, 242, 234))
    draw = ImageDraw.Draw(canvas)
    for idx in range(cols * rows):
        p = start_p + idx
        if p > 79:
            break
        r, c = divmod(idx, cols)
        x0, y0 = c * cell_w + pad, r * cell_h + pad
        box_w, box_h = cell_w - 2 * pad, cell_h - 46
        draw.rectangle([x0, y0, x0 + box_w, y0 + box_h], fill=(225, 220, 210), outline=(180, 175, 165))
        if p in imgs:
            try:
                im = Image.open(imgs[p]).convert("RGB")
                im.thumbnail((box_w - 8, box_h - 8))
                ix = x0 + (box_w - im.width) // 2
                iy = y0 + (box_h - im.height) // 2
                canvas.paste(im, (ix, iy))
                label = f"P{p:02d} ({im.width}x{im.height})"
            except Exception as e:
                label = f"P{p:02d} ERR"
        else:
            label = f"P{p:02d} MISSING"
        draw.text((x0 + 4, y0 + box_h + 6), label, fill=(20, 20, 20))
    out_path = out_dir / f"sheet_{sheet_idx}.jpg"
    canvas.save(out_path, quality=85)
    print("Saved", out_path)

