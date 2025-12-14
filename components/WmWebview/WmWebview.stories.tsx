import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import WmWebview from "@wavemaker/app-rn-runtime/components/advanced/webview/webview.component";
import { action } from "storybook/actions";

const meta = {
  title: "Basic/Webview",
  component: WmWebview,
  decorators: [
    (Story) => (
      <View style={{ padding: 16,width:'100%'}}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmWebView Component

A component that renders web content within your application.

## Features
- Web content rendering
- JavaScript execution support
- Navigation controls
- Custom styling options
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the WebView |
| source | string | - | URL to load in the WebView |
| html | string | '' | HTML content to render |
| baseUrl | string | '' | Base URL for relative paths |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| showsHorizontalScrollIndicator | boolean | true | Show horizontal scroll indicator |
| showsVerticalScrollIndicator | boolean | true | Show vertical scroll indicator |
| javaScriptEnabled | boolean | true | Enable JavaScript execution |
| domStorageEnabled | boolean | true | Enable DOM storage |
| startInLoadingState | boolean | true | Show loading indicator initially |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | - | Width of the WebView |
| height | number/string | - | Height of the WebView |
| styles | object | {} | Custom styles for the component |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onLoad | () | Triggered when content is loaded |
| onError | (error: Error) | Triggered when an error occurs |
| onNavigationStateChange | (navState: object) | Triggered on navigation state change |
| onMessage | (message: object) | Triggered when message is received |

## Usage Notes
- The component supports both URL and HTML content
- JavaScript execution can be enabled/disabled
- Navigation state changes can be monitored
- Custom styling can be applied through the styles prop
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  },
} satisfies Meta<typeof WmWebview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    src: "https://storybook.js.org/",
    // onLoad: action("onLoad"),
    styles:{ root: { height: 350 }, text: {} }
  },
};



// export const ExecuteScript: Story = {
//   render: (args) => {
//     const webviewRef = useRef(null);

//     useEffect(() => {
//       const script = "alert('Hello from WebView!');";
//       if (webviewRef.current) {
//         webviewRef.current.webview.executeScript(script);
//       }
//     }, []);

//     return <WmWebview {...args} ref={webviewRef} />;
//   },
//   args: {
//     ...Basic.args,
    
//   },
// };

// export const InsertCSS: Story = {
//   render: (args) => {
//     const webviewRef = useRef(null);

//     useEffect(() => {
//       const css = "body { background-color: lightblue; }";
//       if (webviewRef.current) {
//         webviewRef.current.webview.insertCSS(css);
//       }
//     }, []);

//     return <WmWebview {...args} ref={webviewRef} />;
//   },
//   args: {
//     ...Basic.args,
//   },
// };
