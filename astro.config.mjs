import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import { sanityIntegration } from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://trippy-trip.netlify.app/",
  output: "hybrid",
  integrations: [
    tailwind(),
    icon(),
    sanityIntegration({
      projectId: "u63a7pny",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: true,
      studioBasePath: "/admin",
    }),
    react(),
  ],
  adapter: netlify(),
});
