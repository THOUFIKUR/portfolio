import json

with open(r"D:\portfolio\scripts\ocr_79_pages.json", "r", encoding="utf-8-sig") as f:
    ocr_data = json.load(f)

with open(r"D:\portfolio\scripts\raw_manifest.json", "r", encoding="utf-8") as f:
    raw_manifest = json.load(f)

manifest_by_page = {item["page"]: item for item in raw_manifest}

print(f"Total pages: {len(ocr_data)}")
for item in ocr_data:
    p = item["Page"]
    lines = item.get("Lines", [])
    raw = manifest_by_page.get(p, {})
    aspect = raw.get("aspect", "?")
    w = raw.get("width", "?")
    h = raw.get("height", "?")
    
    # preview first few lines
    preview = " // ".join(lines[:3]) if lines else "[NO TEXT]"
    print(f"P{p:02d} ({w}x{h}, aspect={aspect}): {preview}")
