import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmAreaChart from "@wavemaker/app-rn-runtime/components/chart/area-chart/area-chart.component";
import { action } from "storybook/actions";
import { salesData } from "../../constants/constant";
import ThemeFactory from "@wavemaker/app-rn-runtime/components/chart/theme/chart.theme";

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";

const Docs = () => (
  <ComponentDocumentation
    overview={overview}
    props={props}
    events={events}
    methods={methods}
    styling={styling}
  />
);
const colors = ["#FF9800", "#2196F3", "#4CAF50", "#9C27B0", "#F44336"];

const defaultTheme = {
  ...ThemeFactory.getTheme('Terrestrial', null, colors),
};


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
