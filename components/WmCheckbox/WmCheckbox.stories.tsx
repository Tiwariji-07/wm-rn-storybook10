import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmCheckbox from "@wavemaker/app-rn-runtime/components/input/checkbox/checkbox.component";
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
  title: "Form/Checkbox",
  component: WmCheckbox,
  args: {
    caption: "Checkbox",
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
} satisfies Meta<typeof WmCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    caption: "Basic Checkbox",
    datavalue: false,
    onChange: action("onChange"),
  },
};

export const Checked: Story = {
  args: {
    caption: "Checked Checkbox",
    datavalue: true,
    onChange: action("onChange"),
  },
};


export const Disabled: Story = {
  args: {
    caption: "Disabled Checkbox",
    datavalue: false,
    disabled: true,
    onChange: action("onChange"),
  },
};
