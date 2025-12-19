import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import WmWebview from "@wavemaker/app-rn-runtime/components/advanced/webview/webview.component";
import { action } from "storybook/actions";

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";


const Docs = () => (
  <ComponentDocumentation
    overview={overview}
    props={props}
    events={events}
    methods={methods}
    styling={styling}
  />
);

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
      page: Docs,
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
