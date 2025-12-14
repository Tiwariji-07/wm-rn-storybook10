import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmToggle from "@wavemaker/app-rn-runtime/components/input/toggle/toggle.component";
import { action } from "storybook/actions";

const meta = {
  title: "Form/Toggle",
  component: WmToggle,
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
# WmToggle Component

A toggle component that allows users to switch between two states with a sliding animation.

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
| name | string | - | Unique identifier for the toggle |
| value | boolean | false | Current state of the toggle |
| required | boolean | false | Whether the toggle is required |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the toggle is visible |
| enabled | boolean | true | Whether the toggle is enabled |
| showLabel | boolean | true | Whether to show the label |
| label | string | '' | Label text |

### Color Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | string | 'primary' | Color of the toggle when on |
| trackColor | object | {} | Colors for the track in on/off states |
| thumbColor | object | {} | Colors for the thumb in on/off states |

### Size Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | string | 'medium' | Size of the toggle ('small', 'medium', 'large') |
| edge | string | 'end' | Position of the label ('start', 'end') |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| labelClass | string | '' | CSS class for the label |
| toggleClass | string | '' | CSS class for the toggle |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | 'switch' | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onChange | (value, event) | Triggered when toggle state changes |
| onFocus | (event) | Triggered when toggle is focused |
| onBlur | (event) | Triggered when toggle loses focus |

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
} satisfies Meta<typeof WmToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicToggle",
    disabled: false,
    onChange: action("onChange"),

  },
};

export const CustomValues: Story = {
  args: {
    name: "customToggle",
    datavalue: "no",
    checkedvalue: "yes",
    uncheckedvalue: "no",
    onChange: action("onChange"),
  },
  argTypes: {
    datavalue: {
      control: {
        type: 'select',
      },
      options: ['yes', 'no']
    }
  }
};


