import pathlib
import re

root = pathlib.Path(__file__).resolve().parent.parent
manifest = (root / "src" / "data" / "projectsManifest.ts").read_text(encoding="utf-8")

# Find all /projects/creative/... references (both image and rawImage if any)
used = set(re.findall(r"/projects/creative/([^\"'\s]+)", manifest))
creative_dir = root / "public" / "projects" / "creative"

all_files = [p for p in creative_dir.iterdir() if p.is_file()]
unused = [p for p in all_files if p.name not in used]

print(f"Used referenced filenames: {len(used)}")
print(f"Total files in public/projects/creative: {len(all_files)}")
print(f"Removing {len(unused)} unused/excluded files:")

for p in sorted(unused):
    print(f"  - {p.name}")
    p.unlink()

print("Cleanup complete.")

