import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmPanel from "@wavemaker/app-rn-runtime/components/container/panel/panel.component";
import WmPanelContent from "@wavemaker/app-rn-runtime/components/container/panel/panel-content/panel-content.component";
import WmPanelFooter from "@wavemaker/app-rn-runtime/components/container/panel/panel-footer/panel-footer.component";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";

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
  title: "Containers/Panel",
  component: WmPanel,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, minWidth: 500 }}>
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
    iconclass: {
      control: {
        type: "select"
      },
      options: ["wi wi-verified-user", "wi wi-account-circle", "fa fa-user"],
      name: "icon class"
    },
  },
} satisfies Meta<typeof WmPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    subheading: "subheading",
    //   autoclose:"outsideClick",
    title: "Title",
    name: "panel1",
    iconclass: "wi wi-account-circle",
    collapsible: false,


  },

  render: (args) => (
    <WmPanel {...args}>
      <WmPanelContent name="panel1_content"></WmPanelContent>
      <WmPanelFooter name="panel_footer1">
        <WmLabel
          caption="Addition Info"
          name="label3"
          styles={{ root: { paddingRight: 4, paddingLeft: 4 }, text: {} }}
          classname="text-muted"
        ></WmLabel>
      </WmPanelFooter>
    </WmPanel>
  ),
};



// export const WithIcon: Story = {
//   args: {
//     ...Basic.args,
//     name: "iconPanel",
//     iconclass: "wi wi-star",
//   },
//   render: (args) => <Basic.render {...args} />,
// };

export const Badge: Story = {
  args: {
    // ...Basic.args,
    name: "badgePanel",
    badgevalue: "2",
    iconclass: "fa fa-user"
  },
  argTypes: {
    badgetype: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "success", "danger", "warning", "info"],
    },
  },
  render: (args) => (
    <View style={{ gap: 10, flexWrap: "wrap", justifyContent: "center" }}>

      <Basic.render {...{ ...args }} />

    </View>
  ),
};


