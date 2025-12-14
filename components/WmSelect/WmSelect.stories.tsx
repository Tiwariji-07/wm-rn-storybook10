import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmSelect from "@wavemaker/app-rn-runtime/components/input/select/select.component";
import { action } from "storybook/actions";
import { ModalServiceComponent } from "../../services/ModalService";

const dataset = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
];

const meta = {
  title: "Form/Select",
  component: WmSelect,
  args: {
    caption: "Select",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <ModalServiceComponent>
          <Story />
        </ModalServiceComponent>
      </View>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmSelect Component

A select component that allows users to choose an option from a dropdown list.

## Features
- Single and multiple selection
- Searchable options
- Custom option rendering
- Validation support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the select |
| value | string/array | - | Currently selected value(s) |
| options | array | [] | Array of option objects |
| multiple | boolean | false | Whether multiple selection is allowed |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the select is visible |
| enabled | boolean | true | Whether the select is enabled |
| placeholder | string | 'Select an option' | Placeholder text |
| showLabel | boolean | true | Whether to show the label |

### Search Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| searchable | boolean | false | Whether options are searchable |
| searchPlaceholder | string | 'Search...' | Search input placeholder |
| minSearchLength | number | 0 | Minimum characters to start search |

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
| selectClass | string | '' | CSS class for the select |
| optionClass | string | '' | CSS class for options |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | 'combobox' | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onChange | (value, event) | Triggered when selection changes |
| onSearch | (query, event) | Triggered when search input changes |
| onFocus | (event) | Triggered when select is focused |
| onBlur | (event) | Triggered when select loses focus |

## Usage Notes
- Options should be an array of objects with value and label properties
- Multiple selection mode allows selecting multiple options
- Searchable mode enables filtering options by text
- Custom option rendering is supported through renderOption prop
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  },
} satisfies Meta<typeof WmSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    caption: "Basic Select",
    dataset: dataset,
    datafield: "value",
    displayfield: "label",
    placeholder: "Select an option",
    datavalue: "2",
    disabled: false,
    onValueChange: action("onValueChange"),
  },
};

