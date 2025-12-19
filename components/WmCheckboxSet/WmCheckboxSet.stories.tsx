import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmCheckboxset from "@wavemaker/app-rn-runtime/components/input/checkboxset/checkboxset.component";
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

const sampleDataSet = [
  { Label: "Category A", Value: 30 },
  { Label: "Category B", Value: 25 },
  { Label: "Category C", Value: 20 },
  { Label: "Category D", Value: 15 },
  { Label: "Category E", Value: 10 },
];



const meta = {
  title: "Form/CheckboxSet",
  component: WmCheckboxset,
  args: {
    caption: "Checkbox",
    disabled: false,
    styles: {
      item: {
        marginRight: 0,
      }
    }
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
} satisfies Meta<typeof WmCheckboxset>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    caption: "Basic Checkbox",
    // datavalue: false,
    onChange: action("onValueChange"),

  },
};

export const Checked: Story = {
  args: {
    caption: "Checked Checkbox",
    datavalue: 'Option 1',
    onChange: action("onValueChange"),
  },
};

export const CustomValues: Story = {
  args: {
    caption: "Custom Style",
    dataset: sampleDataSet,
    displayfield: 'Label',
    datafield: "All Fields",
    // datavalue: 'Y',
    onChange: action("onValueChange"),
  },
};


