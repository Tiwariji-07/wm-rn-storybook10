import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmDate from "@wavemaker/app-rn-runtime/components/input/epoch/date/date.component";
import { action } from "storybook/actions";
import { ModalServiceComponent } from "../../services/ModalService";
import { SafeAreaProvider } from "react-native-safe-area-context";
const meta = {
  title: "Form/Date",
  component: WmDate,
  decorators: [
    (Story) => (
      <SafeAreaProvider>
        <View style={{ padding: 16, width: 260 }}>
          <ModalServiceComponent>
            <Story />
          </ModalServiceComponent>
        </View>
      </SafeAreaProvider>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmDate Component

A date input component that allows users to select dates with a calendar picker.

## Features
- Date selection with calendar picker
- Custom date formats
- Date range validation
- Custom styling
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the input |
| value | string/Date | - | Selected date value |
| placeholder | string | 'Select date' | Placeholder text |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the input is visible |
| enabled | boolean | true | Whether the input is enabled |
| readOnly | boolean | false | Whether the input is read-only |
| required | boolean | false | Whether the input is required |

### Validation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| minDate | string/Date | - | Minimum allowed date |
| maxDate | string/Date | - | Maximum allowed date |
| format | string | 'YYYY-MM-DD' | Date format string |
| validation | object | {} | Validation rules |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | '100%' | Width of the input |
| height | number/string | 'auto' | Height of the input |
| styles | object | {} | Custom styles for the component |
| inputStyle | object | {} | Custom styles for input |
| calendarStyle | object | {} | Custom styles for calendar |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onChange | (date: Date) | Triggered when date changes |
| onFocus | () | Triggered when input is focused |
| onBlur | () | Triggered when input loses focus |

## Usage Notes
- Date can be selected using calendar picker
- Custom date formats are supported
- Date range can be restricted
- The component is fully accessible with proper ARIA attributes
- Validation rules can be applied
        `
      }
    }
  },
} satisfies Meta<typeof WmDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicDate",
    placeholder: "Select Date",
    onChange: action("onChange"),
    locale: "en",
    datepattern: "yyyy-MM-dd",
    disabled: false,
  },
  argTypes: {
    datepattern: {
      control: { type: "select" },
      options: ["yyyy-MM-dd", "MM/dd/yyyy", "dd/MM/yyyy"],
    },
  },
};



export const MinMaxDates: Story = {
  args: {
    ...Basic.args,
    name: "constrainedDate",
    mindate: new Date(2024, 0, 1).toISOString(), // Jan 1, 2024
    maxdate: new Date(2024, 11, 31).toISOString(), // Dec 31, 2024
  },
};

