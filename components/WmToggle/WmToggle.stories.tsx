import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmToggle from "@wavemaker/app-rn-runtime/components/input/toggle/toggle.component";
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
  title: "Form/Toggle",
  component: WmToggle,
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
} satisfies Meta<typeof WmToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicToggle",
    disabled: false,
    onChange: action("onChange"),

  },
};

export const CustomValues: Story = {
  args: {
    name: "customToggle",
    datavalue: "no",
    checkedvalue: "yes",
    uncheckedvalue: "no",
    onChange: action("onChange"),
  },
  argTypes: {
    datavalue: {
      control: {
        type: 'select',
      },
      options: ['yes', 'no']
    }
  }
};


