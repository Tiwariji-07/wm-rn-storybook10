import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmCheckboxset from "@wavemaker/app-rn-runtime/components/input/checkboxset/checkboxset.component";
import { action } from "storybook/actions";


const sampleDataSet = [
  { Label: "Category A", Value: 30 },
  { Label: "Category B", Value: 25 },
  { Label: "Category C", Value: 20 },
  { Label: "Category D", Value: 15 },
  { Label: "Category E", Value: 10 },
];
const meta = {
  title: "Form/CheckboxSet",
  component: WmCheckboxset,
  args: {
    caption: "Checkbox",
    disabled: false,
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
# WmCheckboxSet Component

A form control component that groups multiple checkboxes together with a common label and validation.

## Features
- Multiple checkbox selection
- Group validation
- Custom layout options
- Label support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the checkbox set |
| value | array | [] | Array of selected values |
| options | array | [] | Array of checkbox options |
| label | string | '' | Group label text |
| required | boolean | false | Whether selection is required |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the set is visible |
| enabled | boolean | true | Whether the set is enabled |
| showLabel | boolean | true | Whether to show the group label |
| layout | string | 'vertical' | Layout of checkboxes ('vertical' or 'horizontal') |

### Validation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| required | boolean | false | Whether selection is required |
| requiredMessage | string | '' | Message shown when required |
| validationState | string | '' | Current validation state |
| validationMessage | string | '' | Current validation message |
| minSelection | number | 0 | Minimum number of selections |
| maxSelection | number | -1 | Maximum number of selections |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | '100%' | Width of the checkbox set |
| height | number/string | 'auto' | Height of the checkbox set |
| styles | object | {} | Custom styles for the component |
| labelStyle | object | {} | Custom styles for the group label |
| checkboxStyle | object | {} | Custom styles for individual checkboxes |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onChange | (values: array) | Triggered when selection changes |
| onFocus | () | Triggered when set receives focus |
| onBlur | () | Triggered when set loses focus |

## Usage Notes
- Multiple checkboxes can be selected
- Group validation can be applied
- Checkboxes can be arranged vertically or horizontally
- Custom styling can be applied to group and individual checkboxes
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  },
} satisfies Meta<typeof WmCheckboxset>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    caption: "Basic Checkbox",
    // datavalue: false,
    onChange: action("onValueChange"),

  },
};

export const Checked: Story = {
  args: {
    caption: "Checked Checkbox",
    datavalue: 'Option 1',
    onChange: action("onValueChange"),
  },
};

export const CustomValues: Story = {
  args: {
    caption: "Custom Style",
    dataset: sampleDataSet,
    displayfield: 'Label',
    datafield: "All Fields",
    // datavalue: 'Y',
    onChange: action("onValueChange"),
  },
};


