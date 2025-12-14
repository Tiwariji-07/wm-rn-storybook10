import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TouchableNativeFeedback, View } from "react-native";
import WmTime from "@wavemaker/app-rn-runtime/components/input/epoch/time/time.component";
import { ModalServiceComponent } from "../../services/ModalService";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import ThemeVariables from "@wavemaker/app-rn-runtime/styles/theme.variables";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import WmServiceProvider from "../../services/WmServiceProvider";
import { WmTimeService } from "../../services/WmTimeService";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: ThemeVariables.INSTANCE.primaryColor,
  },
};

const style = {
  timeStyle: {
    width: 300,
  },
};

const meta = {
  title: "Form/Time",
  component: WmTime,
  decorators: [
    (Story) => (
      // <GestureHandlerRootView style={{ flex: 1 }}>
      // {/* // <PaperProvider theme={theme}> */}
      <WmTimeService>
        <Story />
      </WmTimeService>
      // {/* // </PaperProvider> */}
      // </GestureHandlerRootView>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmTime Component

A time input component that allows users to select a time value using a time picker.

## Features
- Time selection
- Custom time formats
- Min/max time constraints
- 12/24 hour format
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the input |
| value | string | - | Current time value |
| placeholder | string | 'Select time' | Placeholder text |
| required | boolean | false | Whether the input is required |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the input is visible |
| enabled | boolean | true | Whether the input is enabled |
| readOnly | boolean | false | Whether the input is read-only |
| showLabel | boolean | true | Whether to show the label |

### Format Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| format | string | 'HH:mm' | Time format |
| use24Hour | boolean | true | Whether to use 24-hour format |
| showSeconds | boolean | false | Whether to show seconds |

### Validation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| minTime | string | - | Minimum allowed time |
| maxTime | string | - | Maximum allowed time |
| validationMessage | string | '' | Custom validation message |

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
| onChange | (value, event) | Triggered when time changes |
| onFocus | (event) | Triggered when input is focused |
| onBlur | (event) | Triggered when input loses focus |

## Usage Notes
- Value should be in the specified format
- Format string supports various tokens (HH, mm, ss, etc.)
- Min/max time constraints prevent invalid selections
- 12/24 hour format can be toggled
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  },
  argTypes: {
    datepattern: {
      control: "text",
    },
    placeholder: {
      control: "text",
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
  },
} satisfies Meta<typeof WmTime>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
  name: "basicTime",
  placeholder: "Select Time from",
  datepattern: "HH:mm",
  locale: "en",
};

export const Basic: Story = {
  args: {
    ...defaultProps,
    name: "basicTime",
    placeholder: "Select time",
    datepattern: "hh:mm a",
    datavalue: "14:30",
    disabled: false,
    required: true,
    styles: { root: style.timeStyle },
    mode: "time",
    locale: "en",
    onChange: (event: any, widget: any, newVal: any, oldVal: any) => {
      console.log("Time changed:", { newVal, oldVal });
    },
  },
};


export const CustomFormat: Story = {
  args: {
    ...defaultProps,
    name: "customFormatTime",
    datepattern: "hh:mm a",
    outputformat: "hh:mm a",
    datavalue: "02:30 PM",
    is24hour: false,
    styles: { root: style.timeStyle },
  },
};


