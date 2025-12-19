import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmButtonGroup from "@wavemaker/app-rn-runtime/components/basic/buttongroup/buttongroup.component";
import WmButton from "@wavemaker/app-rn-runtime/components/basic/button/button.component";
import { action } from "storybook/actions";

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
const meta = {
  title: "Form/ButtonGroup",
  component: WmButtonGroup,
  args: {
    children: [
      <WmButton caption="Button 1" onTap={action("Button 1 pressed")} />,
      <WmButton caption="Button 2" onTap={action("Button 2 pressed")} />,
      <WmButton caption="Button 3" onTap={action("Button 3 pressed")} />,
    ],
  },
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
} satisfies Meta<typeof WmButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: [
      <WmButton caption="Button 1" onTap={action("Button 1 pressed")} />,
      <WmButton caption="Button 2" onTap={action("Button 2 pressed")} />,
      <WmButton caption="Button 3" onTap={action("Button 3 pressed")} />,
    ],
  },
};

export const WithIcons: Story = {
  args: {
    children: [
      <WmButton caption="Edit" iconclass="wi wi-edit" onTap={action("Edit pressed")} />,
      <WmButton caption="Delete" iconclass="wi wi-trash" onTap={action("Delete pressed")} />,
      <WmButton caption="Save" iconclass="wi wi-save" onTap={action("Save pressed")} />,
    ],
  },
};

// export const Vertical: Story = {
//   args: {
//     vertical: true,
//     children: [
//       <WmButton caption="Option 1" onTap={action("Option 1 pressed")} />,
//       <WmButton caption="Option 2" onTap={action("Option 2 pressed")} />,
//       <WmButton caption="Option 3" onTap={action("Option 3 pressed")} />,
//     ],
//   },
// };


