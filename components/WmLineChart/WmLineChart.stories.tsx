import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmLineChart from "@wavemaker/app-rn-runtime/components/chart/line-chart/line-chart.component";
import { action } from "storybook/actions";
import ThemeFactory from "@wavemaker/app-rn-runtime/components/chart/theme/chart.theme";

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";

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


const Docs = () => (
  <ComponentDocumentation
    overview={overview}
    props={props}
    events={events}
    methods={methods}
    styling={styling}
  />
);

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
      page: Docs,
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

