import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Text, View } from "react-native";
import WmProgressBar from "@wavemaker/app-rn-runtime/components/basic/progress-bar/progress-bar.component";

const meta = {
  title: "Basic/ProgressBar",
  component: WmProgressBar,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, width: '100%' }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# WmProgressBar Component

A linear progress indicator component that shows the progress of an operation.

## Features
- Linear progress display
- Customizable progress value
- Multiple progress types
- Custom styling support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the progress bar |
| datavalue | number | 0 | Current progress value (0-100) |
| minvalue | number | 0 | Minimum value of the progress range |
| maxvalue | number | 100 | Maximum value of the progress range |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | string | 'default' | Type of progress bar ('default', 'info', 'success', 'warning', 'danger') |
| showvalue | boolean | true | Whether to show the progress value |
| showlabel | boolean | true | Whether to show the progress label |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| classname | string | '' | CSS class for styling |
| width | string | '100%' | Width of the progress bar |
| height | string | '20px' | Height of the progress bar |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Progress Types
- \`default\`: Standard progress bar
- \`info\`: Blue progress bar for information
- \`success\`: Green progress bar for success
- \`warning\`: Yellow progress bar for warnings
- \`danger\`: Red progress bar for errors

## Usage Notes
- Progress value should be between minvalue and maxvalue
- The component supports both percentage and absolute value display
- Custom styling can be applied through the styles prop
- The component is fully accessible with proper ARIA attributes


        `
      }
    }
  }
} satisfies Meta<typeof WmProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    type: "default",
    datavalue: 500,
    minvalue: 100,
    maxvalue: 1000,
    styles:{ root: { height: 10,width:300 }, text: {} }
  },
  argTypes:{
        type:{
          control:{
            type:"select"
          },
          options:['default','info', 'success', 'warning', 'danger']
        }
      }
};

export const Status: Story = {
  render: () => {
    const types = ['default','info', 'success', 'warning', 'danger'];
    const DataValues=[50, 80, 30,65,90];
    return (
      <View style={{ gap: 16 }}>
        {types.map((type,index) => (
          <View>
          <Text style={{fontWeight:'bold',paddingBottom:5}}>{type}</Text>
          <WmProgressBar key={index} datavalue={DataValues[index]} type={type} styles={{ root: { height: 10 ,width:300}, text: {} }} />
          </View>
        ))}
      </View>
    );
  },
};


// export const CustomRange: Story = {
//   args: {
//     datavalue: 500,
//     minvalue: 100,
//     maxvalue: 1000,
//     type: "default",
//     styles:{ root: { height: 10,width:300 }, text: {} }
//   },
//   argTypes:{
//     type:{
//       control:{
//         type:"select"
//       },
//       options:['default','info', 'success', 'warning', 'danger']
//     }
//   }
// };

// export const CustomSize: Story = {
//   args: {
   
//     styles:{ root: { height: 10,width:300 }, text: {} }
//   },
//   argTypes:{
//     type:{
//       control:{
//         type:"select"
//       },
//       options:['default','info', 'success', 'warning', 'danger']
//     }
//   }
// };


