import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ?? new URL("https://isanketsaha.github.io");
  const sitemapUrl = new URL("sitemap-index.xml", siteUrl);

  return new Response(
    `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl.href}\n`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
};
