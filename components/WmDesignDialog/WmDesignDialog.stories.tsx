import type { Meta, StoryObj } from "@storybook/react";
import React, { useRef, useState } from "react";
import { View, Modal, StyleSheet, Text } from "react-native";
import WmDialog from '@wavemaker/app-rn-runtime/components/dialogs/dialog/dialog.component';
import WmButton from '@wavemaker/app-rn-runtime/components/basic/button/button.component';
import WmDialogactions from '@wavemaker/app-rn-runtime/components/dialogs/dialogactions/dialogactions.component';
import WmDialogcontent from '@wavemaker/app-rn-runtime/components/dialogs/dialogcontent/dialogcontent.component';
import WmGridcolumn from '@wavemaker/app-rn-runtime/components/container/layoutgrid/gridcolumn/gridcolumn.component';
import WmGridrow from '@wavemaker/app-rn-runtime/components/container/layoutgrid/gridrow/gridrow.component';
import WmLabel from '@wavemaker/app-rn-runtime/components/basic/label/label.component';
import WmLayoutgrid from '@wavemaker/app-rn-runtime/components/container/layoutgrid/layoutgrid.component';
import { action } from "storybook/actions";
import { ModalServiceComponent } from "../../services/ModalService";

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";

const DialogContent = ({ onClose }) => (
  <View>
    <WmDialogcontent name="wm_dialogcontent_a36igg03f6" >
      <WmLayoutgrid name="layoutgrid1" >
        <WmGridrow name="gridrow1" >
          <WmGridcolumn
            columnwidth={6}
            name="gridcolumn1"
            classname="col-xs-6"
            styles={{
              root: { padding: 16 },

            }}
          >
            <WmLabel
              caption="Name"
              name="label4"
              styles={{
                root: { paddingRight: 4, paddingLeft: 4 },
                text: {},
              }}
            ></WmLabel>
          </WmGridcolumn>
          <WmGridcolumn
            columnwidth={6}
            name="gridcolumn2"
            classname="col-xs-6"
            styles={{
              root: { padding: 16 },

            }}
          >
            <WmLabel
              caption="Eric"
              name="label5"
              styles={{
                root: { paddingRight: 4, paddingLeft: 4 },
                text: {},
              }}
            ></WmLabel>
          </WmGridcolumn>
        </WmGridrow>
        <WmGridrow name="gridrow2" >
          <WmGridcolumn
            columnwidth={6}
            name="gridcolumn3"
            classname="col-xs-6"
            styles={{
              root: { padding: 16 },

            }}
          >
            <WmLabel
              caption="Title"
              name="label6"
              styles={{
                root: { paddingRight: 4, paddingLeft: 4 },
                text: {},
              }}
            ></WmLabel>
          </WmGridcolumn>
          <WmGridcolumn
            columnwidth={6}
            name="gridcolumn4"
            classname="col-xs-6"
            styles={{
              root: { padding: 16 },

            }}
          >
            <WmLabel
              caption="Engineer"
              name="label7"
              styles={{
                root: { paddingRight: 4, paddingLeft: 4 },
                text: {},
              }}
            ></WmLabel>
          </WmGridcolumn>
        </WmGridrow>
      </WmLayoutgrid>
    </WmDialogcontent>
    <WmDialogactions name="dialogactions1" >
      <WmButton
        caption="Close"
        name="button2"
        onTap={() => {
          onClose();
        }}
        classname="btn-primary"
      ></WmButton>
    </WmDialogactions>
  </View>
);



const DesignDialogWithTrigger = (props: any) => {
  const dialogRef = useRef();

  const openDialog = () => {
    console.log('Opening dialog');
    if (dialogRef.current) {
      dialogRef.current.open();
    }
  };
  const closeDialog = () => {
    console.log('closeing dialog');
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <ModalServiceComponent>
      <View>
        <WmButton
          name="openDialog"
          caption="Open Design Dialog"
          onTap={openDialog}
          classname="btn-primary"
        />
        <WmDialog
          {...props}
          ref={dialogRef}
          onOpened={action("onOpened")}
        >
          <DialogContent onClose={closeDialog} />
        </WmDialog>
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
  title: "Dialogs/Design",
  component: DesignDialogWithTrigger,
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
} satisfies Meta<typeof DesignDialogWithTrigger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DesignDialog: Story = {
  args: {
    name: "designDialog",
    title: "Design Dialog",
    modal: true,
    onOk: action("onOk"),
    onClose: action("onClose"),
    oktext: "Apply",
    iconclass: "wi wi-slideshow",
    closable: true,
    showheader: true,

  },
};

export const CustomDesignDialog: Story = {
  args: {
    ...DesignDialog.args,
    name: "customDesign",
    title: "Custom Design",
    oktext: "Save Design",
    iconclass: "wi wi-palette",

  },
};
