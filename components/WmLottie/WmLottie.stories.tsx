import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import WmLottie from "@wavemaker/app-rn-runtime/components/basic/lottie/lottie.component";
import { AssetProvider } from "@wavemaker/app-rn-runtime/core/asset.provider";
import { action } from "storybook/actions";
import { handleAsset } from "../../services/Assethandler";

// Custom wrapper to handle initial animation
const LottieWrapper = (props: any) => {
  const lottieRef = useRef<any>();

  useEffect(() => {
    // Small delay to ensure component is mounted
    const timer = setTimeout(() => {
      if (lottieRef.current) {
        lottieRef.current.reset();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return <WmLottie {...props} ref={lottieRef} />;
};

const meta = {
  title: "Basic/Lottie",
  component: LottieWrapper,
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
    layout: 'centered',
    docs: {
      description: {
        component: `
# WmLottie Component

A component for rendering Lottie animations in your application.

## Features
- Lottie animation support
- Auto-play capability
- Loop control
- Animation speed control
- Custom styling
- Event handling for animation states

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the Lottie component |
| source | string | - | URL or path to the Lottie JSON file |
| autoPlay | boolean | true | Whether to automatically play the animation |
| loop | boolean | true | Whether to loop the animation |
| speed | number | 1 | Speed of the animation (1 is normal speed) |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| width | number/string | - | Width of the animation container |
| height | number/string | - | Height of the animation container |

### Event Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| onPlay | function | - | Callback when animation starts playing |
| onPause | function | - | Callback when animation is paused |
| onStop | function | - | Callback when animation is stopped |
| onComplete | function | - | Callback when animation completes |
| onLoopComplete | function | - | Callback when animation loop completes |
| onReady | function | - | Callback when animation is ready to play |

## Usage Notes
- The component requires a valid Lottie JSON file URL or path
- Animation speed can be adjusted using the speed prop (1 is normal speed)
- The component supports both auto-play and manual control
- Custom styling can be applied through the styles prop
- The component is wrapped in an AssetProvider for proper asset handling


        `
      }
    }
  },
} satisfies Meta<typeof LottieWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicLottie",
    source: "https://lottie.host/80f8d81e-68db-49ef-83aa-d8f87e48dab9/5er8cpRGuv.json",
    autoPlay: true,
    loop: true,
    speed: 1,
    styles: { root: { height: 160, width: 160 }, content: { height: 160, width: 160 } }
    // onplay: action("onplay"),
    // onReady: action("onready"),
  },
};



