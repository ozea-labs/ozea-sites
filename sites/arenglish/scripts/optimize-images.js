const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const IMG_DIR = path.join(__dirname, "..", "public", "images");

async function optimizeHeroBackground() {
  const src = path.join(IMG_DIR, "hero-background.png");
  if (!fs.existsSync(src)) return;

  // Desktop hero: 1920x1080 covers up to 1080p+ screens comfortably.
  // Quality 68 is plenty since the image sits under a ~85% dark overlay.
  await sharp(src)
    .resize(1920, 1080, { fit: "cover", position: "center" })
    .webp({ quality: 68, effort: 6 })
    .toFile(path.join(IMG_DIR, "hero-bg.webp"));

  // Mobile: portrait crop so faces/focal content survive the narrow viewport.
  await sharp(src)
    .resize(1024, 1366, { fit: "cover", position: "center" })
    .webp({ quality: 68, effort: 6 })
    .toFile(path.join(IMG_DIR, "hero-bg-mobile.webp"));

  console.log("✓ hero-bg.webp + hero-bg-mobile.webp");
}

async function optimizeOgImage() {
  // Pick up any "Facebook cover" style source that shows up in public/images.
  const candidates = fs.existsSync(IMG_DIR)
    ? fs
        .readdirSync(IMG_DIR)
        .filter(
          (f) =>
            /(facebook|capa|cover)/i.test(f) && /\.(png|jpe?g)$/i.test(f) &&
            !/^og-image/.test(f)
        )
    : [];
  if (candidates.length === 0) return;

  const src = path.join(IMG_DIR, candidates[0]);

  await sharp(src)
    .resize(1200, 630, { fit: "cover", position: "center" })
    .jpeg({ quality: 85, progressive: true, mozjpeg: true })
    .toFile(path.join(IMG_DIR, "og-image.jpg"));

  await sharp(src)
    .resize(1200, 630, { fit: "cover", position: "center" })
    .webp({ quality: 82 })
    .toFile(path.join(IMG_DIR, "og-image.webp"));

  console.log(`✓ og-image.{jpg,webp} from ${candidates[0]}`);
}

async function run() {
  await optimizeHeroBackground();
  await optimizeOgImage();

  const files = fs
    .readdirSync(IMG_DIR)
    .filter((f) => /\.(webp|jpg|jpeg|png)$/i.test(f));
  const stats = files.map((f) => ({
    file: f,
    sizeKB: (fs.statSync(path.join(IMG_DIR, f)).size / 1024).toFixed(1),
  }));
  console.table(stats);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
