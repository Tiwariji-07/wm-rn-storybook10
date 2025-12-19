import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmContainer from "@wavemaker/app-rn-runtime/components/container/container.component";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";
import { animationNames } from "../../constants/constant";

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";
const style = {
  containerStyle: {
    backgroundColor: "#fff",
    width: 300,
    overflow: 'hidden',
  },
  labelStyle: {
    color: "#000",
    fontSize: 16,
    padding: 12,
  },
};


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
  title: "Containers/Container",
  component: WmContainer,
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
  args: {
    backgroundcolor: "",
    backgroundimage: "",
    backgroundsize: "cover",
    backgroundposition: "center",
    backgroundrepeat: "no-repeat"
  },
  argTypes: {
    classname: {
      control: {
        type: 'select'
      },
      options: ['app-elevated-container', 'app-outlined-container'],

    },
    animation: {
      control: {
        type: 'select'
      },
      options: animationNames
    },

  }
} satisfies Meta<typeof WmContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicContainer",
    styles: { root: style.containerStyle },
    width: "200px",
    height: "200px",
    children: [
      <WmLabel
        name="label1"
        caption="Basic Container"
        styles={{
          root: style.labelStyle,
          text: style.labelStyle,
        }}
      />,
    ],
  },
};

// export const ElevatedContainer :Story= {
//     args: {
//         ...Basic.args,
//         classname:"app-elevated-container"

//       },
// }

// export const OutlinedContainer :Story= {
//     args: {
//         ...Basic.args,
//         classname:"app-outlined-container"
//       },
// }


const labelText = `Container widget is an empty box for flow content, a collection of more semantically marked-up content that may need to be grouped together with the class, lang and title attributes. It represents its children. The users can either place the content or include the partial pages.

Containers are semantically correct for laying out content. Its most common use will likely be for stylistic purposes — i.e., wrapping some semantically marked-up content in a CSS-styled container.`

export const Scrollable: Story = {
  args: {
    ...Basic.args,
    children: [].concat(...Array(10).fill(<WmLabel
      name="label1"
      caption={labelText}
      styles={{
        root: style.labelStyle,
        text: style.labelStyle,
      }}
    />)),
    scrollable: true,
    styles: {
      ...Basic.args.styles,
      root: {
        ...Basic.args.styles.root,
        height: 400,
      },
    },
  }
}

export const Animated: Story = {
  args: {
    ...Basic.args,
    animation: "fadeIn",
    animationdelay: 500,

  },
}