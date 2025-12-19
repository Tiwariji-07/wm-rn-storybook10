import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmPicture from "@wavemaker/app-rn-runtime/components/basic/picture/picture.component";
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
  title: "Basic/Picture",
  component: WmPicture,
  args: {
    picturesource: "https://picsum.photos/200/350",
  },
  decorators: [
    (Story) => (
      <AssetProvider value={handleAsset}>
        <View style={{ padding: 16, backgroundColor: '#FFFFFF' }}>
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
} satisfies Meta<typeof WmPicture>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    picturesource: "https://picsum.photos/200",
    width: 200,
    height: 200,
    resizemode: "stretch",
    styles: {
      root: {
        width: 200,
        height: 200,
      },
    },
  },
  argTypes: {
    shape: {
      control: "select",
      options: ['circle', "rounded", "thumbnail"]
    }
  }
};
