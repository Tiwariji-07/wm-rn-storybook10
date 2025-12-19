import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmCurrency from "@wavemaker/app-rn-runtime/components/input/currency/currency.component";
import { action } from "storybook/actions";
import { CURRENCY_INFO } from '@wavemaker/app-rn-runtime/core/currency-constants';

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
  title: "Form/Currency",
  component: WmCurrency,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    currency: {
      control: {
        type: "select"
      },
      options: Object.keys(CURRENCY_INFO),
    }
  },
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    }
  }
} satisfies Meta<typeof WmCurrency>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicCurrency",
    placeholder: "Enter amount",
    currency: "USD",
    onChange: action("onChange"),
    styles: {
      root: {
        backgroundColor: '#FFFFFF',
      },
      input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 4,
        paddingHorizontal: 12,
        fontSize: 16,
      },
      currencySymbol: {
        fontSize: 16,
        color: '#757575',
      },
    },
  },
};


export const CustomFormat: Story = {
  args: {
    ...Basic.args,
    fractionsize: 3,
    name: "customFormatCurrency",
  },
};

export const MinMax: Story = {
  args: {
    ...Basic.args,
    minvalue: 0,
    maxvalue: 10000,
    name: "minMaxCurrency",
  },
};

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
    datavalue: "999.99",
    name: "disabledCurrency",
    styles: {
      ...Basic.args.styles,
      input: {
        ...Basic.args.styles.input,
        backgroundColor: '#F5F5F5',
        color: '#9E9E9E',
      },
      currencySymbol: {
        ...Basic.args.styles.currencySymbol,
        color: '#9E9E9E',
      },
    },
  },
};
