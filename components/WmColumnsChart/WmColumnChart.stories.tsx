import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
// import WmBarChart from "@wavemaker/app-rn-runtime/components/chart/bar-chart/bar-chart.component";
import WmColumnChart from "@wavemaker/app-rn-runtime/components/chart/column-chart/column-chart.component";

import { action } from "storybook/actions";

const sampleData = [
  {
    "Sales": 65,
    "Month": "Jan",
    "Profit": 28
  },
  {
    "Sales": 59,
    "Month": "Feb",
    "Profit": 48
  },
  {
    "Sales": 80,
    "Month": "Mar",
    "Profit": 40
  },
  {
    "Sales": 81,
    "Month": "Apr",
    "Profit": 19
  },
  {
    "Sales": 56,
    "Month": "May",
    "Profit": 86
  }
];

const meta = {
  title: "Charts/ColumnsChart",
  component: WmColumnChart,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, height: 460, width: 600 }}>
        <Story />
      </View>
    ),
  ],
  args: {

  },
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    horizontal: {
      table: {
        disable: true,
      },
    },
    showlegend: {
      control: {
        type: "select",
      },
      options: ["hide", "top", "bottom"],
    },
    xaxisdatakey: {
      control: {
        type: "select"
      },
      options: [...Object.keys(sampleData[0])],
    },
    viewtype: {
      control: {
        type: "select",
      },
      options: ["Stacked", "Grouped"],
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmColumnsChart Component

A column chart component that displays data as vertical bars to compare values across categories.

## Features
- Multiple series support
- Stacked columns
- Custom colors and themes
- Interactive tooltips
- Axis customization
- Animation support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the chart |
| data | array | [] | Array of data points |
| series | array | [] | Array of series configurations |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the chart is visible |
| enabled | boolean | true | Whether the chart is enabled |
| showLegend | boolean | true | Whether to show legend |
| showTooltip | boolean | true | Whether to show tooltips |

### Chart Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| xAxisKey | string | 'x' | Key for x-axis data |
| yAxisKey | string | 'y' | Key for y-axis data |
| stacked | boolean | false | Whether to stack columns |
| barWidth | number | 'auto' | Width of columns |
| barGap | number | 0 | Gap between column groups |

### Axis Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| xAxisLabel | string | '' | Label for x-axis |
| yAxisLabel | string | '' | Label for y-axis |
| xAxisTickCount | number | 5 | Number of x-axis ticks |
| yAxisTickCount | number | 5 | Number of y-axis ticks |
| showGrid | boolean | true | Whether to show grid lines |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| colors | array | ChartTheme.colors | Array of colors for columns |
| theme | object | ChartTheme | Chart theme configuration |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | 'img' | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onColumnClick | (column, series, index) | Triggered when column is clicked |
| onLegendClick | (series, index) | Triggered when legend item is clicked |
| onTooltipShow | (column, series, index) | Triggered when tooltip is shown |

## Usage Notes
- Data should be an array of objects with x and y values
- Each series can have its own color and configuration
- Stacked mode combines multiple series into single columns
- Axis labels and ticks can be customized
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  }
} satisfies Meta<typeof WmColumnChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Monthly Sales",
    xaxisdatakey: "Month",
    yaxisdatakey: "Sales",
    showlegend: "hide",
    viewtype: "Grouped",
    onSelect: action("onSelect"),
    horizontal: false,
    dataset: sampleData,

  },
};

export const MultipleDataPlots: Story = {
  args: {
    ...Basic.args,
    yaxisdatakey: "Sales,Profit",

  },
};
export const StackedBar: Story = {
  args: {
    ...Basic.args,
    yaxisdatakey: "Sales,Profit",
    viewtype: "Stacked",
  },
};


