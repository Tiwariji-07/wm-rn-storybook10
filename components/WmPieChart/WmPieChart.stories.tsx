import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import WmPieChart from "@wavemaker/app-rn-runtime/components/chart/pie-chart/pie-chart.component";
import ThemeFactory from "@wavemaker/app-rn-runtime/components/chart/theme/chart.theme";

const colors = ["#FF9800", "#2196F3", "#4CAF50", "#9C27B0", "#F44336"];

const defaultTheme = {
  ...ThemeFactory.getTheme('Terrestrial', null, colors),
};
// Sample dataset similar to what would be in staticVariable1
const sampleDataSet = [
  { Label: "Category A", Value: 30 },
  { Label: "Category B", Value: 25 },
  { Label: "Category C", Value: 20 },
  { Label: "Category D", Value: 15 },
  { Label: "Category E", Value: 10 },
];

// const defaultStyles = {
//   root: { 
//     height: 250,
//     width: '100%',
//     paddingHorizontal:16
//   },
//   text: {},
//   chart: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   legend: {
//     container: {
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//       justifyContent: 'center',
//       marginTop: 10,
//     },
//     item: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginRight: 15,
//       marginBottom: 5,
//     },
//     color: {
//       width: 12,
//       height: 12,
//       marginRight: 5,
//       borderRadius: 2,
//     },
//     label: {
//       fontSize: 12,
//     },
//   },
// };

const meta = {
  title: "Charts/PieChart",
  component: WmPieChart,
  tags: ['autodocs'],
  render: (args) => {
    const [dataset, setDataset] = useState(args.dataset);
    
    useEffect(() => {
      // Force a re-render by setting the dataset again after initial mount
      setDataset([...args.dataset]);
    }, []);

    return (
      <View style={{ padding: 16 }}>
        <WmPieChart {...args} dataset={dataset} />
      </View>
    );
  },
  argTypes:{
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
      options: ["hide", "top", "bottom","right"],
    },
    showlabels: {
      control: {
        type: "select",
      },
      options: ["hide", "inside"  ,"outside"],
    },
    labeltype: {
      control: {
        type: "select",
      },
      options: ["percent", "key-value"  ,"value","key"],
    },
    xaxisdatakey: {
      control:{
        type: "select"
      },
      options:[ ...Object.keys(sampleDataSet[0])],
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmPieChart Component

A pie chart component that displays data as proportional segments of a circle.

## Features
- Multiple data series support
- Custom colors and themes
- Interactive tooltips
- Legend support
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
| innerRadius | number | 0 | Inner radius for donut chart |
| startAngle | number | 0 | Starting angle in degrees |
| endAngle | number | 360 | Ending angle in degrees |
| padAngle | number | 0 | Padding between segments |
| cornerRadius | number | 0 | Corner radius of segments |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| colors | array | ChartTheme.colors | Array of colors for segments |
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
| onSegmentClick | (segment, index) | Triggered when segment is clicked |
| onLegendClick | (series, index) | Triggered when legend item is clicked |
| onTooltipShow | (segment, index) | Triggered when tooltip is shown |

## Usage Notes
- Data should be an array of objects with value and label properties
- Each series can have its own color and configuration
- Inner radius > 0 creates a donut chart
- Corner radius adds rounded corners to segments
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  },
} satisfies Meta<typeof WmPieChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "pieChart",
    type: "Pie",
    title: "Sample Pie Chart",
    iconclass: "wi wi-pie-chart",
    showlegend: "top",
    showlabels: "inside",
    dataset: sampleDataSet,
    xaxisdatakey: "Label",
    yaxisdatakey: "Value",
    labeltype: "percent",
    // theme: defaultTheme,
    // custom
    styles: { root: { height: 250, width: '100%' }, text: {} },
    // theme:"Retro"
  },
};

export const WithCustomColors: Story = {
  args: {
    ...Basic.args,
    name: "pieChartCustomColors",
    customcolors: "#FF6B6B,#4ECDC4,#45B7D1,#96CEB4,#FFEEAD",
    // styles: defaultStyles,
  },
};


