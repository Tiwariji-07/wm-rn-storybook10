import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmDatetime from "@wavemaker/app-rn-runtime/components/input/epoch/datetime/datetime.component";
import { action } from "storybook/actions";
import { ModalServiceComponent } from "../../services/ModalService";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { WmTimeService } from "../../services/WmTimeService";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
  title: "Form/Datetime",
  component: WmDatetime,
  decorators: [
    (Story) => (
      <SafeAreaProvider>
        <GestureHandlerRootView>
          <View style={{ padding: 16, width: 260 }}>
            <WmTimeService>
              <Story />
            </WmTimeService>
          </View>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    }
  },
  argTypes: {
    datepattern: {
      control: { type: "select" },
      options: ["yyyy-MM-dd HH:mm:ss", "MM/dd/yyyy HH:mm", "dd/MM/yyyy HH:mm"],
    },
  },
} satisfies Meta<typeof WmDatetime>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicDatetime",
    placeholder: "Select Date & Time",
    onChange: action("onChange"),
    disabled: false,
    locale: "en",
    datepattern: "yyyy-MM-dd HH:mm:ss",
  },
};



export const MinMaxDateTime: Story = {
  args: {
    ...Basic.args,
    name: "constrainedDatetime",
    mindate: new Date(2024, 0, 1, 9, 0).toISOString(), // Jan 1, 2024 9:00 AM
    maxdate: new Date(2024, 11, 31, 17, 0).toISOString(), // Dec 31, 2024 5:00 PM
  },
};
