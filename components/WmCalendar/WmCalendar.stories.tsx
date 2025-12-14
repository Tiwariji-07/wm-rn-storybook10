import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmCalendar from "@wavemaker/app-rn-runtime/components/input/calendar/calendar.component";
import { action } from "storybook/actions";

const meta = {
  title: "Form/Calendar",
  component: WmCalendar,
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
# WmCalendar Component

A calendar component that allows users to select dates with various display and interaction options.

## Features
- Date selection
- Date range selection
- Custom date formats
- Multiple calendar views
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the calendar |
| datavalue | string | '' | Selected date value |
| placeholder | string | '' | Placeholder text when no date selected |
| required | boolean | false | Whether the field is required |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the calendar is visible |
| enabled | boolean | true | Whether the calendar is enabled |
| readonly | boolean | false | Whether the calendar is read-only |
| showTime | boolean | false | Whether to show time selection |

### Format Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| dateformat | string | 'MM/dd/yyyy' | Format for displaying dates |
| timeformat | string | 'HH:mm:ss' | Format for displaying time |
| locale | string | 'en-US' | Locale for date formatting |

### Validation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| mindate | string | null | Minimum selectable date |
| maxdate | string | null | Maximum selectable date |
| disableddates | array | [] | Array of disabled dates |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | - | Width of the calendar |
| height | number/string | - | Height of the calendar |
| styles | object | {} | Custom styles for the component |
| popupStyle | object | {} | Custom styles for the popup |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onChange | (date: string) | Triggered when date selection changes |
| onBlur | () | Triggered when calendar loses focus |
| onFocus | () | Triggered when calendar gains focus |

## Usage Notes
- Date format can be customized using dateformat prop
- Time selection can be enabled with showTime prop
- Date range can be restricted using mindate and maxdate
- Specific dates can be disabled using disableddates
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  },
} satisfies Meta<typeof WmCalendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicCalendar",
    selectionmode: "multiple",
    // datepattern: "yyyy-MM-dd",
    // placeholder: "Select Date",
    // showweeks: true,
    // outputformat: "yyyy-MM-dd",
    // view: "week",
    onSelect: action("onSelect"),
    // styles: {
    //   root: {
    //     backgroundColor: '#FFFFFF',
    //   },
    // },
  },
};

export const WithDefaultDate: Story = {
  args: {
    ...Basic.args,
    datavalue: '21-02-2025',
    name: "defaultDateCalendar",
  },
};

// export const WithCustomFormat: Story = {
//   args: {
//     ...Basic.args,
//     datepattern: "dd/MM/yyyy",
//     outputformat: "dd/MM/yyyy",
//     name: "customFormatCalendar",
//   },
// };

// export const WithMinMaxDate: Story = {
//   args: {
//     ...Basic.args,
//     mindate: '07-02-2025',
//     maxdate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
//     name: "minMaxCalendar",
//   },
// };

