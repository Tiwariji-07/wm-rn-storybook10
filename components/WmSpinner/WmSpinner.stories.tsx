import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmSpinner from "@wavemaker/app-rn-runtime/components/basic/spinner/spinner.component";
import { AssetProvider } from "@wavemaker/app-rn-runtime/core/asset.provider";
import { handleAsset } from "../../services/Assethandler";

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
      description: {
        component: `
# WmSpinner Component

A loading spinner component that indicates ongoing operations or loading states.

## Features
- Loading indicator with customizable icon
- Caption text support
- Customizable styling
- Icon size control
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the spinner |
| caption | string | 'Loading...' | Text to display with the spinner |
| show | boolean | true | Whether to show the spinner |
| iconclass | string | 'wm-sl-r sl-loading' | CSS class for the spinner icon |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| fontsize | string | '' | Font size of the caption text |
| color | string | '' | Color of the text and icon |
| backgroundcolor | string | '' | Background color of the spinner |
| iconsize | string | '22px' | Size of the spinner icon |
| styles | object | {} | Custom styles for the component |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Icon Options
Available icon classes:
- \`wm-sl-r sl-loading\` - Default loading icon
- \`wm-sl-r sl-loading-half\` - Half loading icon
- \`fa fa-spinner\` - Font Awesome spinner
- \`wi wi-spinner\` - Wavicon spinner

## Usage Notes
- The component is wrapped in an AssetProvider for proper asset handling
- Custom styling can be applied through the styles prop
- The component is fully accessible with proper ARIA attributes
- Icon size can be adjusted using the iconsize prop
- Background color can be set for better visibility
        `
      }
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
    fontsize:'',
    color:"",
    backgroundcolor:"",
    iconsize:"22px",
    iconclass: "wm-sl-r sl-loading ",
   
    styles:{
      root:{
        padding:8,
        borderRadius:4,
        minWidth:180,

      }
    }
  },
  argTypes:{
    iconclass:{
      control:{
        type:"select"
      },
      options:[ "fa fa-spinner", "wm-sl-r sl-loading-half", "wi wi-spinner", 
       ],
      name:"icon class"
    },
  }
};



export const ImageSpinner: Story = {
  args: {
    name: "spinneImage",
    caption: "",
    type:"image",
    image:"https://media2.giphy.com/media/yyqOUPn5souNBSHUnU/giphy.gif?cid=6c09b952r7hflymkr24fukor7o0567zf293elcewo9s3tia2&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s",
    // imagewidth:"100px",
    // imageheight:"100px"
    // styles:{
    //   root:{
       
    //       height:100,
       
    //   }
    // }
  },
};

