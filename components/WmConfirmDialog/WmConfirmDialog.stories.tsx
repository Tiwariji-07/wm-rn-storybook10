import type { Meta, StoryObj } from "@storybook/react";
import React, { useRef, useState } from "react";
import { View, Modal, StyleSheet, Text } from "react-native";
import WmConfirmdialog from '@wavemaker/app-rn-runtime/components/dialogs/confirmdialog/confirmdialog.component';
import WmButton from '@wavemaker/app-rn-runtime/components/basic/button/button.component';
import { action } from "storybook/actions";
import { ModalServiceComponent } from "../../services/ModalService";



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
      description: {
        component: `
# WmConfirmDialog Component

A dialog component that prompts users to confirm an action with customizable content and buttons.

## Features
- Customizable title and message
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
| message | string | '' | Dialog message text |
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
| confirmText | string | 'OK' | Text for confirm button |
| cancelText | string | 'Cancel' | Text for cancel button |
| showCancel | boolean | true | Whether to show cancel button |
| buttonAlignment | string | 'right' | Alignment of buttons |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | '400px' | Width of the dialog |
| height | number/string | 'auto' | Height of the dialog |
| styles | object | {} | Custom styles for the component |
| titleStyle | object | {} | Custom styles for title |
| messageStyle | object | {} | Custom styles for message |
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
| onConfirm | () | Triggered when confirmed |
| onCancel | () | Triggered when cancelled |
| onClose | () | Triggered when dialog is closed |

## Usage Notes
- Dialog can be used to confirm important actions
- Custom content can be added to title and message
- Multiple buttons can be configured
- Dialog can be styled to match application theme
- The component is fully accessible with proper ARIA attributes
        `
      }
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
