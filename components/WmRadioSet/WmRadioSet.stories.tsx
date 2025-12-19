import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmRadioSet from "@wavemaker/app-rn-runtime/components/input/radioset/radioset.component";
import { action } from "storybook/actions";

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";

const sampleDataset = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
];


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
  title: "Form/RadioSet",
  component: WmRadioSet,
  args: {
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
} satisfies Meta<typeof WmRadioSet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicRadioSet",
    dataset: sampleDataset,
    datafield: "value",
    displayfield: "label",
    // onChange: action("onChange"),

  },
};

export const DefaultValue: Story = {
  args: {
    ...Basic.args,
    datavalue: "light",
    name: "defaultValueRadioSet",
  },
};


export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
    datavalue: "dark",
    name: "disabledRadioSet",

  },
};
