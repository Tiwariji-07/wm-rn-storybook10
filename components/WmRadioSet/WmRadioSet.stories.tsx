import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmRadioSet from "@wavemaker/app-rn-runtime/components/input/radioset/radioset.component";
import { action } from "storybook/actions";

const sampleDataset = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
];

const meta = {
  title: "Form/RadioSet",
  component: WmRadioSet,
  args: {
    styles: {
      item: {
        marginRight: 0,
      }
    }
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
# WmRadioSet Component

A radio button set component that allows users to select a single option from a list of choices.

## Features
- Multiple options support
- Custom layout options
- Validation support
- Disabled state
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the radio set |
| value | string | - | Currently selected value |
| options | array | [] | Array of option objects |
| required | boolean | false | Whether selection is required |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the radio set is visible |
| enabled | boolean | true | Whether the radio set is enabled |
| showLabel | boolean | true | Whether to show the label |
| layout | string | 'vertical' | Layout direction ('vertical' or 'horizontal') |

### Validation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| required | boolean | false | Whether selection is required |
| validationMessage | string | '' | Custom validation message |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| labelClass | string | '' | CSS class for the label |
| optionClass | string | '' | CSS class for each option |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | 'radiogroup' | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onChange | (value, event) | Triggered when selection changes |
| onFocus | (event) | Triggered when radio set is focused |
| onBlur | (event) | Triggered when radio set loses focus |

## Usage Notes
- Options should be an array of objects with value and label properties
- Layout can be vertical (stacked) or horizontal (inline)
- Each option can be individually disabled
- The component is fully accessible with proper ARIA attributes
- Radio buttons are mutually exclusive within the same group
        `
      }
    }
  },
} satisfies Meta<typeof WmRadioSet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicRadioSet",
    dataset: sampleDataset,
    datafield: "value",
    displayfield: "label",
    // onChange: action("onChange"),

  },
};

export const DefaultValue: Story = {
  args: {
    ...Basic.args,
    datavalue: "light",
    name: "defaultValueRadioSet",
  },
};


export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
    datavalue: "dark",
    name: "disabledRadioSet",

  },
};
