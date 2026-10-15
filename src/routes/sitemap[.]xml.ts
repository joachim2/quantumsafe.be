import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl, sitemapPaths } from "@/config/siteConfig";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = sitemapPaths.map(path => `<url><loc>${absoluteUrl(path)}</loc></url>`).join("");
        return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
