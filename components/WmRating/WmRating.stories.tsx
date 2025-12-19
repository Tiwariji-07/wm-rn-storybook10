import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmRating from "@wavemaker/app-rn-runtime/components/input/rating/rating.component";
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
  title: "Form/Rating",
  component: WmRating,
  args: {
    caption: "Rating",
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
} satisfies Meta<typeof WmRating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    caption: "Basic Rating",
    datavalue: 3,
    onValueChange: action("onValueChange"),
  },
};

export const CustomMaxValue: Story = {
  args: {
    caption: "10 Stars Rating",
    maxvalue: 10,
    datavalue: 7,
    onValueChange: action("onValueChange"),
  },
};

export const CustomColor: Story = {
  args: {
    caption: "Custom Color",
    datavalue: 4,
    color: "#FF9800",
    onValueChange: action("onValueChange"),
  },
};

export const ReadOnly: Story = {
  args: {
    caption: "Read Only",
    datavalue: 5,
    readonly: true,
    onValueChange: action("onValueChange"),
  },
};
