import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  integrations: [react()],
});
