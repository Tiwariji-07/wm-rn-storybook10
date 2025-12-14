import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View, Text,Button } from "react-native";
import WmTooltip from "@wavemaker/app-rn-runtime/components/basic/tooltip/tooltip.component";

const meta = {
  title: "Basic/Tooltip",
  component: WmTooltip,
  args: {
    text: "Tooltip text",
    showTooltip: true,
  },
  decorators: [
    (Story) => (
      <View style={{height:100,justifyContent:'center'}}>
        <Story />
      </View>
    ),
  ],
  argTypes:{
    direction: {
      control: {
        type: "select",
      },
      options: ["up", "down", "left", "right"],
    },
    tooltipStyle: {
      table:{
        disable:true,
      }
    },
    tooltipLabelStyle:{
      table:{
        disable:true,
      }
    }
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmTooltip Component

A tooltip component that displays additional information when hovering over elements.

## Features
- Customizable tooltip content
- Multiple placement options
- Custom styling support
- Animation support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the tooltip |
| caption | string | '' | Text content of the tooltip |
| show | boolean | false | Whether to show the tooltip |
| placement | string | 'top' | Placement of the tooltip |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| iconclass | string | '' | CSS class for the tooltip icon |
| iconposition | string | 'left' | Position of the icon ('left' or 'right') |
| animation | string | null | Animation type to apply |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | string | 'auto' | Width of the tooltip |
| height | string | 'auto' | Height of the tooltip |
| fontsize | string | '14px' | Font size of the text |
| color | string | '' | Text color |
| backgroundcolor | string | '' | Background color |
| styles | object | {} | Custom styles for the component |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Placement Options
- \`top\` - Tooltip appears above the element
- \`bottom\` - Tooltip appears below the element
- \`left\` - Tooltip appears to the left of the element
- \`right\` - Tooltip appears to the right of the element

## Usage Notes
- The tooltip can be triggered by hover or click
- Custom styling can be applied through the styles prop
- The component is fully accessible with proper ARIA attributes
- Animation can be applied for smooth transitions
- Icon can be added for better visual indication
        `
      }
    }
  }
} satisfies Meta<typeof WmTooltip>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Basic: Story = {
  args: {
    text: "Styled tooltip",
    showTooltip: true,
    direction:'down',
    tooltipStyle: {
      backgroundColor: "#673AB7",
      padding: 8,
      borderRadius: 4,
      // left:'none'
    },
    tooltipLabelStyle: {
      color: "#FFFFFF",
      fontSize: 14,
     
    },
    children: <Text style={{padding:8}}>Hover me for the tooltip</Text>,
  },
};

