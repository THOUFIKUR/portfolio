import json
import pathlib
import sys
import urllib.request

URL = "http://localhost:5173/"

try:
    with urllib.request.urlopen(URL, timeout=5) as resp:
        print(f"HTTP status for {URL}: {resp.status}")
except Exception as e:
    print(f"Dev server check note: {e}")

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    print("Playwright not installed in python environment; skipping headless browser pass.")
    sys.exit(0)

results = {
    "console_errors": [],
    "page_errors": [],
    "failed_requests": [],
    "broken_images": [],
    "viewports": {},
    "tracks": {},
    "wordmark_has_dot": False,
    "duplicate_gallery_srcs": [],
    "excluded_assets_present": [],
}

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(viewport={"width": 1440, "height": 900})
    page = context.new_page()

    page.on("console", lambda msg: results["console_errors"].append(msg.text) if msg.type == "error" else None)
    page.on("pageerror", lambda err: results["page_errors"].append(str(err)))
    page.on("requestfailed", lambda req: results["failed_requests"].append(f"{req.url}: {req.failure}"))

    page.goto(URL, wait_until="networkidle")
    page.wait_for_timeout(800)

    # Check wordmark in header and footer
    body_text = page.locator("header").inner_text()
    footer_text = page.locator("footer").inner_text()
    results["wordmark_has_dot"] = ("THOUFIKUR." in body_text) or ("THOUFIKUR." in footer_text)
    results["header_wordmark"] = body_text.splitlines()[0] if body_text else ""

    # Check hero default active track & switching
    results["tracks"]["initial_hash"] = page.url
    results["tracks"]["initial_h1"] = page.locator("h1").inner_text()

    page.get_by_role("button", name="Electrical Engineering").click()
    page.wait_for_timeout(300)
    results["tracks"]["engineering_hash"] = page.url
    results["tracks"]["engineering_h1"] = page.locator("h1").inner_text()

    page.get_by_role("button", name="Software & AI Exposure").click()
    page.wait_for_timeout(300)
    results["tracks"]["technology_hash"] = page.url
    results["tracks"]["technology_h1"] = page.locator("h1").inner_text()

    page.get_by_role("button", name="Graphic Design (Primary)").click()
    page.wait_for_timeout(300)
    results["tracks"]["creative_hash"] = page.url

    # Scroll through entire page to trigger all IntersectionObserver & lazy images
    total_height = page.evaluate("document.body.scrollHeight")
    for y in range(0, total_height + 400, 600):
        page.evaluate(f"window.scrollTo(0, {y})")
        page.wait_for_timeout(120)
    page.wait_for_timeout(800)

    # Check images loaded and check duplicate artwork images across Selected Work & Archive
    img_info = page.evaluate("""() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        return imgs.map(img => ({
            src: img.currentSrc || img.getAttribute('src'),
            complete: img.complete,
            naturalWidth: img.naturalWidth,
            section: img.closest('section')?.id || 'other'
        }));
    }""")
    for item in img_info:
        if not item["complete"] or item["naturalWidth"] == 0:
            results["broken_images"].append(item)

    creative_imgs = [i["src"] for i in img_info if i["section"] in ("selected-work", "creative-archive")]
    seen = set()
    for src in creative_imgs:
        if src in seen:
            results["duplicate_gallery_srcs"].append(src)
        seen.add(src)
    results["unique_creative_cards_rendered"] = len(seen)

    # Check responsive viewports
    for name, vp in [("desktop_1440", (1440, 900)), ("tablet_768", (768, 1024)), ("mobile_390", (390, 844))]:
        page.set_viewport_size({"width": vp[0], "height": vp[1]})
        page.wait_for_timeout(300)
        overflow = page.evaluate("document.documentElement.scrollWidth > window.innerWidth + 2")
        results["viewports"][name] = {
            "overflow_x": overflow,
            "scrollWidth": page.evaluate("document.documentElement.scrollWidth"),
            "innerWidth": page.evaluate("window.innerWidth"),
        }

    # Check excluded filenames in dist if built
    dist_creative = pathlib.Path("D:/portfolio/dist/projects/creative")
    if dist_creative.exists():
        bad_patterns = ["art_p02", "art_p06", "art_p07", "art_p11", "art_p19", "art_p35", "art_p48", "art_p71", "art_p72", "art_p73", "highways", "dussehra", "gyaan-overseas", "cpo-guest"]
        for f in dist_creative.iterdir():
            for pat in bad_patterns:
                if pat in f.name:
                    results["excluded_assets_present"].append(f.name)

    browser.close()

print(json.dumps(results, indent=2))

