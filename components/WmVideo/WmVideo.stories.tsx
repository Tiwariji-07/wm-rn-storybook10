import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmVideo from "@wavemaker/app-rn-runtime/components/basic/video/video.component";
import { AssetProvider } from "@wavemaker/app-rn-runtime/core/asset.provider";
import { handleAsset } from "../../services/Assethandler";
import { VideoServiceComponent } from "../../services/VideoService";

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
  title: "Basic/Video",
  component: WmVideo,
  decorators: [
    (Story) => (
      <VideoServiceComponent>
        <AssetProvider value={handleAsset}>
          <View style={{ padding: 16 }}>
            <Story />
          </View>
        </AssetProvider>
      </VideoServiceComponent>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      page: Docs,
    }
  },
  argTypes: {
    controls: {
      table: {
        disable: true,
      }
    },
    videopreload: {
      table: {
        disable: true,
      }
    },
    mp4format: {
      control: "text",
      name: "video source",
    }
  }
} satisfies Meta<typeof WmVideo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicVideo",
    mp4format: "https://videos.pexels.com/video-files/5155396/5155396-uhd_2560_1440_30fps.mp4",
    autoplay: false,
    loop: false,
    controls: "controls",
    videopreload: "none",
    showcontrols: true,
    width: 600,
    height: 280,
    // showdefaultvideoposter:true,
    styles: {
      root: {
        width: 600,
        height: 280,
      }
    }

  },
};
