import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmProgressCircle from "@wavemaker/app-rn-runtime/components/basic/progress-circle/progress-circle.component";

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
  title: "Basic/ProgressCircle",
  component: WmProgressCircle,
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
  argTypes: {
    captionplacement: {
      control: {
        type: "radio",
      },
      options: ["inside", "hidden"],
    },
    type: {
      control: {
        type: "select",
      },
      options: ["default", "info", "success", "warning", "danger"],
    }
  }
} satisfies Meta<typeof WmProgressCircle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicProgressCircle",
    datavalue: 75,
    minvalue: 0,
    maxvalue: 100,
    captionplacement: "inside",
    type: "default",
    hint: "75% Complete",
    title: "",
    subtitle: "",
    styles: {
      root: {
        width: 150,
        height: 150,
      },

    },
  },
};


