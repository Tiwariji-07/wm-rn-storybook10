import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmTextarea from "@wavemaker/app-rn-runtime/components/input/textarea/textarea.component";
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
  title: "Form/Textarea",
  component: WmTextarea,
  args: {
    width: "300px",
    height: "200px",
    fontsize: "16px",
    color: '',
    backgroundcolor: '',
    textalign: "left",
    datavalue: "Hello world! This is text box area for larger text content ",
    disabled: false,
    styles: {
      text: {
        width: "300px",
        minHeight: "auto",
        height: "200px",
        fontSize: 16,
        textAlign: 'left',
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
} satisfies Meta<typeof WmTextarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placeholder: "Enter text here...",
    onValueChange: action("onValueChange"),
  },
};


export const WithMaxLength: Story = {
  args: {
    maxchars: 100,
    placeholder: "Limited to 100 characters",
    onValueChange: action("onValueChange"),
  },
};


