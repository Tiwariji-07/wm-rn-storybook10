import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmVideo from "@wavemaker/app-rn-runtime/components/basic/video/video.component";
import { AssetProvider } from "@wavemaker/app-rn-runtime/core/asset.provider";
import { handleAsset } from "../../services/Assethandler";



const meta = {
  title: "Basic/Video",
  component: WmVideo,
  decorators: [
    (Story) => (
      <AssetProvider value={handleAsset}>
        <View style={{ padding: 16}}>
          <Story />
        </View>
      </AssetProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# WmVideo Component

A video player component that supports various video formats and playback controls.

## Features
- Video playback with controls
- Multiple video source support
- Custom styling options
- Playback control options
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the video player |
| source | string | - | URL or path to the video source |
| poster | string | '' | URL of the poster image |
| autoplay | boolean | false | Whether to autoplay the video |
| loop | boolean | false | Whether to loop the video |
| muted | boolean | false | Whether the video is muted |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| controls | boolean | true | Whether to show video controls |
| showposter | boolean | true | Whether to show the poster image |
| resizemode | string | 'contain' | How to resize the video |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | - | Width of the video player |
| height | number/string | - | Height of the video player |
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
| onPlay | () | Triggered when video starts playing |
| onPause | () | Triggered when video is paused |
| onEnd | () | Triggered when video ends |
| onError | (error: Error) | Triggered when an error occurs |
| onLoad | () | Triggered when video is loaded |

## Usage Notes
- The component supports various video formats (MP4, WebM, etc.)
- Custom styling can be applied through the styles prop
- The component is fully accessible with proper ARIA attributes
- Video controls can be customized or hidden
- Poster image can be shown before video starts playing
        `
      }
    }
  },
  argTypes:{
    controls:{
      table:{
        disable:true,
      }
    },
    videopreload:{
      table:{
        disable:true,
      }
    },
    mp4format:{
      control:"text",
      name:"video source",
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
    loop:false,
    controls: "controls",
    videopreload: "none",
    showcontrols: true,
    width:600,
    height:280,
    // showdefaultvideoposter:true,
    styles:{
      root:{
        width:600,
        height:280,
      }
    }
  
  },
};
