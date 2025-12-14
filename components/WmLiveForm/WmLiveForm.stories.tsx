import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmLiveForm from "@wavemaker/app-rn-runtime/components/data/liveform/liveform.component";
import { action } from "storybook/actions";
import WmText from "@wavemaker/app-rn-runtime/components/input/text/text.component";
import WmNumber from "@wavemaker/app-rn-runtime/components/input/number/number.component";
import WmButton from "@wavemaker/app-rn-runtime/components/basic/button/button.component";

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
      description: {
        component: `
# WmLiveForm Component

A dynamic form component that handles data operations with real-time validation and submission.

## Features
- Dynamic form generation
- Real-time validation
- Data operations (insert, update, delete)
- Custom form fields
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the form |
| title | string | '' | Form title |
| operationtype | string | 'insert' | Type of operation ('insert', 'update', 'delete') |
| children | ReactNode | - | Form field components |

### Data Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| datavariable | string | '' | Variable to store form data |
| defaultdata | object | {} | Default form data |
| validationrules | object | {} | Form validation rules |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the form is visible |
| enabled | boolean | true | Whether the form is enabled |
| showTitle | boolean | true | Whether to show form title |
| showActions | boolean | true | Whether to show action buttons |

### Action Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| submitButtonText | string | 'Submit' | Text for submit button |
| cancelButtonText | string | 'Cancel' | Text for cancel button |
| showCancelButton | boolean | true | Whether to show cancel button |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | - | Width of the form |
| height | number/string | - | Height of the form |
| styles | object | {} | Custom styles for the component |
| fieldStyle | object | {} | Custom styles for form fields |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onSubmit | (data: object) | Triggered when form is submitted |
| onCancel | () | Triggered when form is cancelled |
| onSuccess | (response: any) | Triggered when operation succeeds |
| onError | (error: Error) | Triggered when operation fails |

## Usage Notes
- Form fields can be added as children components
- Validation rules can be defined for each field
- Form data is automatically managed by the component
- Operation type determines the form behavior
- The component is fully accessible with proper ARIA attributes
        `
      }
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
