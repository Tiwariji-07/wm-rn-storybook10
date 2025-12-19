import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmSpinner from "@wavemaker/app-rn-runtime/components/basic/spinner/spinner.component";
import { AssetProvider } from "@wavemaker/app-rn-runtime/core/asset.provider";
import { handleAsset } from "../../services/Assethandler";

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
  title: "Basic/Spinner",
  component: WmSpinner,
  decorators: [
    (Story) => (
      <AssetProvider value={handleAsset}>
        <View style={{ padding: 16 }}>
          <Story />
        </View>
      </AssetProvider>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    }
  },
} satisfies Meta<typeof WmSpinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicSpinner",
    caption: "Loading...",
    show: true,
    fontsize: '',
    color: "",
    backgroundcolor: "",
    iconsize: "22px",
    iconclass: "wm-sl-r sl-loading ",

    styles: {
      root: {
        padding: 8,
        borderRadius: 4,
        minWidth: 180,

      }
    }
  },
  argTypes: {
    iconclass: {
      control: {
        type: "select"
      },
      options: ["fa fa-spinner", "wm-sl-r sl-loading-half", "wi wi-spinner",
      ],
      name: "icon class"
    },
  }
};



export const ImageSpinner: Story = {
  args: {
    name: "spinneImage",
    caption: "",
    type: "image",
    image: "https://media2.giphy.com/media/yyqOUPn5souNBSHUnU/giphy.gif?cid=6c09b952r7hflymkr24fukor7o0567zf293elcewo9s3tia2&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s",
    // imagewidth:"100px",
    // imageheight:"100px"
    // styles:{
    //   root:{

    //       height:100,

    //   }
    // }
  },
};

