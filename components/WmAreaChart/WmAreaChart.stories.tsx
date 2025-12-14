import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmAreaChart from "@wavemaker/app-rn-runtime/components/chart/area-chart/area-chart.component";
import { action } from "storybook/actions";
import { salesData } from "../../constants/constant";
import ThemeFactory from "@wavemaker/app-rn-runtime/components/chart/theme/chart.theme";

const colors = ["#FF9800", "#2196F3", "#4CAF50", "#9C27B0", "#F44336"];

const defaultTheme = {
  ...ThemeFactory.getTheme('Terrestrial', null, colors),
};
// const colors = ["#FF9800", "#2196F3", "#4CAF50"];

// const defaultTheme = {
//   area: {
//     style: {
//       data: {
//         fill: colors[0],
//         fillOpacity: 0.7,
//         stroke: colors[0],
//         strokeWidth: 2,
//       },
//     },
//   },
//   stack: {
//     colorScale: colors,
//   },
//   line: {
//     style: {
//       data: {
//         stroke: colors[0],
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
//   legend: {
//     style: {
//       labels: { fontSize: 12,},
//     },
//   },
// };



const meta = {
  title: "Charts/AreaChart",
  component: WmAreaChart,
  decorators: [
    (Story) => (
      <View style={{ height: 400, width: 500 }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmAreaChart Component

A chart component that displays data as an area chart with customizable styling and interactions.

## Features
- Area chart visualization
- Multiple series support
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

### Chart Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| series | array | [] | Chart series configuration |
| xAxis | object | {} | X-axis configuration |
| yAxis | object | {} | Y-axis configuration |
| legend | object | {} | Legend configuration |
| tooltip | object | {} | Tooltip configuration |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | '100%' | Width of the chart |
| height | number/string | '300px' | Height of the chart |
| styles | object | {} | Custom styles for the component |
| chartStyle | object | {} | Custom styles for the chart |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onPointClick | (point: object) | Triggered when a point is clicked |
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
      options: [...Object.keys(salesData[0])],
    },
    // yaxisdatakey: {
    //   control:{
    //     type:"multi-select"
    //   },
    //   //list of keys of a sales data dynamically set using salesData value
    //   options:[ ...Object.keys(salesData[0])],
    // },
  },
} satisfies Meta<typeof WmAreaChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Monthly Sales",
    xaxisdatakey: "Month",
    yaxisdatakey: "Profit",
    showlegend: "hide",
    interpolation: "cardinal",
    highlightpoints: true,
    customcolors: colors[0],
    hidegridxaxis: true,
    hidegridyaxis: true,
    offsettop: 70,
    offsetbottom: 50,
    offsetleft: 65,
    offsetright: 25,
    onSelect: action("onSelect"),
    dataset: salesData,
    theme: defaultTheme,
    type: "Area",
    styles: {
      root: {
        height: 400,
        width: '100%',
        // backgroundColor: '#FFFFFF',
      },
      //   title: {
      //     fontSize: 18,
      //     fontWeight: 'bold',
      //     marginBottom: 10,
      //   },
    },
  },
};

export const MultipleDataPlots: Story = {
  args: {
    ...Basic.args,
    yaxisdatakey: "Sales,Profit,Revenue",
    customcolors: colors.join(","),
    showlegend: "top",
    theme: {
      ...defaultTheme,
      stack: {
        colorScale: colors,
      },
    },
  },
};

export const WithGrid: Story = {
  args: {
    ...Basic.args,
    yaxisdatakey: "Sales,Profit",
    customcolors: colors.slice(0, 2).join(","),
    showgrid: true,
    showlegend: "right",
    hidegridxaxis: false,
    hidegridyaxis: false,
    theme: {
      ...defaultTheme,
      stack: {
        colorScale: colors.slice(0, 2),
      },
    },
  },
};

// export const WithAxisLabels: Story = {
//   args: {
//     ...Basic.args,
//     yaxisdatakey: "Sales,Profit",
//     customcolors: colors.slice(0, 2).join(","),
//     xaxislabel: "Months",
//     yaxislabel: "Amount ($)",
//     showlegend: "top",
//     theme: {
//       ...defaultTheme,
//       stack: {
//         colorScale: colors.slice(0, 2),
//       },
//     },
//   },
// };
