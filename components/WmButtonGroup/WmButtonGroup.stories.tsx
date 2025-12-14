import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmButtonGroup from "@wavemaker/app-rn-runtime/components/basic/buttongroup/buttongroup.component";
import WmButton from "@wavemaker/app-rn-runtime/components/basic/button/button.component";
import { action } from "storybook/actions";

const meta = {
  title: "Form/ButtonGroup",
  component: WmButtonGroup,
  args: {
    children: [
      <WmButton caption="Button 1" onTap={action("Button 1 pressed")} />,
      <WmButton caption="Button 2" onTap={action("Button 2 pressed")} />,
      <WmButton caption="Button 3" onTap={action("Button 3 pressed")} />,
    ],
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
# WmButtonGroup Component

A component that groups related buttons together with consistent styling and behavior.

## Features
- Button grouping
- Multiple selection modes
- Custom styling
- Icon support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the group |
| buttons | array | [] | Array of button configurations |
| selectedIndex | number | -1 | Index of selected button |
| multiple | boolean | false | Whether multiple selection is allowed |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the group is visible |
| enabled | boolean | true | Whether the group is enabled |
| orientation | string | 'horizontal' | Group orientation ('horizontal' or 'vertical') |
| showIcons | boolean | false | Whether to show button icons |

### Button Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| caption | string | '' | Button text |
| iconclass | string | '' | Icon class name |
| disabled | boolean | false | Whether button is disabled |
| selected | boolean | false | Whether button is selected |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | - | Width of the group |
| height | number/string | - | Height of the group |
| styles | object | {} | Custom styles for the component |
| buttonStyle | object | {} | Custom styles for buttons |
| selectedStyle | object | {} | Custom styles for selected button |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onChange | (index: number) | Triggered when selection changes |
| onButtonClick | (button: object) | Triggered when a button is clicked |

## Usage Notes
- Buttons can be configured with text and icons
- Multiple selection can be enabled for checkbox-like behavior
- Group can be oriented horizontally or vertically
- Buttons can be styled individually or as a group
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  },
} satisfies Meta<typeof WmButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: [
      <WmButton caption="Button 1" onTap={action("Button 1 pressed")} />,
      <WmButton caption="Button 2" onTap={action("Button 2 pressed")} />,
      <WmButton caption="Button 3" onTap={action("Button 3 pressed")} />,
    ],
  },
};

export const WithIcons: Story = {
  args: {
    children: [
      <WmButton caption="Edit" iconclass="wi wi-edit" onTap={action("Edit pressed")} />,
      <WmButton caption="Delete" iconclass="wi wi-trash" onTap={action("Delete pressed")} />,
      <WmButton caption="Save" iconclass="wi wi-save" onTap={action("Save pressed")} />,
    ],
  },
};

// export const Vertical: Story = {
//   args: {
//     vertical: true,
//     children: [
//       <WmButton caption="Option 1" onTap={action("Option 1 pressed")} />,
//       <WmButton caption="Option 2" onTap={action("Option 2 pressed")} />,
//       <WmButton caption="Option 3" onTap={action("Option 3 pressed")} />,
//     ],
//   },
// };


