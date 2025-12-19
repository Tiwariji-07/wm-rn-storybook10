import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import WmCarousel from "@wavemaker/app-rn-runtime/components/advanced/carousel/carousel.component";
import WmCarouselContent from "@wavemaker/app-rn-runtime/components/advanced/carousel/carousel-content/carousel-content.component";
import WmPicture from "@wavemaker/app-rn-runtime/components/basic/picture/picture.component";
import { AssetProvider } from "@wavemaker/app-rn-runtime/core/asset.provider";
import { action } from "storybook/actions";
import { mockFragment } from './mockFragment';
import { handleAsset } from "../../services/Assethandler";
import { DynamicTemplate } from "../../templates/carousel/DynamicTemplate";
import { carouselImages } from "../../constants/constant";
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

const createCarouselContent = (index: number) => (
  <WmCarouselContent name={`carousel_content${index}`} >
    <WmPicture
      name={`picture${index}`}
      picturesource={`https://picsum.photos/800/400?random=${index}`}
      pictureplaceholder="https://picsum.photos/200/200?blur=10"
      styles={{ root: { width: '100%', height: 400 }, text: {} }}
    />
  </WmCarouselContent>
);

const sampleItems = [
  createCarouselContent(1),
  createCarouselContent(2),
  createCarouselContent(3),
];



const meta = {
  title: "Advanced/Carousel",
  component: WmCarousel,
  decorators: [
    (Story) => (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AssetProvider value={handleAsset}>
          <View style={{ padding: 16, height: 480, width: 480 }}>
            <Story />
          </View>
        </AssetProvider>
      </GestureHandlerRootView>
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
      control: { type: "select" },
      options: ["none", "both", "inidicators", "navs"]
    },
    animation: {
      control: { type: "select" },
      options: ["none", "auto",],
    },
    dataset: {
      table: {
        disable: false
      }
    }

  }
} satisfies Meta<typeof WmCarousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "carousel",
    children: sampleItems,
    type: "static",
    controls: "both",
    animation: "none",
    // onChange:action("onChange"),
    // classname:"app-carousel carousel",
    styles: {
      root: { height: "300" },
      text: {},
    },
    onChange: action("onChange"),
  },
};

export const AutoSlide: Story = {
  args: {
    ...Basic.args,
    animation: "auto",
  },
};


export const DynamicCarousel: Story = {
  args: {
    ...Basic.args,
    type: "dynamic",
    animation: "auto",
    dataset: carouselImages,
    renderSlide: ($item, $index, carousel) => {
      // const item = $item;
      // const currentItemWidgets = [];
      return (
        <DynamicTemplate
          $item={$item}
          $index={$index}
          carousel={carousel}
          fragment={{}}
        />
      );
    }
  },
  argsType: {
    dataset: {
      control: {
        type: "object",
      },
      table: {
        disable: false,
      },
    }
  }
};