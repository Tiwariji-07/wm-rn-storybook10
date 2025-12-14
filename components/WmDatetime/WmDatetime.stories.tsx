import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmDatetime from "@wavemaker/app-rn-runtime/components/input/epoch/datetime/datetime.component";
import { action } from "storybook/actions";
import { ModalServiceComponent } from "../../services/ModalService";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { WmTimeService } from "../../services/WmTimeService";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const meta = {
  title: "Form/Datetime",
  component: WmDatetime,
  decorators: [
    (Story) => (
      <SafeAreaProvider>
        <GestureHandlerRootView>
          <View style={{ padding: 16, width: 260 }}>
            <WmTimeService>
              <Story />
            </WmTimeService>
          </View>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmDatetime Component

A datetime input component that allows users to select both date and time with a calendar and time picker.

## Features
- Date and time selection
- Custom date/time formats
- Min/max date constraints
- Time zone support
- Custom validation
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the input |
| value | string/Date | - | Current value of the input |
| placeholder | string | 'Select date and time' | Placeholder text |
| required | boolean | false | Whether the input is required |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the input is visible |
| enabled | boolean | true | Whether the input is enabled |
| readOnly | boolean | false | Whether the input is read-only |
| showLabel | boolean | true | Whether to show the label |

### Validation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| minDate | string/Date | - | Minimum allowed date |
| maxDate | string/Date | - | Maximum allowed date |
| format | string | 'YYYY-MM-DD HH:mm' | Date/time format |
| timezone | string | 'local' | Time zone for the input |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| labelClass | string | '' | CSS class for the label |
| inputClass | string | '' | CSS class for the input |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | 'textbox' | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onChange | (value, event) | Triggered when value changes |
| onFocus | (event) | Triggered when input is focused |
| onBlur | (event) | Triggered when input loses focus |

## Usage Notes
- Value can be a string in the specified format or a Date object
- Format string supports various tokens (YYYY, MM, DD, HH, mm, etc.)
- Min/max date constraints prevent invalid selections
- Time zone support allows for consistent datetime handling
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  },
  argTypes: {
    datepattern: {
      control: { type: "select" },
      options: ["yyyy-MM-dd HH:mm:ss", "MM/dd/yyyy HH:mm", "dd/MM/yyyy HH:mm"],
    },
  },
} satisfies Meta<typeof WmDatetime>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicDatetime",
    placeholder: "Select Date & Time",
    onChange: action("onChange"),
    disabled: false,
    locale: "en",
    datepattern: "yyyy-MM-dd HH:mm:ss",
  },
};



export const MinMaxDateTime: Story = {
  args: {
    ...Basic.args,
    name: "constrainedDatetime",
    mindate: new Date(2024, 0, 1, 9, 0).toISOString(), // Jan 1, 2024 9:00 AM
    maxdate: new Date(2024, 11, 31, 17, 0).toISOString(), // Dec 31, 2024 5:00 PM
  },
};
