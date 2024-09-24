import { defineConfig } from "cypress";
import { installPlugin } from "@chromatic-com/cypress"


export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173/chromatic-storybook",
    setupNodeEvents(on, config) {
      installPlugin(on, config)
    },
  },
});
