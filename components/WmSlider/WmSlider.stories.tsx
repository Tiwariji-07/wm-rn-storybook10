import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmSlider from "@wavemaker/app-rn-runtime/components/input/slider/slider.component";
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
  title: "Form/Slider",
  component: WmSlider,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, width: 300 }}>
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
} satisfies Meta<typeof WmSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicSlider",
    minvalue: 0,
    maxvalue: 100,
    step: 1000,
    datavalue: 0,
    onChange: action("onChange"),

  },
};

export const WithSteps: Story = {
  args: {
    name: "stepsSlider",
    min: 0,
    max: 100,
    step: 10,
    datavalue: 50,
    onChange: action("onChange"),

  },
};

export const WithCustomRange: Story = {
  args: {
    name: "rangeSlider",
    min: -50,
    max: 50,
    step: 5,
    datavalue: 0,
    onChange: action("onChange"),

  },
};

export const Disabled: Story = {
  args: {
    name: "disabledSlider",
    min: 0,
    max: 100,
    step: 1,
    datavalue: 50,
    disabled: true,
    onChange: action("onChange"),

  },
};
