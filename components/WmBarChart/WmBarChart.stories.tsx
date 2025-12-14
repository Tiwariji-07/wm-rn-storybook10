import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
// import WmColumnChart from "@wavemaker/app-rn-runtime/components/chart/column-chart/column-chart.component";
import WmBarChart from "@wavemaker/app-rn-runtime/components/chart/bar-chart/bar-chart.component";

import { action } from "storybook/actions";
import { quarterResults } from "../../constants/constant";
import ThemeFactory from "@wavemaker/app-rn-runtime/components/chart/theme/chart.theme";

const colors = ["#FF9800", "#2196F3", "#4CAF50", "#9C27B0", "#F44336"];

const defaultTheme = {
  ...ThemeFactory.getTheme('Terrestrial', null, []),
};

const meta = {
  title: "Charts/BarChart",
  component: WmBarChart,
  decorators: [
    (Story) => (
      <View style={{ width: '100%', padding: 24 }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmBarChart Component

A chart component that displays data as vertical or horizontal bars with customizable styling and interactions.

## Features
- Bar chart visualization
- Multiple series support
- Vertical and horizontal orientation
- Custom styling options
- Interactive tooltips
- Animation support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the chart |
| data | array | [] | Chart data array |
| xField | string | 'x' | Field name for X-axis values |
| yField | string | 'y' | Field name for Y-axis values |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the chart is visible |
| enabled | boolean | true | Whether the chart is enabled |
| showLegend | boolean | true | Whether to show chart legend |
| showTooltip | boolean | true | Whether to show tooltips |
| orientation | string | 'vertical' | Chart orientation ('vertical' or 'horizontal') |

### Chart Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| series | array | [] | Chart series configuration |
| xAxis | object | {} | X-axis configuration |
| yAxis | object | {} | Y-axis configuration |
| legend | object | {} | Legend configuration |
| tooltip | object | {} | Tooltip configuration |
| barWidth | number | 20 | Width of the bars |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | '100%' | Width of the chart |
| height | number/string | '300px' | Height of the chart |
| styles | object | {} | Custom styles for the component |
| chartStyle | object | {} | Custom styles for the chart |
| barStyle | object | {} | Custom styles for the bars |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onBarClick | (bar: object) | Triggered when a bar is clicked |
| onSeriesClick | (series: object) | Triggered when a series is clicked |
| onLegendClick | (legend: object) | Triggered when a legend item is clicked |

## Usage Notes
- Data should be provided in the correct format with x and y values
- Multiple series can be displayed with different colors
- Chart can be customized with various styling options
- Interactive features like tooltips and click events are supported
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  },
  argTypes: {
    type: {
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
      options: [...Object.keys(quarterResults[0])],
    },
    viewtype: {
      control: {
        type: "select",
      },
      options: ["Stacked", "Grouped"],
    },
  },
} satisfies Meta<typeof WmBarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Quarterly Revenue",
    xaxisdatakey: "Quarter",
    yaxisdatakey: "Revenue",
    viewtype: "Grouped",
    showlegend: "hide",
    iconclass: "wi wi-bar-chart",
    hidegridxaxis: true,
    hidegridyaxis: true,
    // customcolors: colors[1],
    type: "Bar",
    offsettop: 70,
    offsetbottom: 50,
    offsetleft: 65,
    offsetright: 25,
    onSelect: action("onSelect"),
    dataset: quarterResults,
    // theme: defaultTheme,
    horizontal: true,
  },
};

export const MultipleDataPlots: Story = {
  args: {
    ...Basic.args,
    yaxisdatakey: "Revenue,Profit",
    showlegend: "top",
  },
};

export const StackedBar: Story = {
  args: {
    ...Basic.args,
    yaxisdatakey: "Revenue,Profit",
    viewtype: "Stacked",
    showlegend: "top",
  },
};
