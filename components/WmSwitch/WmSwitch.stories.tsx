import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmSwitch from "@wavemaker/app-rn-runtime/components/input/switch/switch.component";
import { action } from "storybook/actions";

const meta = {
  title: "Form/Switch",
  component: WmSwitch,
  args: {
    caption: "Switch",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmSwitch Component

A switch component that allows users to toggle between two states (on/off).

## Features
- Toggle functionality
- Custom colors
- Size variants
- Label support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the switch |
| value | boolean | false | Current state of the switch |
| required | boolean | false | Whether the switch is required |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the switch is visible |
| enabled | boolean | true | Whether the switch is enabled |
| showLabel | boolean | true | Whether to show the label |
| label | string | '' | Label text |

### Color Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | string | 'primary' | Color of the switch when on |
| trackColor | object | {} | Colors for the track in on/off states |
| thumbColor | object | {} | Colors for the thumb in on/off states |

### Size Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | string | 'medium' | Size of the switch ('small', 'medium', 'large') |
| edge | string | 'end' | Position of the label ('start', 'end') |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| labelClass | string | '' | CSS class for the label |
| switchClass | string | '' | CSS class for the switch |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | 'switch' | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onChange | (value, event) | Triggered when switch state changes |
| onFocus | (event) | Triggered when switch is focused |
| onBlur | (event) | Triggered when switch loses focus |

## Usage Notes
- Value is a boolean indicating on/off state
- Colors can be customized for different states
- Size variants provide flexibility in UI design
- Label can be positioned on either side
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  },
  argTypes: {
    dataset: {
      table: {
        disable: false
      }
    }
  }
} satisfies Meta<typeof WmSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "Basic Switch",
    dataset: "yes,no,maybe",
    datavalue: "",
    // checkediconclass:"wm-sl-l sl-check",
    onChange: action("onValueChange"),
  },
};

export const Checked: Story = {
  args: {
    name: "Checked Switch",
    datavalue: "yes",
    onChange: action("onValueChange"),
  },
};


export const Disabled: Story = {
  args: {
    name: "Disabled Switch",
    datavalue: 'maybe',
    disabled: true,
    onChange: action("onValueChange"),
  },
};
