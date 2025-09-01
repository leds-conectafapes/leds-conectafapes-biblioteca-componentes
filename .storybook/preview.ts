import type { Preview } from "@storybook/vue3";
import { themes } from "@storybook/theming";
import "./preview.css";
import "../src/style.css";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
