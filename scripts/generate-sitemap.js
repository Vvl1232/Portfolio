import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl =
  process.env.SITE_URL ||
  process.env.VITE_SITE_URL ||
  "https://vinitlimkar.com";

const today = new Date().toISOString().split("T")[0];

const pages = [
  { url: "/", changefreq: "weekly", priority: "1.0" },
  { url: "/projects", changefreq: "weekly", priority: "0.9" },
  { url: "/skills", changefreq: "monthly", priority: "0.8" },
  { url: "/experience", changefreq: "monthly", priority: "0.8" },
  { url: "/contact", changefreq: "monthly", priority: "0.7" },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${siteUrl.replace(/\/$/, "")}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const publicDir = path.resolve(__dirname, "..", "public");
fs.mkdirSync(publicDir, { recursive: true });

const outPath = path.join(publicDir, "sitemap.xml");
fs.writeFileSync(outPath, sitemap, "utf8");

console.log(`Sitemap generated: ${outPath}`);
