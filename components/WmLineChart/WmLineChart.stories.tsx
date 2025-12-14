import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmLineChart from "@wavemaker/app-rn-runtime/components/chart/line-chart/line-chart.component";
import { action } from "storybook/actions";
import ThemeFactory from "@wavemaker/app-rn-runtime/components/chart/theme/chart.theme";

const colors = ["#FF9800", "#2196F3", "#4CAF50", "#9C27B0", "#F44336"];

const defaultTheme = {
  ...ThemeFactory.getTheme('Terrestrial', null, colors),
};
// const colors = ["#FF9800", "#2196F3", "#4CAF50"];

// const defaultTheme = {
//   line: {
//     style: {
//       data: {
//         stroke: colors[0],
//         strokeWidth: 2,
//       },
//     },
//   },
//   stack: {
//     colorScale: colors,
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
    "Month": "Jan",
    "Temperature": 25,
    "Humidity": 65,
    "Pressure": 1012
  },
  {
    "Month": "Feb",
    "Temperature": 28,
    "Humidity": 60,
    "Pressure": 1010
  },
  {
    "Month": "Mar",
    "Temperature": 32,
    "Humidity": 55,
    "Pressure": 1008
  },
  {
    "Month": "Apr",
    "Temperature": 35,
    "Humidity": 50,
    "Pressure": 1006
  },
  {
    "Month": "May",
    "Temperature": 38,
    "Humidity": 45,
    "Pressure": 1004
  }
];

const meta = {
  title: "Charts/LineChart",
  component: WmLineChart,
  decorators: [
    (Story) => (
      <View style={{ padding: 24, width: '100%' }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmLineChart Component

A line chart component that displays data points connected by lines to show trends over time or categories.

## Features
- Multiple series support
- Custom line styles
- Area fill options
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
| curveType | string | 'linear' | Type of curve (linear, step, etc.) |
| areaFill | boolean | false | Whether to fill area under line |
| dotSize | number | 4 | Size of data points |

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
| colors | array | ChartTheme.colors | Array of colors for lines |
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
| onPointClick | (point, series, index) | Triggered when point is clicked |
| onLegendClick | (series, index) | Triggered when legend item is clicked |
| onTooltipShow | (point, series, index) | Triggered when tooltip is shown |

## Usage Notes
- Data should be an array of objects with x and y values
- Each series can have its own line style and color
- Area fill can be enabled for each series
- Axis labels and ticks can be customized
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
      options: ["hide", "top", "bottom",],
    },
    interpolation: {
      control: {
        type: "select",
      },
      options: ["cardinal", "linear", "step"],
    },
    xaxisdatakey: {
      control: {
        type: "select"
      },
      //list of keys of a sales data dynamically set using salesData value
      options: [...Object.keys(sampleData[0])],
    },
    // yaxisdatakey: {
    //   control:{
    //     type:"multi-select"
    //   },
    //   //list of keys of a sales data dynamically set using salesData value
    //   options:[ ...Object.keys(salesData[0])],
    // },
  },
} satisfies Meta<typeof WmLineChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Temperature Variation",
    xaxisdatakey: "Month",
    yaxisdatakey: "Temperature",
    showlegend: "top",
    interpolation: "cardinal",
    highlightpoints: false,
    linethickness: 3,
    iconclass: "wi wi-line-chart",
    type: "Line",
    offsettop: 20,
    offsetbottom: 50,
    offsetleft: 50,
    offsetright: 20,
    customcolors: colors.join(","),
    hidegridxaxis: true,
    hidegridyaxis: true,
    dataset: sampleData,
    theme: defaultTheme,
    onSelect: action("onSelect"),
    styles: {
      root: {
        height: 400,
        // width: '100%',
        // backgroundColor: '#FFFFFF',
      },
      // title: {
      //   fontSize: 18,
      //   fontWeight: 'bold',
      //   marginBottom: 10,
      // },
    },
  },
};

export const MultipleDataPlots: Story = {
  args: {
    ...Basic.args,
    yaxisdatakey: "Temperature,Humidity",
    title: "Temperature & Humidity",
    showlegend: "top",
  },
};


export const WithGrid: Story = {
  args: {
    ...Basic.args,
    yaxisdatakey: "Temperature,Humidity",
    showgrid: true,
    showlegend: "right",
    hidegridxaxis: false,
    hidegridyaxis: false,
    customcolors: colors.slice(0, 2).join(","),
    theme: {
      ...defaultTheme,
      stack: {
        colorScale: colors.slice(0, 2),
      },
    },
  },
};

