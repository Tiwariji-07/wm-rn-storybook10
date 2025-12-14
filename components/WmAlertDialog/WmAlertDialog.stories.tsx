import type { Meta, StoryObj } from "@storybook/react";
import React, { useRef } from "react";
import { View } from "react-native";
import WmAlertdialog from "@wavemaker/app-rn-runtime/components/dialogs/alertdialog/alertdialog.component";
import WmButton from "@wavemaker/app-rn-runtime/components/basic/button/button.component";
import { action } from "storybook/actions";
import { ModalServiceComponent } from "../../services/ModalService";

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
      description: {
        component: `
# WmAlertDialog Component

A modal dialog component that displays alert messages with different severity levels.

## Features
- Multiple alert types (error, information, success, warning)
- Customizable content
- Action buttons
- Animation support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the dialog |
| title | string | '' | Title of the alert |
| message | string | '' | Alert message content |
| alerttype | string | 'information' | Type of alert ('error', 'information', 'success', 'warning') |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | false | Whether the dialog is visible |
| enabled | boolean | true | Whether the dialog is enabled |
| showIcon | boolean | true | Whether to show alert type icon |
| showClose | boolean | true | Whether to show close button |

### Action Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| okButtonText | string | 'OK' | Text for the OK button |
| cancelButtonText | string | 'Cancel' | Text for the Cancel button |
| showCancelButton | boolean | false | Whether to show Cancel button |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | - | Width of the dialog |
| height | number/string | - | Height of the dialog |
| styles | object | {} | Custom styles for the component |
| headerStyle | object | {} | Custom styles for the header |
| contentStyle | object | {} | Custom styles for the content |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onOk | () | Triggered when OK button is clicked |
| onCancel | () | Triggered when Cancel button is clicked |
| onClose | () | Triggered when dialog is closed |

## Usage Notes
- Different alert types have different visual styles
- Custom content can be added through children prop
- The component is fully accessible with proper ARIA attributes
- Dialog state can be controlled through visible prop
- Action buttons can be customized or hidden
        `
      }
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
