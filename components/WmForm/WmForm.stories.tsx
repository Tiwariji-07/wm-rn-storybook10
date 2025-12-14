import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmForm from "@wavemaker/app-rn-runtime/components/data/form/form.component";
import { action } from "storybook/actions";
import { Template1, Template2 } from "../../templates/form/Template1";
import { ModalServiceComponent } from "../../services/ModalService";
import { Users } from "../../constants/constant";
import { FloatingTemplate } from "../../templates/form/FloatingTemplate";

// Sample dataset
const userDataset = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1-234-567-8900",
  address: "123 Main St, City, Country",
};

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
      description: {
        component: `
# WmForm Component

A form component that provides a container for form elements with validation and submission capabilities.

## Features
- Form validation
- Form submission
- Custom styling
- Responsive layout
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the form |
| children | ReactNode | - | Form elements |
| initialValues | object | {} | Initial form values |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the form is visible |
| enabled | boolean | true | Whether the form is enabled |
| loading | boolean | false | Whether the form is loading |

### Validation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| validateOnChange | boolean | true | Whether to validate on change |
| validateOnBlur | boolean | true | Whether to validate on blur |
| validateOnSubmit | boolean | true | Whether to validate on submit |
| validationSchema | object | {} | Validation schema |

### Layout Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| direction | string | 'column' | Layout direction |
| gap | number/string | 16 | Gap between form elements |
| padding | number/string | 16 | Padding around form |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | '100%' | Width of the form |
| height | number/string | 'auto' | Height of the form |
| styles | object | {} | Custom styles for the component |
| labelStyle | object | {} | Custom styles for labels |
| inputStyle | object | {} | Custom styles for inputs |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onSubmit | (values) | Triggered when form is submitted |
| onReset | () | Triggered when form is reset |
| onValuesChange | (values) | Triggered when form values change |

## Usage Notes
- Form can contain any number of form elements
- Validation can be customized
- Form submission can be handled
- Custom styling can be applied
- The component is fully accessible with proper ARIA attributes
        `
      }
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
