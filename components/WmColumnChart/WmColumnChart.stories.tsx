import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
// import WmBarChart from "@wavemaker/app-rn-runtime/components/chart/bar-chart/bar-chart.component";
import WmColumnChart from "@wavemaker/app-rn-runtime/components/chart/column-chart/column-chart.component";

import { action } from "storybook/actions";

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
      page: Docs,
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


