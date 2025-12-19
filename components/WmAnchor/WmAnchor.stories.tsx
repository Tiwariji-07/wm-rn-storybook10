import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Text, View, Linking } from "react-native";
import WmAnchor from "@wavemaker/app-rn-runtime/components/basic/anchor/anchor.component";
import { action } from "storybook/actions";
import { NavigationServiceProvider } from "@wavemaker/app-rn-runtime/core/navigation.service";

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

// Create a mock navigation service
const navigationService = {
  openUrl: (url: string, options?: { target?: string }) => {
    console.log('Opening URL:', url);
    action("openUrl")(url, options);
    Linking.openURL(url).catch(err => console.error('Error opening URL:', err));
  }
};


const meta = {
  title: "Basic/Anchor",
  component: WmAnchor,
  decorators: [
    (Story) => (
      <NavigationServiceProvider value={navigationService}>
        <View style={{ padding: 16 }}>
          <Story />
        </View>
      </NavigationServiceProvider>
    ),
  ],
  args: {
    name: "",
    caption: "",
    hyperlink: "",
    classname: "",
    iconclass: "",
    fontsize: "18px",
    backgroundcolor: "",
    color: ""
  },
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    }
  },
  argTypes: {
    backgroundcolor: {
      control: 'color',
      name: 'bg-color',
    },
    // hyperlink: { 
    //   control: 'text', 
    //   name: 'link-address',  
    // },
    classname: {
      control: {
        type: "select",
      },
      options: ["link-primary", "link-secondary", "link-success", "link-danger", "link-warning", "link-info", "link-muted", "link-default"],
      // name: "link class",
    },
    iconclass: {
      control: {
        type: "select"
      },
      options: ["fa fa-adjust", "fa fa-anchor", "fa fa-archive", "fa fa-area-chart",
        "fa fa-asterisk", "fa fa-at", "fa fa-automobile", "fa fa-balance-scale", "fa fa-bank", "fa fa-bar-chart",],
      // name:"icon class"
    },

  }
} satisfies Meta<typeof WmAnchor>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultStyles = {
  root: {
    padding: 8,
  },
};

export const Basic: Story = {
  args: {
    name: "wavemakerLink",
    caption: "Click me",
    hyperlink: "https://www.wavemaker.com",
    onTap: action("onTap"),
    styles: defaultStyles,
    classname: "link-primary",
  },

};

export const WithIcon: Story = {
  args: {
    name: "iconAnchor",
    caption: "Anchor with icon",
    hint: "Click me!",
    iconclass: "wi wi-dashboard",
    hyperlink: "https://www.wavemaker.com",
    onTap: action("onTap"),
    styles: defaultStyles,
    classname: "link-primary"
  },
};

export const WithBadge: Story = {
  args: {
    name: "badgeAnchor",
    caption: "Anchor with badge",
    hint: "Click me!",
    iconclass: "wi wi-dialer-sip",
    hyperlink: "https://www.wavemaker.com",
    badgevalue: "3",
    styles: defaultStyles,
    classname: "link-primary"
  },
};

export const Showcase: Story = {
  render: () => {
    const variants = [
      {
        title: "Basic Anchors",
        items: [
          {
            ...Basic.args,
            name: "basic1",
            caption: "Basic Link",
          },
          {
            ...Basic.args,
            name: "basic2",
            caption: "Disabled Link",
            disabled: true,
          },
        ],
      },
      {
        title: "Anchors with Icons",
        items: [
          {
            ...WithIcon.args,
            name: "icon1",
            caption: "Twitter",
            iconclass: "wm-sl-l sl-twitter",
          },
          {
            ...WithIcon.args,
            name: "icon2",
            caption: "Youtube",
            iconclass: "wm-sl-l sl-youtube",
          },
        ],
      },
      {
        title: "Anchors with Badges",
        items: [
          {
            ...WithBadge.args,
            name: "badge1",
            caption: "Notification",
            iconclass: "wi wi-bell",
            badgevalue: "3",
          },
          {
            ...WithBadge.args,
            name: "badge2",
            caption: "Messages",
            iconclass: "wi wi-message",
            badgevalue: "5",
          },
        ],
      },
    ];

    return (
      <View style={{ gap: 32 }}>
        {variants.map((section, sectionIndex) => (
          <View key={sectionIndex} style={{ gap: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
              {section.title}
            </Text>
            <View style={{ flexDirection: "row", gap: 24 }}>
              {section.items.map((item, itemIndex) => (
                <WmAnchor key={itemIndex} {...item} />
              ))}
            </View>
          </View>
        ))}
      </View>
    );
  },
};