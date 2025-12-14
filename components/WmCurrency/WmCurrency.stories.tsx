import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmCurrency from "@wavemaker/app-rn-runtime/components/input/currency/currency.component";
import { action } from "storybook/actions";
import { CURRENCY_INFO } from '@wavemaker/app-rn-runtime/core/currency-constants';


const meta = {
  title: "Form/Currency",
  component: WmCurrency,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    currency: {
      control: {
        type: "select"
      },
      options: Object.keys(CURRENCY_INFO),
    }
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmCurrency Component

A currency input component that handles monetary values with proper formatting and validation.

## Features
- Currency value input
- Multiple currency formats
- Custom formatting options
- Validation support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the input |
| datavalue | number | 0 | Current currency value |
| placeholder | string | '' | Placeholder text when input is empty |
| required | boolean | false | Whether the field is required |

### Currency Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| currency | string | 'USD' | Currency code (e.g., USD, EUR, GBP) |
| decimals | number | 2 | Number of decimal places |
| prefix | string | '$' | Currency symbol prefix |
| suffix | string | '' | Currency symbol suffix |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the input is visible |
| enabled | boolean | true | Whether the input is enabled |
| readonly | boolean | false | Whether the input is read-only |
| showCurrency | boolean | true | Whether to show currency symbol |

### Validation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| minvalue | number | null | Minimum allowed value |
| maxvalue | number | null | Maximum allowed value |
| regexp | string | null | Regular expression for validation |

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
- Currency format is determined by the currency prop
- Decimal places can be customized using decimals prop
- Currency symbol can be shown as prefix or suffix
- Value range can be restricted using minvalue and maxvalue
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  }
} satisfies Meta<typeof WmCurrency>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicCurrency",
    placeholder: "Enter amount",
    currency: "USD",
    onChange: action("onChange"),
    styles: {
      root: {
        backgroundColor: '#FFFFFF',
      },
      input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 4,
        paddingHorizontal: 12,
        fontSize: 16,
      },
      currencySymbol: {
        fontSize: 16,
        color: '#757575',
      },
    },
  },
};


export const CustomFormat: Story = {
  args: {
    ...Basic.args,
    fractionsize: 3,
    name: "customFormatCurrency",
  },
};

export const MinMax: Story = {
  args: {
    ...Basic.args,
    minvalue: 0,
    maxvalue: 10000,
    name: "minMaxCurrency",
  },
};

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
    datavalue: "999.99",
    name: "disabledCurrency",
    styles: {
      ...Basic.args.styles,
      input: {
        ...Basic.args.styles.input,
        backgroundColor: '#F5F5F5',
        color: '#9E9E9E',
      },
      currencySymbol: {
        ...Basic.args.styles.currencySymbol,
        color: '#9E9E9E',
      },
    },
  },
};
