const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const IMG_DIR = path.join(__dirname, "..", "public", "images");
const FB_COVER = path.join(
  IMG_DIR,
  "Aula de Inglês Moderno Branco e Azul Capa para Facebook.png"
);

async function run() {
  if (!fs.existsSync(FB_COVER)) {
    console.error("Source image not found:", FB_COVER);
    process.exit(1);
  }

  // OG image: 1200x630 JPEG (standard for social media)
  await sharp(FB_COVER)
    .resize(1200, 630, { fit: "cover", position: "center" })
    .jpeg({ quality: 85, progressive: true, mozjpeg: true })
    .toFile(path.join(IMG_DIR, "og-image.jpg"));

  // Same OG image as WebP for modern browsers
  await sharp(FB_COVER)
    .resize(1200, 630, { fit: "cover", position: "center" })
    .webp({ quality: 82 })
    .toFile(path.join(IMG_DIR, "og-image.webp"));

  // Hero-friendly wide version at 1920x1080 WebP (in case we want to use it as background)
  await sharp(FB_COVER)
    .resize(1920, 1080, { fit: "cover", position: "center" })
    .webp({ quality: 78 })
    .toFile(path.join(IMG_DIR, "cover-wide.webp"));

  // Compressed PNG fallback of the full cover
  await sharp(FB_COVER)
    .resize(1640, 924)
    .png({ quality: 85, compressionLevel: 9, palette: true })
    .toFile(path.join(IMG_DIR, "cover.png"));

  const stats = await Promise.all(
    ["og-image.jpg", "og-image.webp", "cover-wide.webp", "cover.png"].map(
      async (f) => {
        const { size } = await fs.promises.stat(path.join(IMG_DIR, f));
        return { file: f, sizeKB: (size / 1024).toFixed(1) };
      }
    )
  );
  console.table(stats);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
