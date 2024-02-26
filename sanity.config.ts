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
  title: process.env.SANITY_STUDIO_TITLE,
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET,
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
