import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import WmDonutChart from "@wavemaker/app-rn-runtime/components/chart/donut-chart/donut-chart.component";
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
      page: Docs,
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
