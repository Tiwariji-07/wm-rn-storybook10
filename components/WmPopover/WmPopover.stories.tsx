import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmPopover from "@wavemaker/app-rn-runtime/components/navigation/popover/popover.component";
import WmButton from "@wavemaker/app-rn-runtime/components/basic/button/button.component";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";
import { action } from "storybook/actions";
import { ModalServiceComponent } from "../../services/ModalService";
import { animationNames } from "../../constants/constant";

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";

const style = {
  popoverStyle: {
    width: 200,
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: "#026CB6",
    borderRadius: 4,
    padding: 8,
  },
  buttonTextStyle: {
    color: "white",
  },
  contentStyle: {
    padding: 16,
    height: "100%",
  },
};

const PopoverContent = () => (
  <View style={style.contentStyle}>
    <WmLabel
      name="popoverContent"
      caption="This is popover content. Click outside to close."
    />
  </View>
);


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
  title: "Navigation/Popover",
  component: WmPopover,
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
    iconposition: {
      control: "select",
      options: ["top", , "left", "right"],
    },
    popoverheight: {
      table: {
        disble: true
      }
    },
    popoverwidth: {
      table: {
        disble: true
      }
    },
    autoclose: {
      control: "select",
      options: ["always", "outsideClick", "disabled"],
    },
    contentanimation: {
      control: "select",
      options: animationNames,
    },
    badgevalue: {
      control: {
        type: "number",
      }
    }
  },
} satisfies Meta<typeof WmPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicPopover",
    title: "Basic Popover",
    caption: "Popover",
    iconclass: "wi wi-info",
    iconposition: "left",
    // badgevalue: 0,
    autoclose: "always",
    popoverheight: 200,
    popoverwidth: 200,
    styles: { root: style.popoverStyle },
    onShow: action("onShow"),
    onHide: action("onHide"),
  },
  render: (args) => (
    <WmPopover {...args}>
      <WmButton
        name="popoverTrigger"
        caption="Click me"
        styles={{
          root: style.buttonStyle,
          text: style.buttonTextStyle,
        }}
      />
      <PopoverContent />
    </WmPopover>
  ),
};

export const WithBadgeValue: Story = {
  args: {
    badgevalue: 3,
    ...Basic.args,

  },
  render: (args) => (
    <WmPopover {...args}>
      {/* <WmButton
        name="popoverTrigger"
        caption="Open Right"
        styles={{
          root: style.buttonStyle,
          text: style.buttonTextStyle,
        }}
      /> */}
      <PopoverContent />
    </WmPopover>
  ),
};
