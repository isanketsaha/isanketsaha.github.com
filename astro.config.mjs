// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://isanketsaha.github.io",
  integrations: [
    sitemap({
      filter: (page) => page !== "https://isanketsaha.github.io/blog/",
    }),
  ],
  build: {
    assets: "_assets",
  },
});
