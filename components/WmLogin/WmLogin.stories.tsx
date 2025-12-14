import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { action } from "storybook/actions";
import WmLogin from "@wavemaker/app-rn-runtime/components/advanced/login/login.component";
import { LoginTemplate } from "../../templates/form/LoginTemplate";

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