import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import WmLottie from "@wavemaker/app-rn-runtime/components/basic/lottie/lottie.component";
import { AssetProvider } from "@wavemaker/app-rn-runtime/core/asset.provider";
import { action } from "storybook/actions";
import { handleAsset } from "../../services/Assethandler";

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";

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
      page: Docs,
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



