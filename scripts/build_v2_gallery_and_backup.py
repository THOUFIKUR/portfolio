import json
import pathlib
import shutil
from PIL import Image

root = pathlib.Path("D:/portfolio")
backup_dir = root / "_backup_pre_v2"
raw_art_dir = root / "extracted_artwork"
dest_dir = root / "public" / "projects" / "creative"

# 1. Back up current working version cleanly
if not backup_dir.exists():
    backup_dir.mkdir(parents=True, exist_ok=True)
    shutil.copytree(root / "src", backup_dir / "src")
    for fname in [
        "index.html",
        "tailwind.config.js",
        "package.json",
        "PROJECT_MANIFEST.json",
        "PROJECT_AUDIT.md",
        "CONTENT_QUESTIONS.md",
        "CHANGELOG_PORTFOLIO.md",
    ]:
        fpath = root / fname
        if fpath.exists():
            shutil.copy2(fpath, backup_dir / fname)
    print("Backed up current V1 files to _backup_pre_v2/")
else:
    print("Backup directory _backup_pre_v2/ already exists.")

# 2. Load raw manifest
raw_manifest = json.loads((root / "scripts" / "raw_manifest.json").read_text(encoding="utf-8"))
raw_by_page = {item["page"]: item for item in raw_manifest}

# Curated 42 unique works (6 Featured + 36 Archive)
# Permanently excluded: [2, 6, 7, 11, 12, 19, 35, 48, 71, 72, 73, 76] + duplicates/drafts/blanks
CURATED_SLUGS = {
    # 6 Featured Flagships
    53: "ecell-chief-design-officer-thoufikur",
    33: "icube-6-national-technical-symposium",
    40: "e-cell-inauguration-auditorium-backdrop",
    60: "gandhi-jayanti-peace-reflection",
    49: "icube-24hr-hackathon-campaign",
    64: "where-business-meets-kollywood-conclave",
    # 36 Curated Unique Archive Designs
    1: "earth-day-green-choices-april-22",
    3: "naveen-harish-photography-director-profile",
    5: "science-club-annual-induction-agenda",
    8: "classic-fitness-gym-commercial-poster",
    9: "bis-mahalakshmi-design-team-lead",
    10: "ecell-perumal-tech-team-banner",
    13: "deputy-secretary-editorial-magazine-thoufikur",
    14: "bis-student-chapter-deputy-secretary",
    16: "introducing-thoufikur-ed-multimedia-grid",
    18: "science-club-presidential-certificate",
    20: "science-club-executive-director-multimedia-thoufikur",
    23: "rayeesha-bhat-science-club-vice-president",
    25: "science-club-coordinator-appreciation-certificate",
    27: "msme-workshop-certificate-thoufikur",
    28: "svce-film-clapper-memento-design",
    29: "80th-independence-day-commemorative-poster",
    31: "deepavali-festival-creative",
    32: "abiento-science-expo-engineers-day",
    36: "milad-un-nabi-12-rabi-ul-awwal-greeting",
    37: "power-of-innovation-science-club-seminar",
    38: "ecell-meet-the-tech-team-2026-27",
    39: "ecell-meet-our-office-bearers-takeoff",
    41: "science-club-recruitment-result-2026-27",
    42: "dream-2-reality-idea-competition",
    43: "onam-festival-celebration-creative",
    46: "svce-epic-minor-in-entrepreneurship",
    47: "ecell-pitching-league-competition",
    50: "icube-5-4hrs-to-go-countdown",
    51: "happy-new-year-2026-greeting",
    57: "science-club-open-positions-call",
    62: "e-cell-inauguration-keynote-poster",
    63: "science-club-recruitment-multimedia-web-marketing",
    65: "happy-65th-teachers-day-chalkboard",
    66: "podcast-team-recruitment-speak-edit-create",
    67: "science-club-tech-web-recruitment",
    68: "science-club-ed-multimedia-typography-thoufikur",
    69: "science-club-core-members-issue-01-thoufikur",
    74: "ecell-meet-our-team-core-members",
    77: "ecell-president-roshan-editorial-profile",
    79: "e-cell-svce-official-platform-launch",
}

# Clean up any unwanted existing files in dest_dir (including Page 12 & old files)
dest_dir.mkdir(parents=True, exist_ok=True)
expected_filenames = set()
for p, slug in CURATED_SLUGS.items():
    raw_fn = raw_by_page[p]["filename"]
    expected_filenames.add(f"{slug}.webp")
    expected_filenames.add(f"{slug}.jpg")
    expected_filenames.add(raw_fn)

removed = 0
for f in dest_dir.iterdir():
    if f.is_file() and f.name not in expected_filenames:
        f.unlink()
        removed += 1
print(f"Removed {removed} stale/excluded files from public/projects/creative/ (including any Page 12 files).")

# Export sharp WebP + JPG + raw copy for all 46 curated works
# Wait: let's check total count of CURATED_SLUGS:
print(f"Total curated works in dict: {len(CURATED_SLUGS)}")

for p, slug in sorted(CURATED_SLUGS.items()):
    raw_fn = raw_by_page[p]["filename"]
    raw_path = raw_art_dir / raw_fn
    jpg_dest = dest_dir / f"{slug}.jpg"
    webp_dest = dest_dir / f"{slug}.webp"
    raw_dest = dest_dir / raw_fn

    if not webp_dest.exists() or not jpg_dest.exists():
        with Image.open(raw_path) as im:
            rgb = im.convert("RGB") if im.mode not in ("RGB", "RGBA") else im
            # Cap max dimension at 2200px for web crispness without multi-MB bloat
            if max(rgb.size) > 2200:
                rgb.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
            rgb.convert("RGB").save(jpg_dest, "JPEG", quality=90, optimize=True)
            rgb.convert("RGB").save(webp_dest, "WEBP", quality=86)
    if not raw_dest.exists():
        shutil.copy2(raw_path, raw_dest)

print("All V2 curated artwork files ready in public/projects/creative/.")

