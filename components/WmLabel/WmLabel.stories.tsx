import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";
import { action } from "storybook/actions";
import { animationNames } from "../../constants/constant";

const meta = {
  title: "Basic/Label",
  component: WmLabel,
  args: {
    caption: "Hello World",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, width: "100%" }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmLabel Component

A versatile label component that supports various text styles, animations, and customization options.

## Features
- Text display with customizable styling
- Animation support
- Border customization
- Text alignment options
- Font size and weight control
- Background color support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the label |
| caption | string | '' | Text to display in the label |
| required | boolean | false | Whether to show required indicator |
| classname | string | '' | CSS class for styling the label |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| fontsize | string | '16px' | Font size of the text |
| fontweight | string | '400' | Font weight of the text |
| textalign | string | 'center' | Text alignment ('left', 'center', 'right') |
| backgroundcolor | string | '' | Background color of the label |
| borderwidth | string | 'px' | Width of the border |
| borderstyle | string | 'dashed' | Style of the border ('solid', 'dotted', 'dashed') |
| bordercolor | string | '#8a8989' | Color of the border |

### Animation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animation | string | null | Animation type to apply |
| animationdelay | number | null | Delay before animation starts |
| iterationcount | number | undefined | Number of times to repeat the animation |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onTap | (e: Event, proxy: ComponentProxy) | Triggered when the label is clicked |

## Styling Classes
Available classes for styling:
- \`text-primary\`
- \`text-secondary\`
- \`text-success\`
- \`text-danger\`
- \`text-warning\`
- \`text-info\`
- \`text-muted\`
- \`h1\` through \`h6\` for heading styles
        `
      }
    }
  },
} satisfies Meta<typeof WmLabel>;

export default meta;

type Story = StoryObj<typeof meta>;



const labelstyles = {
  root: {
    width: '100%',
  },
  text: { padding: 10, width: '100%', textAlign: "center", borderWidth: "px", }
}
export const Basic: Story = {
  args: {
    caption: "Basic Label",
    required: false,
    animation: "fadeInRight",
    classname: "text-primary",
    onTap: action("onTap"),
    backgroundcolor: "",
    styles: labelstyles,
    fontsize: "16px",
    fontweight: "400",
    textalign: "center",
    borderwidth: "px",
    borderstyle: "dashed",
    bordercolor: "#8a8989",

  },
  argTypes: {
    animation: {
      control: {
        type: 'select'
      },
      options: animationNames
    },
    classname: {
      control: {
        type: "select",
      },
      options: ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-muted", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
    backgroundcolor: {
      control: {
        type: 'color',
      },
    },
    textalign: {
      control: {
        type: 'select',
      },
      options: ['left', 'center', 'right']
    },
    borderstyle: {
      control: {
        type: 'select',
      },
      options: ['solid', 'dotted', 'dashed']
    }
  }
};


