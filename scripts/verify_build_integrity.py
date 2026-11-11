import json
import pathlib
import re

root = pathlib.Path("D:/portfolio")
dist = root / "dist"

report = {
    "dist_exists": dist.exists(),
    "excluded_pages": [2, 6, 7, 11, 12, 19, 35, 48, 52, 56, 61, 71, 72, 73, 76],
    "excluded_files_in_public": [],
    "excluded_files_in_dist": [],
    "missing_referenced_images_in_dist": [],
    "wordmark_dot_hits_in_src": [],
    "phone_number_leaks_in_src": [],
    "pdf_page_badge_leaks_in_tsx": [],
    "decorative_purple_heading_dots": [],
    "featured_count": 0,
    "archive_count": 0,
    "total_curated_count": 0,
    "case_study_count": 0,
    "cgpa_exact_present": False,
    "schwing_dates_present": False,
    "cmrl_dates_present": False,
    "retinascan_exact_url_present": False,
}

bad_patterns = [
    "art_p02", "art_p06", "art_p07", "art_p11", "art_p12", "art_p17", "art_p19",
    "art_p35", "art_p48", "art_p52", "art_p56", "art_p61", "art_p71",
    "art_p72", "art_p73", "art_p76", "highways-26", "dussehra",
    "gyaan-overseas", "cpo-guest", "etched-sohu", "msme-idea-hackathon",
    "e-cell-certificate", "executive-directors-announcement"
]

pub_creative = root / "public" / "projects" / "creative"
dist_creative = dist / "projects" / "creative"

for p in pub_creative.iterdir():
    if any(pat in p.name for pat in bad_patterns):
        report["excluded_files_in_public"].append(p.name)

if dist_creative.exists():
    for p in dist_creative.iterdir():
        if any(pat in p.name for pat in bad_patterns):
            report["excluded_files_in_dist"].append(p.name)

src_dir = root / "src"
for f in list(src_dir.rglob("*.ts")) + list(src_dir.rglob("*.tsx")) + [root / "index.html", root / "public" / "favicon.svg"]:
    text = f.read_text(encoding="utf-8")
    if "THOUFIKUR." in text:
        report["wordmark_dot_hits_in_src"].append(str(f.relative_to(root)))
    if "6383302400" in text:
        report["phone_number_leaks_in_src"].append(str(f.relative_to(root)))

# Verify ZERO PDF page-number UI leaks and ZERO decorative heading dots in TSX files
for f in src_dir.rglob("*.tsx"):
    text = f.read_text(encoding="utf-8")
    if re.search(r"sourcePdfPage|PDF Page|Pages?\s+\d{1,2}\b|Page\s*\{", text):
        report["pdf_page_badge_leaks_in_tsx"].append(str(f.relative_to(root)))
    if 'text-purple-electric">.</span>' in text:
        report["decorative_purple_heading_dots"].append(str(f.relative_to(root)))

manifest_text = (src_dir / "data" / "projectsManifest.ts").read_text(encoding="utf-8")
featured_flags = re.findall(r"featured:\s*(true|false)", manifest_text)
report["featured_count"] = featured_flags.count("true")
report["archive_count"] = featured_flags.count("false")
report["total_curated_count"] = len(featured_flags)
report["case_study_count"] = len(re.findall(r"id:\s*'cs-", manifest_text))

# Check every /projects/... and /images/... asset referenced in projectsManifest + TSX exists in dist
refs = set(re.findall(r"['\"](/(?:projects|images|documents)/[^'\"]+)['\"]", manifest_text))
refs.update([
    "/images/thoufikur-hero.webp",
    "/images/thoufikur-hero.jpg",
    "/images/thoufikur-about.webp",
    "/images/thoufikur-about.jpg",
    "/documents/thoufikur-rahaman-resume.pdf",
])

for ref in sorted(refs):
    target = dist / ref.lstrip("/")
    if not target.exists():
        report["missing_referenced_images_in_dist"].append(ref)

resume_text = (src_dir / "data" / "resumeData.ts").read_text(encoding="utf-8")
report["cgpa_exact_present"] = "8.39 / 10.0 (Up to 4th Semester)" in resume_text
report["schwing_dates_present"] = "1 July 2026 – 15 July 2026" in resume_text
report["cmrl_dates_present"] = "1 December 2025 – 30 December 2025" in resume_text
report["retinascan_exact_url_present"] = "https://sightsheild-ai.vercel.app/" in manifest_text

print(json.dumps(report, indent=2))
