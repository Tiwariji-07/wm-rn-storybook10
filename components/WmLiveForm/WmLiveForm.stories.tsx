import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmLiveForm from "@wavemaker/app-rn-runtime/components/data/liveform/liveform.component";
import { action } from "storybook/actions";
import WmText from "@wavemaker/app-rn-runtime/components/input/text/text.component";
import WmNumber from "@wavemaker/app-rn-runtime/components/input/number/number.component";
import WmButton from "@wavemaker/app-rn-runtime/components/basic/button/button.component";

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
  title: "Data/LiveForm",
  component: WmLiveForm,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, backgroundColor: "#fff", borderRadius: 12, width: 400 }}>
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
} satisfies Meta<typeof WmLiveForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Insert: Story = {
  args: {
    title: "Add New User",
    operationtype: "insert",
    children: [
      <View style={{ gap: 16 }}>
        <WmText
          key="username"
          name="username"
          placeholder="Username"
          required={true}
        />
        <WmText key="email" name="email" placeholder="Email" required={true} />
        <WmNumber key="age" name="age" placeholder="Age" />
        <View
          key="actions"
          style={{ flexDirection: "row", justifyContent: "flex-end", gap: 8 }}
        >
          <WmButton caption="Cancel" classname="btn-default" onClick={action("onCancel")} />
          <WmButton caption="Save" classname="btn-success" onClick={action("onSubmit")} />
        </View>

      </View>
    ],
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
};

export const Update: Story = {
  args: {
    title: "Edit User",
    operationtype: "update",
    formdata: {
      id: 1,
      username: "johndoe",
      email: "john@example.com",
      age: 25,
    },
    primaryKey: ["id"],
    children: [
      <View style={{ gap: 16 }}>
        <WmText
          key="username"
          name="username"
          placeholder="Username"
          required={true}
        />
        <WmText key="email" name="email" placeholder="Email" required={true} />
        <WmNumber key="age" name="age" placeholder="Age" />
        <View
          key="actions"
          style={{ flexDirection: "row", justifyContent: "flex-end", gap: 8 }}
        >
          <WmButton caption="Cancel" classname="btn-default" onClick={action("onCancel")} />
          <WmButton caption="Update" classname="btn-primary" onClick={action("onSubmit")} />
        </View>

      </View>
    ],
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
};

export const Delete: Story = {
  args: {
    title: "Delete User",
    operationtype: "delete",
    formdata: {
      id: 1,
      username: "johndoe",
      email: "john@example.com",
      age: 25,
    },
    primaryKey: ["id"],
    children: [
      <View style={{ gap: 16 }}>
        <WmText
          key="username"
          name="username"
          placeholder="Username"
          required={true}
        />
        <WmText key="email" name="email" placeholder="Email" required={true} />
        <WmNumber key="age" name="age" placeholder="Age" />
        <View
          key="actions"
          style={{ flexDirection: "row", justifyContent: "flex-end", gap: 8 }}
        >
          <WmButton caption="Cancel" classname="btn-default" onClick={action("onCancel")} />
          <WmButton caption="Delete" classname="btn-danger" onClick={action("onSubmit")} />
        </View>

      </View>
    ],
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
};
