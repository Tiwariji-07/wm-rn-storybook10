import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmBubbleChart from "@wavemaker/app-rn-runtime/components/chart/bubble-chart/bubble-chart.component";
import { action } from "storybook/actions";
import ThemeFactory from "@wavemaker/app-rn-runtime/components/chart/theme/chart.theme";

const colors = ["#FF9800", "#2196F3", "#4CAF50", "#9C27B0", "#F44336"];

const defaultTheme = {
  ...ThemeFactory.getTheme('Terrestrial', null, colors),
};
// const defaultTheme = {
//   scatter: {
//     style: {
//       data: {
//         fill: "#2196F3",
//         fillOpacity: 0.7,
//         stroke: "#1976D2",
//         strokeWidth: 2,
//       },
//     },
//   },
//   axis: {
//     style: {
//       axis: { stroke: "#78909C", strokeWidth: 1 },
//       grid: { stroke: "#CFD8DC", strokeWidth: 1 },
//       ticks: { stroke: "#78909C", size: 5 },
//       tickLabels: { fill: "#546E7A", fontSize: 12 },
//     },
//   },
// };

const sampleData = [
  {
    "Product": "A",
    "Sales": 65,
    "Revenue": 100,
    "Units": 30
  },
  {
    "Product": "B",
    "Sales": 80,
    "Revenue": 150,
    "Units": 45
  },
  {
    "Product": "C",
    "Sales": 45,
    "Revenue": 80,
    "Units": 20
  },
  {
    "Product": "D",
    "Sales": 95,
    "Revenue": 200,
    "Units": 60
  },
  {
    "Product": "E",
    "Sales": 75,
    "Revenue": 120,
    "Units": 35
  }
];

const meta = {
  title: "Charts/BubbleChart",
  component: WmBubbleChart,
  decorators: [
    (Story) => (
      <View style={{ padding: 28, width: '100%' }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmBubbleChart Component

A chart component that displays data as bubbles with customizable size and color.

## Features
- Bubble chart visualization
- Multiple series support
- Custom bubble sizes
- Color customization
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
| sizeField | string | 'size' | Field name for bubble size values |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the chart is visible |
| enabled | boolean | true | Whether the chart is enabled |
| showLegend | boolean | true | Whether to show chart legend |
| showTooltip | boolean | true | Whether to show tooltips |

### Chart Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| series | array | [] | Chart series configuration |
| xAxis | object | {} | X-axis configuration |
| yAxis | object | {} | Y-axis configuration |
| legend | object | {} | Legend configuration |
| tooltip | object | {} | Tooltip configuration |
| minSize | number | 10 | Minimum bubble size |
| maxSize | number | 50 | Maximum bubble size |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | '100%' | Width of the chart |
| height | number/string | '300px' | Height of the chart |
| styles | object | {} | Custom styles for the component |
| chartStyle | object | {} | Custom styles for the chart |
| bubbleStyle | object | {} | Custom styles for the bubbles |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onBubbleClick | (bubble: object) | Triggered when a bubble is clicked |
| onSeriesClick | (series: object) | Triggered when a series is clicked |
| onLegendClick | (legend: object) | Triggered when a legend item is clicked |

## Usage Notes
- Data should be provided with x, y, and size values
- Multiple series can be displayed with different colors
- Bubble sizes can be customized using minSize and maxSize
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
      options: [...Object.keys(sampleData[0])],
    },
    bubblesize: {
      control: {
        type: "select"
      },
      options: [...Object.keys(sampleData[0])],
    },
    shape: {
      control: {
        type: "select",
      },
      options: ["circle", "cross", "square", "triangle-up", "triangle-down", "diamond", "random"],
    },
  },
} satisfies Meta<typeof WmBubbleChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Product vs Revenue",
    xaxisdatakey: "Product",
    yaxisdatakey: "Revenue",
    iconclass: "wi wi-bubble-chart",
    showlegend: "hide",
    bubblesize: "Units",
    customcolors: "#FF9800,#2196F3,#4CAF50,#F44336,#9C27B0",
    offsettop: 20,
    offsetbottom: 50,
    offsetleft: 50,
    offsetright: 20,
    onSelect: action("onSelect"),
    name: "chart",
    type: "Bubble",
    theme: defaultTheme,
    dataset: sampleData,
    styles: {
      root: {
        height: 300,
        // width: '100%',
      },

    },
  },
};

export const MultipleDataPlots: Story = {
  args: {
    ...Basic.args,
    yaxisdatakey: "Sales,Revenue,Units",
    showlegend: "top",
    customcolors: "#FF9800,#2196F3,#4CAF50,#F44336,#9C27B0",
  },
};


export const DifferentPlotShapes: Story = {
  args: {
    shape: "triangle-down",
    ...Basic.args,

  },
};
