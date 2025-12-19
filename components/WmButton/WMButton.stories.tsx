import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View, Text } from "react-native";
import WmButton from "@wavemaker/app-rn-runtime/components/basic/button/button.component";
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
  title: "Form/Button",
  component: WmButton,
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
      canvas: {
        sourceState: "none",
      },
    }
  },
} satisfies Meta<typeof WmButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    caption: "Basic button",
    disabled: false,
    classname: "btn-primary",
    backgroundcolor: "",
    backgroundimage: "",
    backgroundsize: "cover",
    backgroundposition: "center",
    backgroundrepeat: "no-repeat"
  },
  argTypes: {
    classname: {
      control: {
        type: "select",
      },
      options: [
        "btn-primary",
        "btn-secondary",
        "btn-success",
        "btn-danger",
        "btn-warning",
        "btn-info",
        "btn-muted",
        "btn-default",
      ],
      name: "button Class",
    },
    iconclass: {
      control: {
        type: "select",
      },
      options: ["fa fa-send", "fa fa-at", "fa fa-archive", "fa fa-bar-chart", "wm-sl-l sl-twitter", "wm-sl-l sl-facebook", "wm-sl-l sl-apple"],
      name: "icon",
    },
    iconposition: {
      control: { type: "radio" },
      options: ["left", "right"],
    },
    animation: {
      control: {
        type: "select",
      },
      options: animationNames,
    },

  },
};

// export const Outline: Story = {
//   args: {
//     buttons: [
//       {
//         name: "outlineButton",
//         caption: "outline",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//         classname: "btn-default",
//       },
//       {
//         name: "outlineButton",
//         caption: "With Icon",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//         classname: "btn-default",
//         iconclass: "wi wi-plus",
//       },
//       {
//         name: "outlineButton",
//         caption: "Disabled",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//         classname: "btn-default",
//         iconclass: "wi wi-plus",
//         disabled: true,
//       },
//     ],
//   },
//   render: ({ buttons }) => (
//     <View style={{ gap: 16, flexDirection: "row" }}>
//       {buttons.map((button, index) => (
//         <WmButton key={index} {...button} />
//       ))}
//     </View>
//   ),
// };

// export const Texts: Story = {
//   args: {
//     buttons: [
//       {
//         name: "text buttonButton",
//         caption: "text button",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//       },
//       {
//         name: "text buttonButton",
//         caption: "With Icon",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//         iconclass: "wi wi-plus",
//       },
//       {
//         name: "text buttonButton",
//         caption: "Disabled",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//         iconclass: "wi wi-plus",
//         disabled: true,
//       },
//     ],
//   },
//   render: ({ buttons }) => (
//     <View style={{ gap: 16, flexDirection: "row" }}>
//       {buttons.map((button, index) => (
//         <WmButton key={index} {...button} />
//       ))}
//     </View>
//   ),
// };

// export const Icon: Story = {
//   args: {
//     buttons: [
//       {
//         name: "filledButton",
//         // caption: "With Icon",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//         classname: "btn-primary",
//         iconclass: "wi wi-plus",
//       },
//       {
//         name: "iconButton",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//         iconclass: "wi wi-plus",
//         classname: "btn-default",
//       },
//       {
//         name: "iconButton",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//         iconclass: "wi wi-plus",
//       },
//       {
//         name: "iconButton",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//         iconclass: "wi wi-plus",
//         disabled: true,
//         classname: "btn-primary",
//       },
//     ],
//   },
//   render: ({ buttons }) => (
//     <View style={{ gap: 16, flexDirection: "row" }}>
//       {buttons.map((button, index) => (
//         <WmButton key={index} {...button} />
//       ))}
//     </View>
//   ),
// };

export const Status: Story = {
  args: {
    buttons: [
      {
        name: "primaryButton",
        caption: "Primary Button",
        onTap: action("onTap"),
        defaultClass: "app-button",
        classname: "btn-primary",
      },
      {
        name: "secondaryButton",
        caption: "Secondary Button",
        classname: "btn-secondary",
        onTap: action("onTap"),
        defaultClass: "app-button",
      },
      {
        name: "successButton",
        caption: "Success Button",
        classname: "btn-success",
        onTap: action("onTap"),
        defaultClass: "app-button",
      },
      {
        name: "dangerButton",
        caption: "Danger Button",
        classname: "btn-danger",
        onTap: action("onTap"),
        defaultClass: "app-button",
      },
      {
        name: "warningButton",
        caption: "Warning Button",
        classname: "btn-warning",
        onTap: action("onTap"),
        defaultClass: "app-button",
      },
      {
        name: "infoButton",
        caption: "Info Button",
        classname: "btn-info",
        onTap: action("onTap"),
        defaultClass: "app-button",
      },
      {
        name: "linkButton",
        caption: "Link Button",
        classname: "btn-link",
        onTap: action("onTap"),
        defaultClass: "app-button",
      },
    ],
  },
  argTypes: {
    buttons: {
      table: {
        disable: true
      }
    }
  },
  render: ({ buttons }) => (
    <View
      style={{
        gap: 16,
        flexDirection: "row",
        flexWrap: "wrap",
        maxWidth: "70vw",
      }}
    >
      {buttons.map((button, index) => (
        <WmButton key={index} {...button} />
      ))}
    </View>
  ),
};

// export const Showcase: Story = {
//   render: () => (
//     <View style={{ gap: 20 }}>
//       <View style={{ gap: 16 }}>
//         <Text style={{ fontSize: 16, fontWeight: "bold" }}>Filled Buttons</Text>
//         <Filled.render {...Filled.args} />
//       </View>
//       <View style={{ gap: 16 }}>
//         <Text style={{ fontSize: 16, fontWeight: "bold" }}>
//           Outline Buttons
//         </Text>
//         <Outline.render {...Outline.args} />
//       </View>
//       <View style={{ gap: 16 }}>
//         <Text style={{ fontSize: 16, fontWeight: "bold" }}>Text Buttons</Text>
//         <Texts.render {...Texts.args} />
//       </View>
//       <View style={{ gap: 16 }}>
//         <Text style={{ fontSize: 16, fontWeight: "bold" }}>Icon Buttons</Text>
//         <Icon.render {...Icon.args} />
//       </View>
//       <View style={{ gap: 16 }}>
//         <Text style={{ fontSize: 16, fontWeight: "bold" }}>
//           Buttons with different status
//         </Text>
//         <Status.render {...Status.args} />
//       </View>
//     </View>
//   ),
// };
