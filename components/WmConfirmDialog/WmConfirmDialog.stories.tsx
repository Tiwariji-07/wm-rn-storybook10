import type { Meta, StoryObj } from "@storybook/react";
import React, { useRef, useState } from "react";
import { View, Modal, StyleSheet, Text } from "react-native";
import WmConfirmdialog from '@wavemaker/app-rn-runtime/components/dialogs/confirmdialog/confirmdialog.component';
import WmButton from '@wavemaker/app-rn-runtime/components/basic/button/button.component';
import { action } from "storybook/actions";
import { ModalServiceComponent } from "../../services/ModalService";

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";



const ConfirmDialogWithTrigger = (props: any) => {
  const dialogRef = useRef();

  const openDialog = () => {
    console.log('Opening dialog');
    if (dialogRef.current) {
      dialogRef.current.open();
    }
  };

  return (
    <ModalServiceComponent>
      <View>
        <WmButton
          name="openDialog"
          caption="Open Confirm Dialog"
          onTap={openDialog}
          classname="btn-success"

        />
        <WmConfirmdialog
          {...props}
          ref={dialogRef}
          onOpened={action("onOpened")}
        />
      </View>
    </ModalServiceComponent>
  );
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
  title: "Dialogs/Confirm",
  component: ConfirmDialogWithTrigger,
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
  argTypes: {
    alerttype: {
      control: "select",
      options: ["error", "information", "success", "warning"]
    }
  }
} satisfies Meta<typeof ConfirmDialogWithTrigger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ConfirmDialog: Story = {
  args: {
    name: "confirmDialog",
    title: "Confirm Action",
    message: "Are you sure you want to proceed with this action?",
    modal: true,
    onOk: action("onOk"),
    onCancel: action("onCancel"),
    onClose: action("onClose"),
    oktext: "Yes",
    canceltext: "No",
    iconclass: "wi wi-check",
    alerttype: "confirm",
    closable: true,
    showheader: true,
    // iconwidth:"24px",
    // iconheight:"24px"
  },
};

export const DeleteConfirmation: Story = {
  args: {
    ...ConfirmDialog.args,
    name: "deleteConfirm",
    title: "Delete Confirmation",
    message: "Are you sure you want to delete this item? This action cannot be undone.",
    oktext: "Delete",
    canceltext: "Cancel",
    iconclass: "wi wi-delete",
    alerttype: "warning"
  },
};

export const SaveConfirmation: Story = {
  args: {
    ...ConfirmDialog.args,
    name: "saveConfirm",
    title: "Save Changes",
    message: "Do you want to save your changes before proceeding?",
    oktext: "Save",
    canceltext: "Don't Save",
    iconclass: "wi wi-save",
    alerttype: "information"
  },
};
