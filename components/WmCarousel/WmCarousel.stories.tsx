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
      description: {
        component: `
# WmCarousel Component

A component that displays a set of items in a carousel/slider format with customizable navigation and transitions.

## Features
- Horizontal and vertical scrolling
- Auto-play support
- Custom navigation controls
- Smooth transitions
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the carousel |
| children | array | [] | Array of items to display |
| type | string | "static" | Type of carousel |
| controls | string | "both" | Controls to display |
| animation | string | "none" | Animation type |
| styles | object | {} | Custom styles for the component |
| onChange | function | - | Function to call when slide changes |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the carousel is visible |
| enabled | boolean | true | Whether the carousel is enabled |
| showIndicators | boolean | true | Whether to show slide indicators |
| showControls | boolean | true | Whether to show navigation controls |

### Navigation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoPlay | boolean | false | Whether to auto-play slides |
| interval | number | 3000 | Auto-play interval in milliseconds |
| swipeEnabled | boolean | true | Whether swipe navigation is enabled |
| orientation | string | 'horizontal' | Carousel orientation |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | '100%' | Width of the carousel |
| height | number/string | '300px' | Height of the carousel |
| indicatorStyle | object | {} | Custom styles for indicators |
| controlStyle | object | {} | Custom styles for controls |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onChange | (index: number) | Triggered when slide changes |
| onItemClick | (item: object) | Triggered when item is clicked |
| onSwipe | (direction: string) | Triggered when swipe occurs |

## Usage Notes
- Items can be any type of content (images, text, components)
- Auto-play can be enabled for automatic sliding
- Navigation can be done through swipe, controls, or indicators
- Carousel supports both horizontal and vertical orientations
- The component is fully accessible with proper ARIA attributes
        `
      }
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