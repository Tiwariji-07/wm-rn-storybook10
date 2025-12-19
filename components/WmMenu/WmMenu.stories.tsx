import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmMenu from "@wavemaker/app-rn-runtime/components/navigation/menu/menu.component";
import { action } from "storybook/actions";
import { ModalServiceComponent } from "../../services/ModalService";

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
  title: "Navigation/Menu",
  component: WmMenu,
  decorators: [
    (Story) => (
      <ModalServiceComponent>
        <View style={{ padding: 16 }}>
          <Story />
        </View>
      </ModalServiceComponent>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    }
  },
} satisfies Meta<typeof WmMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const menuItems = [
  { label: "Home", icon: "wi wi-home" },
  { label: "Profile", icon: "wi wi-person" },
  { label: "Settings", icon: "wi wi-settings" },
  { label: "Logout", icon: "wi wi-power-settings-new" },
];

export const Basic: Story = {
  args: {
    name: "basicMenu",
    caption: "Menu",
    // dataset: menuItems,
    onSelect: action("onSelect"),
    autoclose: "outsideClick"
  },
};

export const WithIcon: Story = {
  args: {
    caption: "Menu",
    name: "iconMenu",
    // dataset: menuItems,
    iconclass: "wi wi-home",
    onSelect: action("onSelect"),
  },
};

export const WithCustomItems: Story = {
  args: {
    name: "selectedMenu",
    caption: "Menu",
    dataset: menuItems,
    onSelect: action("onSelect"),
  },
};

export const WithCustomStyle: Story = {
  args: {
    name: "styledMenu",
    caption: "Menu",
    dataset: menuItems,
    classname: "btn-primary",
    onSelect: action("onSelect"),
  },
};
