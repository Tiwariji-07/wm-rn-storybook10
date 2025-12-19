import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmSwitch from "@wavemaker/app-rn-runtime/components/input/switch/switch.component";
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

const meta = {
  title: "Form/Switch",
  component: WmSwitch,
  args: {
    caption: "Switch",
  },
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
    dataset: {
      table: {
        disable: false
      }
    }
  }
} satisfies Meta<typeof WmSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "Basic Switch",
    dataset: "yes,no,maybe",
    datavalue: "",
    // checkediconclass:"wm-sl-l sl-check",
    onChange: action("onValueChange"),
  },
};

export const Checked: Story = {
  args: {
    name: "Checked Switch",
    datavalue: "yes",
    onChange: action("onValueChange"),
  },
};


export const Disabled: Story = {
  args: {
    name: "Disabled Switch",
    datavalue: 'maybe',
    disabled: true,
    onChange: action("onValueChange"),
  },
};
