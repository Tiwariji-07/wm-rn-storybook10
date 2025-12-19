import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Text, View } from "react-native";
import WmProgressBar from "@wavemaker/app-rn-runtime/components/basic/progress-bar/progress-bar.component";

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

const meta = {
  title: "Basic/ProgressBar",
  component: WmProgressBar,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, width: '100%' }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      page: Docs,
    }
  }
} satisfies Meta<typeof WmProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    type: "default",
    datavalue: 500,
    minvalue: 100,
    maxvalue: 1000,
    styles:{ root: { height: 10,width:300 }, text: {} }
  },
  argTypes:{
        type:{
          control:{
            type:"select"
          },
          options:['default','info', 'success', 'warning', 'danger']
        }
      }
};

export const Status: Story = {
  render: () => {
    const types = ['default','info', 'success', 'warning', 'danger'];
    const DataValues=[50, 80, 30,65,90];
    return (
      <View style={{ gap: 16 }}>
        {types.map((type,index) => (
          <View>
          <Text style={{fontWeight:'bold',paddingBottom:5}}>{type}</Text>
          <WmProgressBar key={index} datavalue={DataValues[index]} type={type} styles={{ root: { height: 10 ,width:300}, text: {} }} />
          </View>
        ))}
      </View>
    );
  },
};


// export const CustomRange: Story = {
//   args: {
//     datavalue: 500,
//     minvalue: 100,
//     maxvalue: 1000,
//     type: "default",
//     styles:{ root: { height: 10,width:300 }, text: {} }
//   },
//   argTypes:{
//     type:{
//       control:{
//         type:"select"
//       },
//       options:['default','info', 'success', 'warning', 'danger']
//     }
//   }
// };

// export const CustomSize: Story = {
//   args: {
   
//     styles:{ root: { height: 10,width:300 }, text: {} }
//   },
//   argTypes:{
//     type:{
//       control:{
//         type:"select"
//       },
//       options:['default','info', 'success', 'warning', 'danger']
//     }
//   }
// };


