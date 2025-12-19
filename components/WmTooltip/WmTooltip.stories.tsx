import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View, Text, Button } from "react-native";
import WmTooltip from "@wavemaker/app-rn-runtime/components/basic/tooltip/tooltip.component";

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
  title: "Basic/Tooltip",
  component: WmTooltip,
  args: {
    text: "Tooltip text",
    showTooltip: true,
  },
  decorators: [
    (Story) => (
      <View style={{ height: 100, justifyContent: 'center' }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    direction: {
      control: {
        type: "select",
      },
      options: ["up", "down", "left", "right"],
    },
    tooltipStyle: {
      table: {
        disable: true,
      }
    },
    tooltipLabelStyle: {
      table: {
        disable: true,
      }
    }
  },
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    }
  }
} satisfies Meta<typeof WmTooltip>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Basic: Story = {
  args: {
    text: "Styled tooltip",
    showTooltip: true,
    direction: 'down',
    tooltipStyle: {
      backgroundColor: "#673AB7",
      padding: 8,
      borderRadius: 4,
      // left:'none'
    },
    tooltipLabelStyle: {
      color: "#FFFFFF",
      fontSize: 14,

    },
    children: <Text style={{ padding: 8 }}>Hover me for the tooltip</Text>,
  },
};

