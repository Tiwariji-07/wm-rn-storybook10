import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmDate from "@wavemaker/app-rn-runtime/components/input/epoch/date/date.component";
import { action } from "storybook/actions";
import { ModalServiceComponent } from "../../services/ModalService";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
  title: "Form/Date",
  component: WmDate,
  decorators: [
    (Story) => (
      <SafeAreaProvider>
        <View style={{ padding: 16, width: 260 }}>
          <ModalServiceComponent>
            <Story />
          </ModalServiceComponent>
        </View>
      </SafeAreaProvider>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    }
  },
} satisfies Meta<typeof WmDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicDate",
    placeholder: "Select Date",
    onChange: action("onChange"),
    locale: "en",
    datepattern: "yyyy-MM-dd",
    disabled: false,
  },
  argTypes: {
    datepattern: {
      control: { type: "select" },
      options: ["yyyy-MM-dd", "MM/dd/yyyy", "dd/MM/yyyy"],
    },
  },
};



export const MinMaxDates: Story = {
  args: {
    ...Basic.args,
    name: "constrainedDate",
    mindate: new Date(2024, 0, 1).toISOString(), // Jan 1, 2024
    maxdate: new Date(2024, 11, 31).toISOString(), // Dec 31, 2024
  },
};

