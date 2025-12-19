import type { Meta, StoryObj } from "@storybook/react";
import React, { useRef } from "react";
import { View } from "react-native";
import WmAlertdialog from "@wavemaker/app-rn-runtime/components/dialogs/alertdialog/alertdialog.component";
import WmButton from "@wavemaker/app-rn-runtime/components/basic/button/button.component";
import { action } from "storybook/actions";
import { ModalServiceComponent } from "../../services/ModalService";
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

const AlertDialogWithTrigger = (props: any) => {
  const dialogRef = useRef();

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.open();
    }
  };

  return (
    <ModalServiceComponent>
      <View>
        <WmButton
          name="openDialog"
          caption="Open Alert Dialog"
          onTap={openDialog}
          classname="btn-warning"
        />
        <WmAlertdialog {...props} ref={dialogRef} />
      </View>
    </ModalServiceComponent>
  );
};

const meta = {
  title: "Dialogs/Alert",
  component: AlertDialogWithTrigger,
  decorators: [
    (Story) => (

      <View style={{ padding: 16, height: "100%" }}>
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
} satisfies Meta<typeof AlertDialogWithTrigger>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AlertDialog: Story = {
  args: {
    name: "alertDialog",
    title: "Alert Dialog",
    message: "This is an alert dialog",
    oktext: "OK",
    closable: true,
    alerttype: "success",
    onOk: action("onOk"),
  },
  argTypes: {
    alerttype: {
      control: "select",
      options: ["error", "information", "success", "warning"]
    }
  }
};
