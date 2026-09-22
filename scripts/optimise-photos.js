/*
 * Resize and convert photos for the web, with no external dependencies.
 *
 *   node scripts/optimise-photos.js <sourceDir> <outDir> [maxWidth]
 *
 * Example:
 *   node scripts/optimise-photos.js photos/gallery frontend/public/newsroom
 *
 * Originals are never modified. Output names are lowercased and hyphenated.
 * Uses PowerShell + System.Drawing, which ships with Windows.
 */

const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const [, , srcArg, outArg, widthArg] = process.argv;

if (!srcArg || !outArg) {
  console.error("Usage: node scripts/optimise-photos.js <sourceDir> <outDir> [maxWidth]");
  process.exit(1);
}

const srcDir = path.resolve(srcArg);
const outDir = path.resolve(outArg);
const maxWidth = Number(widthArg) || 1600;

if (!fs.existsSync(srcDir)) {
  console.error(`Source directory not found: ${srcDir}`);
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });

const slug = (name) =>
  path
    .basename(name, path.extname(name))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const images = fs
  .readdirSync(srcDir)
  .filter((f) => /\.(jpe?g|png)$/i.test(f))
  .sort();

if (images.length === 0) {
  console.log(`No .jpg or .png files found in ${srcDir}`);
  process.exit(0);
}

const script = `
Add-Type -AssemblyName System.Drawing
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$ep = New-Object System.Drawing.Imaging.EncoderParameters 1
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), 82L
$pairs = @(${images.map((f) => `@{ src = '${path.join(srcDir, f).replace(/'/g, "''")}'; dest = '${path.join(outDir, `${slug(f)}.jpg`).replace(/'/g, "''")}' }`).join(", ")})
foreach ($p in $pairs) {
  $img = [System.Drawing.Image]::FromFile($p.src)
  $w = ${maxWidth}
  if ($img.Width -lt $w) { $w = $img.Width }
  $h = [int]($img.Height * ($w / $img.Width))
  $bmp = New-Object System.Drawing.Bitmap $w, $h
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.Clear([System.Drawing.Color]::White)
  $g.DrawImage($img, 0, 0, $w, $h)
  $bmp.Save($p.dest, $codec, $ep)
  $g.Dispose(); $bmp.Dispose(); $img.Dispose()
  $kb = [int]((Get-Item $p.dest).Length / 1KB)
  Write-Output ("  {0}  ({1}x{2}, {3} KB)" -f (Split-Path $p.dest -Leaf), $w, $h, $kb)
}
`;

console.log(`Optimising ${images.length} photo(s) to ${outDir} at ${maxWidth}px wide:`);
const output = execFileSync(
  "powershell.exe",
  ["-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", script],
  { encoding: "utf8" }
);
console.log(output.trimEnd());
console.log(`\nNow add an entry per photo to frontend/src/content/newsroom.ts`);
