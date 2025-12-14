import type { Preview } from "@storybook/react-native";

// Mock matchMedia for React Native Web
if (typeof window !== "undefined") {
  const matchMediaPolyfill = () => ({
    matches: false,
    addListener: () => { },
    removeListener: () => { },
    addEventListener: () => { },
    removeEventListener: () => { },
    dispatchEvent: () => false,
    media: "",
  });

  window.matchMedia = window.matchMedia || matchMediaPolyfill;

  // Also mock prefersReducedMotionMedia specifically
  Object.defineProperty(window, "prefersReducedMotionMedia", {
    writable: true,
    value: matchMediaPolyfill(),
  });
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ["Basic", "*"],
      },
    },
    chromatic: {
      disableSnapshot: true,
    },
  },
  argTypes: {
    styles: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    dataset: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      }
    }
  },
  tags: ["autodocs"],
};

export default preview;
