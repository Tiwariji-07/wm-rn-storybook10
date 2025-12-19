import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TouchableNativeFeedback, View } from "react-native";
import WmTime from "@wavemaker/app-rn-runtime/components/input/epoch/time/time.component";
import { ModalServiceComponent } from "../../services/ModalService";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import ThemeVariables from "@wavemaker/app-rn-runtime/styles/theme.variables";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import WmServiceProvider from "../../services/WmServiceProvider";
import { WmTimeService } from "../../services/WmTimeService";

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: ThemeVariables.INSTANCE.primaryColor,
  },
};

const style = {
  timeStyle: {
    width: 300,
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
  title: "Form/Time",
  component: WmTime,
  decorators: [
    (Story) => (
      // <GestureHandlerRootView style={{ flex: 1 }}>
      // {/* // <PaperProvider theme={theme}> */}
      <WmTimeService>
        <Story />
      </WmTimeService>
      // {/* // </PaperProvider> */}
      // </GestureHandlerRootView>
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
      control: "text",
    },
    placeholder: {
      control: "text",
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
  },
} satisfies Meta<typeof WmTime>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
  name: "basicTime",
  placeholder: "Select Time from",
  datepattern: "HH:mm",
  locale: "en",
};

export const Basic: Story = {
  args: {
    ...defaultProps,
    name: "basicTime",
    placeholder: "Select time",
    datepattern: "hh:mm a",
    datavalue: "14:30",
    disabled: false,
    required: true,
    styles: { root: style.timeStyle },
    mode: "time",
    locale: "en",
    onChange: (event: any, widget: any, newVal: any, oldVal: any) => {
      console.log("Time changed:", { newVal, oldVal });
    },
  },
};


export const CustomFormat: Story = {
  args: {
    ...defaultProps,
    name: "customFormatTime",
    datepattern: "hh:mm a",
    outputformat: "hh:mm a",
    datavalue: "02:30 PM",
    is24hour: false,
    styles: { root: style.timeStyle },
  },
};


