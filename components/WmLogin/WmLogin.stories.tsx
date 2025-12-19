import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { action } from "storybook/actions";
import WmLogin from "@wavemaker/app-rn-runtime/components/advanced/login/login.component";
import { LoginTemplate } from "../../templates/form/LoginTemplate";

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
  title: "Advanced/Login",
  component: WmLogin,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, backgroundColor: "#f5f5f5" }}>
        {/* <ModalServiceComponent> */}
        <Story />
        {/* </ModalServiceComponent> */}
      </View>
    ),
  ],
  parameters: {
    docs: {
      page: Docs,
    },
    layout: "centered",
  },
} satisfies Meta<typeof WmLogin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "Login",
    onLogin: action("onLogin"),
    children: [
      <LoginTemplate />
    ]
  },
};