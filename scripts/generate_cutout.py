import os
from PIL import Image
from rembg import remove

input_path = r"D:\portfolio\mine.jpg"
output_png = r"D:\portfolio\public\images\thoufikur-cutout.png"
output_preview = r"D:\portfolio\public\images\thoufikur-cutout-preview.webp"

print("Removing background using rembg...")
with Image.open(input_path) as inp:
    # Process with rembg
    result = remove(inp)
    result.save(output_png, "PNG")
    print(f"Saved transparent cutout to {output_png} (size: {result.size})")

    # Generate preview on neutral background to verify quality
    bg = Image.new("RGBA", result.size, (232, 220, 196, 255)) # Sand Beige background
    composite = Image.alpha_composite(bg, result)
    composite.convert("RGB").save(output_preview, "WEBP", quality=90)
    print(f"Saved preview to {output_preview}")

print("Background cutout generation completed successfully!")

