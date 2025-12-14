import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmNumber from "@wavemaker/app-rn-runtime/components/input/number/number.component";
import { action } from "storybook/actions";

const style = {
  numberStyle: {
    width: 200,
  },
};

const meta = {
  title: "Form/Number",
  component: WmNumber,
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
# WmNumber Component

A numeric input component that handles number values with validation and formatting options.

## Features
- Number input with validation
- Min/max value constraints
- Step value support
- Custom formatting
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the input |
| datavalue | number | 0 | Current numeric value |
| placeholder | string | '' | Placeholder text when input is empty |
| required | boolean | false | Whether the field is required |

### Validation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| minvalue | number | null | Minimum allowed value |
| maxvalue | number | null | Maximum allowed value |
| step | number | 1 | Step value for increment/decrement |
| regexp | string | null | Regular expression for validation |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the input is visible |
| enabled | boolean | true | Whether the input is enabled |
| readonly | boolean | false | Whether the input is read-only |
| showSpinner | boolean | true | Whether to show increment/decrement buttons |

### Format Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| decimals | number | 0 | Number of decimal places |
| thousandseparator | boolean | false | Whether to use thousand separator |
| prefix | string | '' | Prefix for the number |
| suffix | string | '' | Suffix for the number |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | - | Width of the input |
| height | number/string | - | Height of the input |
| styles | object | {} | Custom styles for the component |
| inputStyle | object | {} | Custom styles for the input field |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onChange | (value: number) | Triggered when value changes |
| onBlur | () | Triggered when input loses focus |
| onFocus | () | Triggered when input gains focus |

## Usage Notes
- Value range can be restricted using minvalue and maxvalue
- Step value controls increment/decrement amount
- Decimal places can be configured using decimals prop
- Number formatting can be customized with prefix/suffix
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  },
  argTypes: {
    placeholder: {
      control: "text",
    },
    maxvalue: {
      control: "number",
    },
    minvalue: {
      control: "number",
    },
    // step: {
    //   control: "number",
    // },
    datavalue: {
      control: "number",
    },
    disabled: {
      control: "boolean",
    },
    readonly: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    regexp: {
      control: "text",
    }
  },
} satisfies Meta<typeof WmNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicNumber",
    placeholder: "Enter a number",
    styles: { root: style.numberStyle },
    onChange: action("onChange"),
  },
};

export const WithMinMax: Story = {
  args: {
    name: "minMaxNumber",
    placeholder: "Enter number (0-100)",
    minvalue: 0,
    maxvalue: 100,
    styles: { root: style.numberStyle },
    onChange: action("onChange"),
  },
};

// export const WithStep: Story = {
//   args: {
//     name: "stepNumber",
//     placeholder: "Step by 5",
//     step: 5,
//     minvalue: 0,
//     maxvalue: 100,
//     showcontrols: true,
//     styles: { root: style.numberStyle },
//     onChange: action("onChange"),
//   },
// };

export const WithRegex: Story = {
  args: {
    name: "defaultNumber",
    placeholder: "enter a 3 digit number",
    //regex for phone number
    regexp: "[0-9]{3}",
    // datavalue: 42,
    styles: { root: style.numberStyle },
    onChange: action("onChange"),
  },
};

// export const Disabled: Story = {
//   args: {
//     name: "disabledNumber",
//     placeholder: "Disabled input",
//     disabled: true,
//     styles: { root: style.numberStyle },
//     onChange: action("onChange"),
//   },
// };

// export const ReadOnly: Story = {
//   args: {
//     name: "readOnlyNumber",
//     placeholder: "Read only input",
//     datavalue: 42,
//     readonly: true,
//     styles: { root: style.numberStyle },
//     onChange: action("onChange"),
//   },
// };

// export const Required: Story = {
//   args: {
//     name: "requiredNumber",
//     placeholder: "Required input",
//     required: true,
//     styles: { root: style.numberStyle },
//     onChange: action("onChange"),
//   },
// };
