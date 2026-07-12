"""Regenerate public/og.png (1200x630) using the real brand fonts + photo.

Requires the Playfair/Inter variable TTFs converted from the project's
own @fontsource woff2 files (PIL can't read woff2 directly), and the
real profile photo. Convert fonts with fontTools:

    from fontTools.ttLib import TTFont
    f = TTFont("node_modules/@fontsource-variable/<font>/files/<file>.woff2")
    f.flavor = None
    f.save("/tmp/<name>.ttf")
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630
PLAYFAIR = "/tmp/playfair.ttf"
INTER = "/tmp/inter.ttf"
PHOTO = "src/assets/images/perfil.png"

BG = "#FAF9F6"
INK = "#232323"
NAVY = "#1E3A5F"
GOLD = "#C3A562"
BODY = "#4a4a4a"
MUTED = "#8a8478"


def load(path, size, weight=None):
    f = ImageFont.truetype(path, size)
    if weight:
        try:
            f.set_variation_by_axes([weight])
        except Exception as e:
            print("variation failed", e)
    return f


def rounded_photo(path, size, radius):
    im = Image.open(path).convert("RGB").resize((size, size), Image.LANCZOS)
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, size, size], radius=radius, fill=255)
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(im, (0, 0), mask)
    return out


img = Image.new("RGB", (W, H), BG)

# soft gold glow, top-right
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gdraw = ImageDraw.Draw(glow)
gdraw.ellipse([W - 520, -260, W + 260, 400], fill=(195, 165, 98, 60))
glow = glow.filter(ImageFilter.GaussianBlur(40))
img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")
draw = ImageDraw.Draw(img)

draw.rectangle([0, 0, W, 6], fill=GOLD)

inter_semibold = load(INTER, 21, 600)
inter_badge = load(INTER, 15, 600)
inter_body = load(INTER, 24, 400)
inter_cta = load(INTER, 21, 700)
inter_footer = load(INTER, 16, 600)
inter_footer_sub = load(INTER, 16, 400)
playfair_wordmark = load(PLAYFAIR, 24, 700)
playfair_title = load(PLAYFAIR, 52, 700)

x = 70
y = 56

# monogram + wordmark, top-left
mono_size = 40
draw.rounded_rectangle([x, y, x + mono_size, y + mono_size], radius=10, fill=NAVY)
mono_font = load(PLAYFAIR, 22, 700)
mbbox = draw.textbbox((0, 0), "M", font=mono_font)
mw, mh = mbbox[2] - mbbox[0], mbbox[3] - mbbox[1]
draw.text(
    (x + (mono_size - mw) / 2 - mbbox[0], y + (mono_size - mh) / 2 - mbbox[1]),
    "M",
    font=mono_font,
    fill=GOLD,
)
draw.text((x + mono_size + 14, y + 8), "Moacir Lima Jr", font=playfair_wordmark, fill=INK)

y += 78

# badge pill
badge_text = "ESPECIALISTA EM E-COMMERCE"
bbox = draw.textbbox((0, 0), badge_text, font=inter_badge)
bw, bh = bbox[2] - bbox[0], bbox[3] - bbox[1]
pad_x, pad_y = 16, 10
pill_w = bw + pad_x * 2 + 18
pill_h = bh + pad_y * 2
draw.rounded_rectangle(
    [x, y, x + pill_w, y + pill_h], radius=pill_h // 2, outline=(30, 58, 95, 90), width=1
)
dot_r = 3
draw.ellipse(
    [x + 16, y + pill_h / 2 - dot_r, x + 16 + dot_r * 2, y + pill_h / 2 + dot_r], fill=GOLD
)
draw.text((x + 16 + dot_r * 2 + 8, y + pad_y - bbox[1]), badge_text, font=inter_badge, fill=NAVY)

y += pill_h + 26

# title
for line in ["Sua loja profissional,", "pronta para vender."]:
    draw.text((x, y), line, font=playfair_title, fill=INK)
    y += 62

y += 12
draw.text((x, y), "Shopify, Nuvemshop e WooCommerce sob medida.", font=inter_body, fill=BODY)
y += 34
draw.text((x, y), "Projetos a partir de R$ 1.800.", font=inter_body, fill=BODY)

# CTA button
cta_text = "Falar no WhatsApp »"
btn_y = y + 44
padding_x, padding_y = 24, 15
tb = draw.textbbox((0, 0), cta_text, font=inter_cta)
tw, th = tb[2] - tb[0], tb[3] - tb[1]
btn_w = tw + padding_x * 2
btn_h = th + padding_y * 2
draw.rounded_rectangle([x, btn_y, x + btn_w, btn_y + btn_h], radius=8, fill=INK)
draw.text((x + padding_x, btn_y + padding_y - tb[1]), cta_text, font=inter_cta, fill=BG)

# photo, top-right
photo_size = 300
photo_x = W - photo_size - 74
photo_y = 54
frame_pad = 14
draw.rounded_rectangle(
    [photo_x + frame_pad, photo_y - frame_pad, photo_x + photo_size + frame_pad * 2, photo_y - frame_pad + photo_size],
    radius=22,
    outline=(195, 165, 98, 140),
    width=1,
)
photo = rounded_photo(PHOTO, photo_size, 20)
shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sdraw = ImageDraw.Draw(shadow)
sdraw.rounded_rectangle(
    [photo_x, photo_y + 14, photo_x + photo_size, photo_y + photo_size + 14],
    radius=20,
    fill=(35, 35, 35, 90),
)
shadow = shadow.filter(ImageFilter.GaussianBlur(24))
img = Image.alpha_composite(img.convert("RGBA"), shadow).convert("RGB")
img.paste(photo, (photo_x, photo_y), photo)
draw = ImageDraw.Draw(img)

# footer bar
footer_y = H - 76
draw.line([(0, footer_y), (W, footer_y)], fill=(35, 35, 35, 30), width=1)
draw.text((x, footer_y + 26), "MOACIRJUN.DEV", font=inter_footer, fill=NAVY)
label = "Especialista em E-commerce"
lb = draw.textbbox((0, 0), label, font=inter_footer_sub)
lw = lb[2] - lb[0]
draw.text((W - 70 - lw, footer_y + 26), label, font=inter_footer_sub, fill=MUTED)

img.save("public/og.png")
print("saved", img.size)
