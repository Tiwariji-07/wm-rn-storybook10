import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmProgressCircle from "@wavemaker/app-rn-runtime/components/basic/progress-circle/progress-circle.component";

const meta = {
  title: "Basic/ProgressCircle",
  component: WmProgressCircle,
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
# WmProgressCircle Component

A circular progress indicator component that shows the progress of an operation.

## Features
- Circular progress display
- Customizable progress value
- Multiple progress types
- Caption placement options
- Custom styling support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the progress circle |
| datavalue | number | 0 | Current progress value (0-100) |
| minvalue | number | 0 | Minimum value of the progress range |
| maxvalue | number | 100 | Maximum value of the progress range |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | string | 'default' | Type of progress circle ('default', 'info', 'success', 'warning', 'danger') |
| captionplacement | string | 'inside' | Where to place the caption ('inside', 'hidden') |
| title | string | '' | Title text to display |
| subtitle | string | '' | Subtitle text to display |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| classname | string | '' | CSS class for styling |
| width | number/string | 150 | Width of the progress circle |
| height | number/string | 150 | Height of the progress circle |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Progress Types
- \`default\`: Standard progress circle
- \`info\`: Blue progress circle for information
- \`success\`: Green progress circle for success
- \`warning\`: Yellow progress circle for warnings
- \`danger\`: Red progress circle for errors

## Usage Notes
- Progress value should be between minvalue and maxvalue
- The component supports both percentage and absolute value display
- Caption can be placed inside the circle or hidden
- Custom styling can be applied through the styles prop
- The component is fully accessible with proper ARIA attributes

## Example
\`\`\`jsx
<WmProgressCircle
  datavalue={75}
  type="success"
  captionplacement="inside"
  title="Progress"
  subtitle="75%"
  styles={{
    root: {
      width: 150,
      height: 150
    }
  }}
/>
\`\`\`
        `
      }
    }
  },
  argTypes:{
    captionplacement: {
      control: {
        type: "radio",
      },
      options: ["inside", "hidden"],
    },
    type: {
      control: {
        type: "select",
      },
      options: ["default", "info", "success", "warning", "danger"],
    }
  }
} satisfies Meta<typeof WmProgressCircle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicProgressCircle",
    datavalue: 75,
    minvalue: 0,
    maxvalue: 100,
    captionplacement:"inside",
    type: "default",
    hint: "75% Complete",
    title: "",
    subtitle:"",
    styles: {
      root: {
        width: 150,
        height: 150,
      },

    },
  },
};


