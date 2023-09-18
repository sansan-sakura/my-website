import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  integrations: [react()],
  output: "server",
  adapter: vercel()
});