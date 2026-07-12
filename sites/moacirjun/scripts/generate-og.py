"""Regenerate public/og.png (1200x630) using the real brand fonts.

Requires the Playfair/Inter variable TTFs converted from the project's
own @fontsource woff2 files (PIL can't read woff2 directly). See the
sibling command used in the dev session, or convert with fontTools:

    from fontTools.ttLib import TTFont
    f = TTFont("node_modules/@fontsource-variable/<font>/files/<file>.woff2")
    f.flavor = None
    f.save("/tmp/<name>.ttf")
"""

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
PLAYFAIR = "/tmp/playfair.ttf"
INTER = "/tmp/inter.ttf"


def load(path, size, weight=None):
    f = ImageFont.truetype(path, size)
    if weight:
        try:
            f.set_variation_by_axes([weight])
        except Exception as e:
            print("variation failed", e)
    return f


img = Image.new("RGB", (W, H), "#1E3A5F")

glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gdraw = ImageDraw.Draw(glow)
gdraw.ellipse([W - 650, -250, W + 150, 450], fill=(195, 165, 98, 45))
img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")
draw = ImageDraw.Draw(img)

draw.rectangle([0, 0, W, 8], fill="#C3A562")

inter_semibold = load(INTER, 22, 600)
inter_body = load(INTER, 28, 400)
inter_name = load(INTER, 20, 500)
inter_cta = load(INTER, 22, 700)
playfair_bold = load(PLAYFAIR, 62, 700)
playfair_name = load(PLAYFAIR, 30, 700)

x = 90
y = 118
draw.text((x, y), "ESPECIALISTA EM E-COMMERCE", font=inter_semibold, fill="#C3A562")
y += 55

for line in ["Sua loja profissional,", "pronta para vender."]:
    draw.text((x, y), line, font=playfair_bold, fill="#FFFFFF")
    y += 74

y += 10
draw.text((x, y), "Shopify, Nuvemshop e WooCommerce sob medida.", font=inter_body, fill="#C6D0DC")
y += 40
draw.text((x, y), "Projetos a partir de R$ 1.800.", font=inter_body, fill="#C6D0DC")

# CTA button
cta_text = "Falar no WhatsApp »"
btn_y = y + 56
padding_x, padding_y = 26, 16
text_bbox = draw.textbbox((0, 0), cta_text, font=inter_cta)
text_w = text_bbox[2] - text_bbox[0]
text_h = text_bbox[3] - text_bbox[1]
btn_w = text_w + padding_x * 2
btn_h = text_h + padding_y * 2
draw.rounded_rectangle(
    [x, btn_y, x + btn_w, btn_y + btn_h], radius=10, fill="#C3A562"
)
draw.text(
    (x + padding_x, btn_y + padding_y - text_bbox[1]),
    cta_text,
    font=inter_cta,
    fill="#1E3A5F",
)

# footer
fy = H - 100
draw.text((x, fy), "Moacir Lima Jr", font=playfair_name, fill="#FFFFFF")
w = draw.textlength("Moacir Lima Jr", font=playfair_name)
draw.text((x + w + 20, fy + 6), "moacirjun.dev", font=inter_name, fill="#93A3B6")

img.save("public/og.png")
print("saved", img.size)
