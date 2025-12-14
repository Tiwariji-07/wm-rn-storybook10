import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import WmDonutChart from "@wavemaker/app-rn-runtime/components/chart/donut-chart/donut-chart.component";
import { action } from "storybook/actions";

import ThemeFactory from "@wavemaker/app-rn-runtime/components/chart/theme/chart.theme";

const colors = ["#FF9800", "#2196F3", "#4CAF50", "#9C27B0", "#F44336"];

const defaultTheme = {
  ...ThemeFactory.getTheme('Terrestrial', null, colors),
};

// const colors = ["#FF9800", "#2196F3", "#4CAF50", "#F44336", "#9C27B0"];

// const defaultTheme = {
//   pie: {
//     style: {
//       data: {
//         fillOpacity: 0.9,
//         stroke: "#FFFFFF",
//         strokeWidth: 2,
//       },
//       labels: {
//         fill: "#455A64",
//         fontSize: 12,
//         fontWeight: "bold",
//       },
//     },
//   },
// };

const sampleData = [
  {
    "Category": "Mobile",
    "Value": 35,
  },
  {
    "Category": "Desktop",
    "Value": 45,
  },
  {
    "Category": "Tablet",
    "Value": 20,
  },
  {
    "Category": "TV",
    "Value": 15,
  },
  {
    "Category": "Others",
    "Value": 10,
  }
];

const meta = {
  title: "Charts/DonutChart",
  component: WmDonutChart,
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
# WmDonutChart Component

A donut chart component that displays data in a circular format with a hollow center.

## Features
- Donut chart visualization
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
| data | array | [] | Data array for the chart |
| angleField | string | 'value' | Field name for angle values |
| colorField | string | 'type' | Field name for color values |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the chart is visible |
| enabled | boolean | true | Whether the chart is enabled |
| loading | boolean | false | Whether the chart is loading |

### Chart Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| radius | number | 0.8 | Outer radius of the donut |
| innerRadius | number | 0.6 | Inner radius of the donut |
| startAngle | number | -90 | Starting angle in degrees |
| endAngle | number | 270 | Ending angle in degrees |
| label | object | {} | Label configuration |
| legend | object | {} | Legend configuration |
| tooltip | object | {} | Tooltip configuration |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | '100%' | Width of the chart |
| height | number/string | '300px' | Height of the chart |
| styles | object | {} | Custom styles for the component |
| theme | object | {} | Chart theme configuration |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onSegmentClick | (data) | Triggered when segment is clicked |
| onLegendClick | (data) | Triggered when legend item is clicked |

## Usage Notes
- Donut chart is useful for showing proportions
- Multiple series can be displayed
- Custom styling can be applied
- Interactive features like tooltips and click events
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  },
  tags: ['autodocs'],
  render: (args) => {
    const [dataset, setDataset] = useState(args.dataset);

    useEffect(() => {
      // Force a re-render by setting the dataset again after initial mount
      setDataset([...args.dataset]);
    }, []);

    return (
      <View style={{ padding: 16 }}>
        <WmDonutChart {...args} dataset={dataset} />
      </View>
    );
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
      options: ["hide", "top", "bottom", "right"],
    },
    showlabels: {
      control: {
        type: "select",
      },
      options: ["hide", "inside", "outside"],
    },
    labeltype: {
      control: {
        type: "select",
      },
      options: ["percent", "key-value", "value", "key"],
    },
    xaxisdatakey: {
      control: {
        type: "select"
      },
      options: [...Object.keys(sampleData[0])],
    },

  },
} satisfies Meta<typeof WmDonutChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Device Distribution",
    xaxisdatakey: "Category",
    yaxisdatakey: "Value",
    centerlabel: "Label",
    showlegend: "top",
    labeltype: "percent",
    showlabels: "outside",
    iconclass: "wi wi-donut-large",
    donutratio: 0.6,
    offsettop: 20,
    offsetbottom: 20,
    offsetleft: 20,
    offsetright: 20,
    onSelect: action("onSelect"),
    type: "Donut",
    theme: defaultTheme,
    customcolors: colors.join(","),
    dataset: sampleData,
    styles: {
      root: {
        height: 300,
        // width: 200,
        // paddingTop:8,

      },
      // title: {
      //   fontSize: 18,
      //   fontWeight: 'bold',
      //   marginBottom: 10,
      // },
    },
  },
};

export const WithCustomRatio: Story = {
  args: {
    ...Basic.args,
    donutratio: 0.8,
    // showlegend: "right",
  },
};


export const WithCustomColors: Story = {
  args: {
    ...Basic.args,
    customcolors: "#E91E63,#2196F3,#4CAF50,#FFC107,#9C27B0",
    showlegend: "top",
  },
};
