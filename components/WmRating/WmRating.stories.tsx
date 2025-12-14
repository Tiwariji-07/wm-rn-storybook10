import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmRating from "@wavemaker/app-rn-runtime/components/input/rating/rating.component";
import { action } from "storybook/actions";

const meta = {
  title: "Form/Rating",
  component: WmRating,
  args: {
    caption: "Rating",
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
# WmRating Component

A rating component that allows users to provide feedback using a star-based rating system.

## Features
- Customizable number of stars
- Half-star ratings
- Read-only mode
- Custom icons
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the rating |
| value | number | 0 | Current rating value |
| maxRating | number | 5 | Maximum rating value |
| allowHalf | boolean | false | Whether to allow half-star ratings |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the rating is visible |
| enabled | boolean | true | Whether the rating is enabled |
| readOnly | boolean | false | Whether the rating is read-only |
| showLabel | boolean | true | Whether to show the label |

### Icon Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | string | 'star' | Icon to use for rating |
| emptyIcon | string | 'star-border' | Icon to use for empty rating |
| halfIcon | string | 'star-half' | Icon to use for half rating |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| labelClass | string | '' | CSS class for the label |
| iconClass | string | '' | CSS class for the icons |
| size | number | 24 | Size of the rating icons |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | 'slider' | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onChange | (value, event) | Triggered when rating changes |
| onHover | (value, event) | Triggered when hovering over stars |
| onFocus | (event) | Triggered when rating is focused |
| onBlur | (event) | Triggered when rating loses focus |

## Usage Notes
- Value can be a whole number or decimal (if allowHalf is true)
- Icons can be customized using icon names or custom components
- Size prop controls the dimensions of the rating icons
- The component is fully accessible with proper ARIA attributes
- Read-only mode is useful for displaying ratings without allowing changes
        `
      }
    }
  },
} satisfies Meta<typeof WmRating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    caption: "Basic Rating",
    datavalue: 3,
    onValueChange: action("onValueChange"),
  },
};

export const CustomMaxValue: Story = {
  args: {
    caption: "10 Stars Rating",
    maxvalue: 10,
    datavalue: 7,
    onValueChange: action("onValueChange"),
  },
};

export const CustomColor: Story = {
  args: {
    caption: "Custom Color",
    datavalue: 4,
    color: "#FF9800",
    onValueChange: action("onValueChange"),
  },
};

export const ReadOnly: Story = {
  args: {
    caption: "Read Only",
    datavalue: 5,
    readonly: true,
    onValueChange: action("onValueChange"),
  },
};
