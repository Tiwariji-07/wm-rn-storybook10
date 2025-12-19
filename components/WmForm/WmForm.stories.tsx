import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmForm from "@wavemaker/app-rn-runtime/components/data/form/form.component";
import { action } from "storybook/actions";
import { Template1, Template2 } from "../../templates/form/Template1";
import { ModalServiceComponent } from "../../services/ModalService";
import { Users } from "../../constants/constant";
import { FloatingTemplate } from "../../templates/form/FloatingTemplate";

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";

// Sample dataset
const userDataset = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1-234-567-8900",
  address: "123 Main St, City, Country",
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
  title: "Data/Form",
  component: WmForm,
  decorators: [
    (Story) => (
      <View style={{ padding: 24, backgroundColor: "#fff", borderRadius: 12, width: 500 }}>
        <ModalServiceComponent>
          <Story />
        </ModalServiceComponent>
      </View>
    ),
  ],
  argTypes: {
    captionposition: {
      control: "select",
      options: ["top", "floating"], // Allows user to toggle in Storybook UI
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    }
  },
} satisfies Meta<typeof WmForm>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Basic: Story = {
  args: {
    name: "userForm",
    title: "User Information",
    dataset: userDataset,
    captionposition: "top",
    captionalign: "left",
    errormessage: "",
    enctype: "application/x-www-form-urlencoded",
    method: "post",
    // onSubmit: action("onSave"),
    onChange: action("onChange"),
    children: [
      <Template2 />
    ],
  },
};


export const FloatingCaption: Story = {
  args: {
    title: "Form",
    iconclass: "fa fa-user-plus",
    dataset: { Users },
    captionposition: "floating",
    captionalign: "left",
    enctype: "application/x-www-form-urlencoded",
    method: "post",
    name: "",
    errormessage: "",
    onChange: action("onChange"),
    // children: [<FloatingTemplate />],
  },
  render: (args) => (
    <WmForm {...args} >
      {args.captionposition === "top" ? <Template1 /> : <FloatingTemplate />}
    </WmForm>
  ),
};
