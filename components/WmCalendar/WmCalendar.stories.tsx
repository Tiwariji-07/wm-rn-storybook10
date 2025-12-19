import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmCalendar from "@wavemaker/app-rn-runtime/components/input/calendar/calendar.component";
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
  title: "Form/Calendar",
  component: WmCalendar,
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
} satisfies Meta<typeof WmCalendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicCalendar",
    selectionmode: "multiple",
    // datepattern: "yyyy-MM-dd",
    // placeholder: "Select Date",
    // showweeks: true,
    // outputformat: "yyyy-MM-dd",
    // view: "week",
    onSelect: action("onSelect"),
    // styles: {
    //   root: {
    //     backgroundColor: '#FFFFFF',
    //   },
    // },
  },
};

export const WithDefaultDate: Story = {
  args: {
    ...Basic.args,
    datavalue: '21-02-2025',
    name: "defaultDateCalendar",
  },
};

// export const WithCustomFormat: Story = {
//   args: {
//     ...Basic.args,
//     datepattern: "dd/MM/yyyy",
//     outputformat: "dd/MM/yyyy",
//     name: "customFormatCalendar",
//   },
// };

// export const WithMinMaxDate: Story = {
//   args: {
//     ...Basic.args,
//     mindate: '07-02-2025',
//     maxdate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
//     name: "minMaxCalendar",
//   },
// };

