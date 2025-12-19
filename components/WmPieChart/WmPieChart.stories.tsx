import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import WmPieChart from "@wavemaker/app-rn-runtime/components/chart/pie-chart/pie-chart.component";
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
      options: [...Object.keys(sampleDataSet[0])],
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
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


