// sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";
import deskStructure from "./deskStructure";
import { Logo } from "./src/sanity/plugins/logoSanity";
import { visionTool } from "@sanity/vision";
import { assist } from "@sanity/assist";

export default defineConfig({
  name: "trippy-backend",
  title: "trippy-backend",
  projectId: "u63a7pny",
  dataset: "production",
  useCdn: true,
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool(),
    assist(),
  ],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
    },
  },
});
