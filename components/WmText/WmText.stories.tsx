import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmText from "@wavemaker/app-rn-runtime/components/input/text/text.component";

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
  title: "Form/Text",
  component: WmText,
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    }
  },
  args: {
    width: "300px",
    height: "40px",
    fontsize: "16px",
    color: '',
    backgroundcolor: '',
    textalign: "center",
    datavalue: "Hello world! This is text box ",
    styles: {
      text: {
        width: "300px",
        minHeight: "auto",
        height: "40px",
        fontSize: 16,
        textAlign: 'center',
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
} satisfies Meta<typeof WmText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "Basic text",
    placeholder: "Enter text here",
    required: true,
    disabled: false,
    readonly: false,
  },
  //   argTypes:{
  //     class: {
  //         options: ["input-sm", "input-lg"],
  //         control: { type: "select" },
  //       },
  // }
};



export const RegxValidation: Story = {
  args: {
    name: "Regx text",
    placeholder: "Enter your email address",
    regexp: "[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}",
  },
};
export const MaximumCharacters: Story = {
  args: {
    name: "Maximum character",
    placeholder: "Max 10 character allowed",
    maxchars: "10",
  },
};

