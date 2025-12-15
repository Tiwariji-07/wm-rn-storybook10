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

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import studioPropsAndEvents from "./docs/studio-props-and-events.md?raw";
import scriptPropsMethods from "./docs/script-props-methods.md?raw";
import styling from "./docs/styling.md?raw";

const BubbleChartDocs = () => (
  <ComponentDocumentation
    overview={overview}
    studioPropsAndEvents={studioPropsAndEvents}
    scriptPropsMethods={scriptPropsMethods}
    styling={styling}
  />
);

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
      page: BubbleChartDocs,
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
