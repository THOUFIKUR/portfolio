import os
import shutil
import json
from PIL import Image

raw_art_dir = r"D:\portfolio\extracted_artwork"
dest_dir = r"D:\portfolio\public\projects\creative"
os.makedirs(dest_dir, exist_ok=True)

with open(r"D:\portfolio\scripts\raw_manifest.json", "r") as f:
    raw_manifest = json.load(f)

raw_by_page = {item["page"]: item for item in raw_manifest}

# Pages for specific replacements
pages_to_extract = [5, 14, 20, 27, 28, 30, 31, 32, 33, 36, 40, 42, 43, 46, 49, 50, 57, 60, 62, 63, 64, 66, 67, 79, 8, 12, 13, 18]

slug_map = {
    5: "science-club-annual-induction-agenda",
    8: "legend-classic-gym-functional-training",
    12: "msme-idea-hackathon-6-funding-announcement",
    13: "featherdraw-technique-vietnam-poster",
    14: "bis-student-chapter-deputy-secretary",
    18: "science-club-presidential-certificate",
    20: "science-club-executive-director-multimedia-thoufikur",
    27: "msme-workshop-certificate-thoufikur",
    28: "svce-film-clapper-memento-design",
    30: "msme-hackathon-turn-idea-startup",
    31: "deepavali-festival-creative",
    32: "abiento-science-expo-engineers-day",
    33: "icube-6-national-technical-symposium",
    36: "milad-un-nabi-12-rabi-ul-awwal-greeting",
    40: "e-cell-inauguration-auditorium-backdrop",
    42: "dream-2-reality-idea-competition",
    43: "onam-festival-celebration-creative",
    46: "svce-epic-minor-in-entrepreneurship",
    49: "icube-24hr-hackathon-campaign",
    50: "icube-5-ideate-innovate-investigate",
    57: "science-club-open-positions-call",
    60: "gandhi-jayanti-peace-reflection",
    62: "e-cell-inauguration-keynote-poster",
    63: "science-club-recruitment-multimedia-web-marketing",
    64: "where-business-meets-kollywood-conclave",
    66: "podcast-team-recruitment-speak-edit-create",
    67: "science-club-tech-web-recruitment",
    79: "e-cell-svce-official-platform-launch",
}

for p, slug in slug_map.items():
    raw_info = raw_by_page[p]
    raw_fn = raw_info["filename"]
    raw_path = os.path.join(raw_art_dir, raw_fn)
    
    jpg_dest = os.path.join(dest_dir, f"{slug}.jpg")
    webp_dest = os.path.join(dest_dir, f"{slug}.webp")
    
    with Image.open(raw_path) as im:
        im.save(jpg_dest, "JPEG", quality=92, optimize=True)
        im.save(webp_dest, "WEBP", quality=88)
    
    # Also copy the raw file
    shutil.copy2(raw_path, os.path.join(dest_dir, raw_fn))
    print(f"Processed page {p} -> {slug}")

print("All replacement images generated successfully.")

