import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmPicture from "@wavemaker/app-rn-runtime/components/basic/picture/picture.component";
import { AssetProvider } from "@wavemaker/app-rn-runtime/core/asset.provider";
import { handleAsset } from "../../services/Assethandler";


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
      description: {
        component: `
# WmPicture Component

A versatile image component that supports various image display options and styling.

## Features
- Image display with customizable dimensions
- Multiple resize modes
- Shape options (circle, rounded, thumbnail)
- Custom styling support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the picture |
| picturesource | string | - | URL or path to the image source |
| width | number/string | - | Width of the image |
| height | number/string | - | Height of the image |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| resizemode | string | 'stretch' | How to resize the image ('cover', 'contain', 'stretch', 'repeat', 'center') |
| shape | string | null | Shape of the image ('circle', 'rounded', 'thumbnail') |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| classname | string | '' | CSS class for styling |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Resize Modes
- \`cover\`: Scale the image uniformly to cover the container
- \`contain\`: Scale the image uniformly to fit within the container
- \`stretch\`: Stretch the image to fill the container
- \`repeat\`: Repeat the image to fill the container
- \`center\`: Center the image in the container

## Shape Options
- \`circle\`: Circular image with equal width and height
- \`rounded\`: Image with rounded corners
- \`thumbnail\`: Small version of the image

## Usage Notes
- The component requires a valid image source URL or path
- Image dimensions can be specified in pixels or percentages
- Custom styling can be applied through the styles prop
- The component is fully accessible with proper ARIA attributes

        `
      }
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
  argTypes:{
    shape:{
      control:"select",
      options:['circle',"rounded","thumbnail"]
    }
  }
};
