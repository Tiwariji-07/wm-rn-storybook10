import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmSelect from "@wavemaker/app-rn-runtime/components/input/select/select.component";
import { action } from "storybook/actions";
import { ModalServiceComponent } from "../../services/ModalService";

const style = {
  selectStyle: {
    width: 200,
  },
};

// Sample dataset for supported locales
const supportedLocales = [
  { dataValue: "en", displayValue: "English" },
  { dataValue: "es", displayValue: "Español" },
  { dataValue: "fr", displayValue: "Français" },
  { dataValue: "de", displayValue: "Deutsch" },
  { dataValue: "ja", displayValue: "日本語" },
  { dataValue: "zh", displayValue: "中文" },
];

const meta = {
  title: "Form/SelectLocale",
  component: WmSelect,
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
# WmSelectLocale Component

A locale selector component that allows users to choose their preferred language and region settings.

## Features
- Language and region selection
- Locale format support
- Custom locale options
- Validation support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the selector |
| value | string | - | Currently selected locale |
| locales | array | [] | Array of available locales |
| required | boolean | false | Whether selection is required |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the selector is visible |
| enabled | boolean | true | Whether the selector is enabled |
| placeholder | string | 'Select locale' | Placeholder text |
| showLabel | boolean | true | Whether to show the label |

### Format Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| format | string | 'language-region' | Format of locale display |
| showFlag | boolean | true | Whether to show country flags |
| showLanguage | boolean | true | Whether to show language names |
| showRegion | boolean | true | Whether to show region names |

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
| selectClass | string | '' | CSS class for the selector |
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
| onChange | (value, event) | Triggered when locale changes |
| onFocus | (event) | Triggered when selector is focused |
| onBlur | (event) | Triggered when selector loses focus |

## Usage Notes
- Locales should be provided in ISO format (e.g., 'en-US', 'fr-FR')
- Format prop controls how locales are displayed
- Flags can be shown alongside language/region names
- The component is fully accessible with proper ARIA attributes
- Selected locale can be used for internationalization
        `
      }
    }
  },
  argTypes: {
    datafield: {
      control: {
        type: "select",
      },
      options: [...Object.keys(supportedLocales[0])],
    },
    displayfield: {
      control: {
        type: "select",
      },
      options: [...Object.keys(supportedLocales[0])],
    },
  }

} satisfies Meta<typeof WmSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "selectLocale",
    placeholder: "Select Language",
    dataset: supportedLocales,
    datafield: "dataValue",
    displayfield: "displayValue",
    datavalue: "en",
    classname: "select-locale",
    styles: { root: style.selectStyle },
    onChange: (event, widget, newVal, oldVal) => {
      action("onChange")(newVal);
      // In a real app, this would call:
      // fragment.App.changeLocale(newVal);
      // fragment.App.reload();
    },
  },
};
