import json

with open(r"D:\portfolio\scripts\ocr_79_pages.json", "r", encoding="utf-8-sig") as f:
    ocr_data = json.load(f)

with open(r"D:\portfolio\scripts\raw_manifest.json", "r", encoding="utf-8") as f:
    raw_manifest = json.load(f)

manifest_by_page = {item["page"]: item for item in raw_manifest}

output_lines = []
for item in ocr_data:
    p = item["Page"]
    lines = item.get("Lines", [])
    raw = manifest_by_page.get(p, {})
    aspect = raw.get("aspect", "?")
    w = raw.get("width", "?")
    h = raw.get("height", "?")
    fn = raw.get("filename", "")
    
    output_lines.append(f"=== PAGE {p:02d} | {fn} | Size: {w}x{h} | Aspect: {aspect} ===")
    for l in lines:
        output_lines.append(f"  {l}")
    output_lines.append("")

with open(r"D:\portfolio\scripts\full_page_text_dump.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(output_lines))

print("Dumped full text to D:\\portfolio\\scripts\\full_page_text_dump.txt")

