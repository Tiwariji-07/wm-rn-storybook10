import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmSlider from "@wavemaker/app-rn-runtime/components/input/slider/slider.component";
import { action } from "storybook/actions";

const meta = {
  title: "Form/Slider",
  component: WmSlider,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, width: 300 }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmSlider Component

A slider component that allows users to select a value within a specified range by dragging a handle.

## Features
- Range selection
- Custom step values
- Value display
- Marks and labels
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the slider |
| value | number | 0 | Current value of the slider |
| min | number | 0 | Minimum value |
| max | number | 100 | Maximum value |
| step | number | 1 | Step increment |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the slider is visible |
| enabled | boolean | true | Whether the slider is enabled |
| showLabel | boolean | true | Whether to show the label |
| showValue | boolean | true | Whether to show current value |

### Range Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| range | boolean | false | Whether to show range selection |
| marks | array | [] | Array of mark points |
| vertical | boolean | false | Whether to show vertical slider |

### Validation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| required | boolean | false | Whether value is required |
| validationMessage | string | '' | Custom validation message |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| labelClass | string | '' | CSS class for the label |
| trackClass | string | '' | CSS class for the track |
| handleClass | string | '' | CSS class for the handle |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | 'slider' | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onChange | (value, event) | Triggered when value changes |
| onChangeCommitted | (value, event) | Triggered when value change is committed |
| onFocus | (event) | Triggered when slider is focused |
| onBlur | (event) | Triggered when slider loses focus |

## Usage Notes
- Value must be within min and max range
- Step prop controls the increment between values
- Marks can be used to show specific points on the slider
- Range mode allows selecting a range of values
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  },
} satisfies Meta<typeof WmSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicSlider",
    minvalue: 0,
    maxvalue: 100,
    step: 1000,
    datavalue: 0,
    onChange: action("onChange"),

  },
};

export const WithSteps: Story = {
  args: {
    name: "stepsSlider",
    min: 0,
    max: 100,
    step: 10,
    datavalue: 50,
    onChange: action("onChange"),

  },
};

export const WithCustomRange: Story = {
  args: {
    name: "rangeSlider",
    min: -50,
    max: 50,
    step: 5,
    datavalue: 0,
    onChange: action("onChange"),

  },
};

export const Disabled: Story = {
  args: {
    name: "disabledSlider",
    min: 0,
    max: 100,
    step: 1,
    datavalue: 50,
    disabled: true,
    onChange: action("onChange"),

  },
};
