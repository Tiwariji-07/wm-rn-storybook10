import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmText from "@wavemaker/app-rn-runtime/components/input/text/text.component";

const meta = {
  title: "Form/Text",
  component: WmText,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmText Component

A versatile text input component that supports various input types, validation, and styling options.

## Features
- Text input with validation
- Regular expression support
- Character limit support
- Placeholder text
- Required field validation
- Disabled and readonly states
- Custom styling through class names
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the text input |
| datavalue | string | '' | Current value of the text input |
| placeholder | string | '' | Placeholder text when input is empty |
| required | boolean | false | Whether the field is required |
| disabled | boolean | false | Whether the input is disabled |
| readonly | boolean | false | Whether the input is read-only |

### Validation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| regexp | string | null | Regular expression for validation |
| maxchars | string | null | Maximum number of characters allowed |
| minchars | string | null | Minimum number of characters required |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | string | '300px' | Width of the text input |
| height | string | '40px' | Height of the text input |
| fontsize | string | '16px' | Font size of the text |
| color | string | '' | Text color |
| backgroundcolor | string | '' | Background color |
| textalign | string | 'center' | Text alignment |
| classname | string | '' | CSS class for styling |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onChange | (value: string) | Triggered when the text value changes |
| onBlur | () | Triggered when the input loses focus |
| onFocus | () | Triggered when the input gains focus |

## Styling Classes
Available classes for styling:
- \`input-sm\` - Small input size
- \`input-lg\` - Large input size
- \`input-primary\`
- \`input-secondary\`
- \`input-success\`
- \`input-danger\`
- \`input-warning\`
- \`input-info\`
- \`input-muted\`


        `
      }
    }
  },
  args:{
    width:"300px",
    height:"40px",
    fontsize:"16px",
    color:'',
    backgroundcolor:'',
    textalign:"center",
    datavalue:"Hello world! This is text box ", 
    styles:{
      text:{
        width:"300px",
        minHeight:"auto",
        height:"40px",
        fontSize:16,  
        textAlign:'center',
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
} satisfies Meta<typeof WmText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "Basic text",
    placeholder: "Enter text here",
    required: true,
    disabled: false,
    readonly: false,
  },
//   argTypes:{
//     class: {
//         options: ["input-sm", "input-lg"],
//         control: { type: "select" },
//       },
// }
};



export const RegxValidation: Story = {
  args: {
    name: "Regx text",
    placeholder: "Enter your email address",
    regexp: "[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}",
  },
};
export const MaximumCharacters: Story = {
  args: {
    name: "Maximum character",
    placeholder: "Max 10 character allowed",
    maxchars: "10",
  },
};

