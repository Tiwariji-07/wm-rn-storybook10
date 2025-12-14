import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmTextarea from "@wavemaker/app-rn-runtime/components/input/textarea/textarea.component";
import { action } from "storybook/actions";

const meta = {
  title: "Form/Textarea",
  component: WmTextarea,
  args: {
    width: "300px",
    height: "200px",
    fontsize: "16px",
    color: '',
    backgroundcolor: '',
    textalign: "left",
    datavalue: "Hello world! This is text box area for larger text content ",
    disabled: false,
    styles: {
      text: {
        width: "300px",
        minHeight: "auto",
        height: "200px",
        fontSize: 16,
        textAlign: 'left',
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
# WmTextarea Component

A textarea component that allows users to enter and edit multi-line text.

## Features
- Multi-line text input
- Auto-resize support
- Character count
- Validation support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the textarea |
| value | string | '' | Current value of the textarea |
| placeholder | string | '' | Placeholder text |
| required | boolean | false | Whether the textarea is required |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the textarea is visible |
| enabled | boolean | true | Whether the textarea is enabled |
| readOnly | boolean | false | Whether the textarea is read-only |
| showLabel | boolean | true | Whether to show the label |

### Size Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| rows | number | 4 | Number of visible rows |
| minRows | number | 2 | Minimum number of rows |
| maxRows | number | 8 | Maximum number of rows |
| autoResize | boolean | false | Whether to auto-resize based on content |

### Validation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| required | boolean | false | Whether the textarea is required |
| maxLength | number | - | Maximum number of characters |
| minLength | number | - | Minimum number of characters |
| pattern | string | - | Regular expression pattern |
| validationMessage | string | '' | Custom validation message |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| labelClass | string | '' | CSS class for the label |
| textareaClass | string | '' | CSS class for the textarea |
| resize | string | 'vertical' | Resize behavior ('none', 'vertical', 'horizontal', 'both') |

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
| onFocus | (event) | Triggered when textarea is focused |
| onBlur | (event) | Triggered when textarea loses focus |
| onResize | (event) | Triggered when textarea is resized |

## Usage Notes
- Value can be controlled or uncontrolled
- Auto-resize adjusts height based on content
- Character count can be shown with maxLength
- Validation rules can be combined
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  },
} satisfies Meta<typeof WmTextarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placeholder: "Enter text here...",
    onValueChange: action("onValueChange"),
  },
};


export const WithMaxLength: Story = {
  args: {
    maxchars: 100,
    placeholder: "Limited to 100 characters",
    onValueChange: action("onValueChange"),
  },
};


