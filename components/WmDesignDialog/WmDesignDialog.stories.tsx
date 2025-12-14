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
      description: {
        component: `
# WmDesignDialog Component

A customizable dialog component that provides a design-friendly interface for displaying content and user interactions.

## Features
- Customizable content
- Multiple button options
- Custom styling
- Animation support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the dialog |
| title | string | '' | Dialog title text |
| content | ReactNode | - | Dialog content |
| open | boolean | false | Whether the dialog is open |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the dialog is visible |
| enabled | boolean | true | Whether the dialog is enabled |
| showClose | boolean | true | Whether to show close button |
| showBackdrop | boolean | true | Whether to show backdrop |

### Button Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| primaryButtonText | string | 'OK' | Text for primary button |
| secondaryButtonText | string | 'Cancel' | Text for secondary button |
| showSecondaryButton | boolean | true | Whether to show secondary button |
| buttonAlignment | string | 'right' | Alignment of buttons |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | '500px' | Width of the dialog |
| height | number/string | 'auto' | Height of the dialog |
| styles | object | {} | Custom styles for the component |
| titleStyle | object | {} | Custom styles for title |
| contentStyle | object | {} | Custom styles for content |
| buttonStyle | object | {} | Custom styles for buttons |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onPrimaryButtonClick | () | Triggered when primary button is clicked |
| onSecondaryButtonClick | () | Triggered when secondary button is clicked |
| onClose | () | Triggered when dialog is closed |

## Usage Notes
- Dialog can be used to display important information
- Custom content can be added
- Multiple buttons can be configured
- Dialog can be styled to match application theme
- The component is fully accessible with proper ARIA attributes
        `
      }
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
