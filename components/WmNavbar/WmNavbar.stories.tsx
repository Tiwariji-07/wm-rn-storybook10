import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmNavbar from "@wavemaker/app-rn-runtime/components/navigation/navbar/navbar.component";
import WmNavItem from "@wavemaker/app-rn-runtime/components/navigation/navitem/navitem.component";
import WmAnchor from "@wavemaker/app-rn-runtime/components/basic/anchor/anchor.component";
import { action } from "storybook/actions";

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";

const dataset = [
  { label: "Label 1", link: "www.wavemaker.com", icon: 'wm-sl-r sl-settings', badgevalue: 1 },
  { label: "Label 2", link: "www.wavemaker.com", icon: 'wm-sl-r sl-home', badgevalue: 2 },
  { label: "Label 3", link: "www.wavemaker.com", icon: 'wm-sl-r sl-analytics-bars', badgevalue: 3 },
]
const style = {
  navbarStyle: {
    textAlign: 'right',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    backgroundColor: '#E7E7E7',
  },
  navItemStyle: {
    padding: 8,
  },
  anchorStyle: {
    color: '#026CB6',
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
  title: "Navigation/Navbar",
  component: WmNavbar,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, width: "100%" }}>
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
    type: {
      table: {
        disable: true
      }
    },
    autoclose: {
      table: {
        disable: true
      }
    },
    classname: {
      control: {
        type: "select",
      },
      options: ["stackedNav", "tabNav",],
    },
    layout: {
      table: {
        disable: true,
      }
    },
    dataset: {
      table: {
        disable: false,
      },
      // control: {
      //   type: "object",
      // }
    },

  },
} satisfies Meta<typeof WmNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicNav",
    type: "pills",
    layout: "stacked",
    autoclose: "outsideClick",
    classname: "stackedNav",
    styles: { root: style.navbarStyle },
    getDisplayExpression: (label: string) => label,
  },
  render: (args) => (
    <WmNavbar {...args}>
      {[1, 2, 3].map((num) => (
        <WmNavItem
          key={num}
          name={`nav_item${num}`}
          defaultview="true"
          getDisplayExpression={args.getDisplayExpression}
          styles={{ root: style.navItemStyle }}
        >
          <WmAnchor
            caption={`Link ${num}`}
            name={`anchor${num}`}
            classname="navAnchorItem"
            styles={{ root: style.anchorStyle }}
            onTap={action("onTap")}
          />
        </WmNavItem>
      ))}
    </WmNavbar>
  ),
};

export const TabNav: Story = {
  args: {
    ...Basic.args,
    name: "tabNav",
    type: "tabs",
    layout: "justified",
    classname: "tabNav",
  },
  render: Basic.render,
};

export const NavitemsFromDataset: Story = {
  args: {
    ...Basic.args,
    //dataset with keys: label,link,icon,badge
    dataset: dataset,
    itemlabel: "label",
    itemlink: "link",
    itemicon: "icon",
    itembadge: "badgevalue",
  },
  render: Basic.render,
  argTypes: {
    itemlabel: {
      control: {
        type: "select",
      },
      options: [...Object.keys(dataset[0]), ""],
    },
    itemlink: {
      control: {
        type: "select",
      },
      options: [...Object.keys(dataset[0]), ""],
    },
    itemicon: {
      control: {
        type: "select",
      },
      options: [...Object.keys(dataset[0]), ""],
    },
    itembadge: {
      control: {
        type: "select",
      },
      options: [...Object.keys(dataset[0]), ""],
    },
  }
};