import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmSelect from "@wavemaker/app-rn-runtime/components/input/select/select.component";
import { action } from "storybook/actions";
import { ModalServiceComponent } from "../../services/ModalService";

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";

const style = {
  selectStyle: {
    width: 200,
  },
};

// Sample dataset for supported locales
const supportedLocales = [
  { dataValue: "en", displayValue: "English" },
  { dataValue: "es", displayValue: "Español" },
  { dataValue: "fr", displayValue: "Français" },
  { dataValue: "de", displayValue: "Deutsch" },
  { dataValue: "ja", displayValue: "日本語" },
  { dataValue: "zh", displayValue: "中文" },
];


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
  title: "Form/SelectLocale",
  component: WmSelect,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <ModalServiceComponent>
          <Story />
        </ModalServiceComponent>
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
    datafield: {
      control: {
        type: "select",
      },
      options: [...Object.keys(supportedLocales[0])],
    },
    displayfield: {
      control: {
        type: "select",
      },
      options: [...Object.keys(supportedLocales[0])],
    },
  }

} satisfies Meta<typeof WmSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "selectLocale",
    placeholder: "Select Language",
    dataset: supportedLocales,
    datafield: "dataValue",
    displayfield: "displayValue",
    datavalue: "en",
    classname: "select-locale",
    styles: { root: style.selectStyle },
    onChange: (event, widget, newVal, oldVal) => {
      action("onChange")(newVal);
      // In a real app, this would call:
      // fragment.App.changeLocale(newVal);
      // fragment.App.reload();
    },
  },
};
