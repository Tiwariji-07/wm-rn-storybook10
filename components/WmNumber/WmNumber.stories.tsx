import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmNumber from "@wavemaker/app-rn-runtime/components/input/number/number.component";
import { action } from "storybook/actions";

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";

const style = {
  numberStyle: {
    width: 200,
  },
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
  title: "Form/Number",
  component: WmNumber,
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
    placeholder: {
      control: "text",
    },
    maxvalue: {
      control: "number",
    },
    minvalue: {
      control: "number",
    },
    // step: {
    //   control: "number",
    // },
    datavalue: {
      control: "number",
    },
    disabled: {
      control: "boolean",
    },
    readonly: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    regexp: {
      control: "text",
    }
  },
} satisfies Meta<typeof WmNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicNumber",
    placeholder: "Enter a number",
    styles: { root: style.numberStyle },
    onChange: action("onChange"),
  },
};

export const WithMinMax: Story = {
  args: {
    name: "minMaxNumber",
    placeholder: "Enter number (0-100)",
    minvalue: 0,
    maxvalue: 100,
    styles: { root: style.numberStyle },
    onChange: action("onChange"),
  },
};

// export const WithStep: Story = {
//   args: {
//     name: "stepNumber",
//     placeholder: "Step by 5",
//     step: 5,
//     minvalue: 0,
//     maxvalue: 100,
//     showcontrols: true,
//     styles: { root: style.numberStyle },
//     onChange: action("onChange"),
//   },
// };

export const WithRegex: Story = {
  args: {
    name: "defaultNumber",
    placeholder: "enter a 3 digit number",
    //regex for phone number
    regexp: "[0-9]{3}",
    // datavalue: 42,
    styles: { root: style.numberStyle },
    onChange: action("onChange"),
  },
};

// export const Disabled: Story = {
//   args: {
//     name: "disabledNumber",
//     placeholder: "Disabled input",
//     disabled: true,
//     styles: { root: style.numberStyle },
//     onChange: action("onChange"),
//   },
// };

// export const ReadOnly: Story = {
//   args: {
//     name: "readOnlyNumber",
//     placeholder: "Read only input",
//     datavalue: 42,
//     readonly: true,
//     styles: { root: style.numberStyle },
//     onChange: action("onChange"),
//   },
// };

// export const Required: Story = {
//   args: {
//     name: "requiredNumber",
//     placeholder: "Required input",
//     required: true,
//     styles: { root: style.numberStyle },
//     onChange: action("onChange"),
//   },
// };
