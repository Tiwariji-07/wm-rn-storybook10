import type { StorybookConfig } from "@storybook/react-native-web-vite";

const main: StorybookConfig = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: ["@storybook/addon-docs", "@chromatic-com/storybook",
    'storybook/addon-actions'
  ],

  framework: {
    name: "@storybook/react-native-web-vite",
    options: {},
  },
};

export default main;
