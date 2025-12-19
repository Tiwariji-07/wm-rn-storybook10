import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
// import WmColumnChart from "@wavemaker/app-rn-runtime/components/chart/column-chart/column-chart.component";
import WmBarChart from "@wavemaker/app-rn-runtime/components/chart/bar-chart/bar-chart.component";

import { action } from "storybook/actions";
import { quarterResults } from "../../constants/constant";
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
