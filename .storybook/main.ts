import type { StorybookConfig } from "@storybook/react-native-web-vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const main: StorybookConfig = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: ["@storybook/addon-docs", "@chromatic-com/storybook"],

  framework: {
    name: "@storybook/react-native-web-vite",
    options: {},
  },

  async viteFinal(config) {
    const stubPath = path.resolve(__dirname, './stubs');

    // Alias problematic React Native packages
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      // These have TypeScript syntax in .js files
      '@react-native-community/datetimepicker': path.join(stubPath, 'datetimepicker.js'),
      '@react-native/assets-registry': path.join(stubPath, 'assets-registry'),
      // Mock safe-area-context to provide default values (not null) for hooks
      'react-native-safe-area-context': path.join(stubPath, 'safe-area-context.js'),
      // Mock reanimated for web - provides makeMutable, useSharedValue, etc.
      'react-native-reanimated': path.join(stubPath, 'reanimated.js'),
    };

    return config;
  },
};

export default main;
