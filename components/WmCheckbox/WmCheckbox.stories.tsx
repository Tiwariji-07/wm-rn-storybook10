import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmCheckbox from "@wavemaker/app-rn-runtime/components/input/checkbox/checkbox.component";
import { action } from "storybook/actions";

const meta = {
  title: "Form/Checkbox",
  component: WmCheckbox,
  args: {
    caption: "Checkbox",
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
# WmCheckbox Component

A form control component that allows users to select one or more options from a set of choices.

## Features
- Single and multiple selection
- Custom styling
- Label support
- Validation
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the checkbox |
| value | boolean | false | Current checked state |
| label | string | '' | Checkbox label text |
| required | boolean | false | Whether the checkbox is required |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the checkbox is visible |
| enabled | boolean | true | Whether the checkbox is enabled |
| showLabel | boolean | true | Whether to show the label |
| labelPosition | string | 'right' | Position of label ('left' or 'right') |

### Validation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| required | boolean | false | Whether the checkbox is required |
| requiredMessage | string | '' | Message shown when required |
| validationState | string | '' | Current validation state |
| validationMessage | string | '' | Current validation message |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | 'auto' | Width of the checkbox |
| height | number/string | 'auto' | Height of the checkbox |
| styles | object | {} | Custom styles for the component |
| labelStyle | object | {} | Custom styles for the label |
| checkboxStyle | object | {} | Custom styles for the checkbox |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onChange | (value: boolean) | Triggered when checked state changes |
| onFocus | () | Triggered when checkbox receives focus |
| onBlur | () | Triggered when checkbox loses focus |

## Usage Notes
- Checkbox can be used for single or multiple selection
- Label can be positioned on either side
- Validation can be enabled for required fields
- Custom styling can be applied to checkbox and label
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  },
} satisfies Meta<typeof WmCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    caption: "Basic Checkbox",
    datavalue: false,
    onChange: action("onChange"),
  },
};

export const Checked: Story = {
  args: {
    caption: "Checked Checkbox",
    datavalue: true,
    onChange: action("onChange"),
  },
};


export const Disabled: Story = {
  args: {
    caption: "Disabled Checkbox",
    datavalue: false,
    disabled: true,
    onChange: action("onChange"),
  },
};
