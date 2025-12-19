import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";
import { action } from "storybook/actions";
import { animationNames } from "../../constants/constant";

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
  title: "Basic/Label",
  component: WmLabel,
  args: {
    caption: "Hello World",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, width: "100%" }}>
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
} satisfies Meta<typeof WmLabel>;

export default meta;

type Story = StoryObj<typeof meta>;



const labelstyles = {
  root: {
    width: '100%',
  },
  text: { padding: 10, width: '100%', textAlign: "center", borderWidth: "px", }
}
export const Basic: Story = {
  args: {
    caption: "Basic Label",
    required: false,
    animation: "fadeInRight",
    classname: "text-primary",
    onTap: action("onTap"),
    backgroundcolor: "",
    styles: labelstyles,
    fontsize: "16px",
    fontweight: "400",
    textalign: "center",
    borderwidth: "px",
    borderstyle: "dashed",
    bordercolor: "#8a8989",

  },
  argTypes: {
    animation: {
      control: {
        type: 'select'
      },
      options: animationNames
    },
    classname: {
      control: {
        type: "select",
      },
      options: ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-muted", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
    backgroundcolor: {
      control: {
        type: 'color',
      },
    },
    textalign: {
      control: {
        type: 'select',
      },
      options: ['left', 'center', 'right']
    },
    borderstyle: {
      control: {
        type: 'select',
      },
      options: ['solid', 'dotted', 'dashed']
    }
  }
};


