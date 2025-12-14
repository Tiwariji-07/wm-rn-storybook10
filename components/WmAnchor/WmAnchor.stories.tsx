import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Text, View, Linking } from "react-native";
import WmAnchor from "@wavemaker/app-rn-runtime/components/basic/anchor/anchor.component";
import { action } from "storybook/actions";
import { NavigationServiceProvider } from "@wavemaker/app-rn-runtime/core/navigation.service";



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
      description: {
        component: `
# WmAnchor Component

A versatile link component that supports icons, badges, and various styling options.

## Features
- Internal and external link support
- Icon integration with multiple positions
- Badge support for notifications/counts
- Skeleton loading state
- Custom styling through class names
- Animation support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the anchor component |
| caption | string | 'Link' | Text to display on the anchor |
| hyperlink | string | null | URL to navigate to when clicked |
| target | string | '_blank' | Target window for the link |
| encodeurl | boolean | false | Whether to encode the URL before opening |

### Icon Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| iconclass | string | null | CSS class for the icon |
| iconurl | string | null | URL for a custom icon image |
| iconposition | string | 'left' | Position of the icon ('left', 'right', or 'top') |
| iconheight | string | null | Height of the icon |
| iconwidth | string | null | Width of the icon |
| iconmargin | string | null | Margin around the icon |

### Badge Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| badgevalue | string | null | Value to display in the badge |
| skeletonwidth | string | undefined | Width of the skeleton loading state |
| skeletonheight | string | undefined | Height of the skeleton loading state |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | string | null | Width of the anchor |
| height | string | null | Height of the anchor |
| classname | string | - | CSS class name for styling |
| backgroundcolor | string | - | Background color |
| color | string | - | Text color |
| fontsize | string | '18px' | Font size of the text |

### Animation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animation | string | null | Animation type to apply |
| animationdelay | number | null | Delay before animation starts |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | 'link' | ARIA role |
| hint | string | undefined | Tooltip text |
| nooflines | number | undefined | Maximum number of lines for the caption text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onTap | (e: Event, proxy: ComponentProxy) | Triggered when the anchor is clicked |

## Styling Classes
Available class names for styling:
- \`link-primary\`
- \`link-secondary\`
- \`link-success\`
- \`link-danger\`
- \`link-warning\`
- \`link-info\`
- \`link-muted\`
- \`link-default\`


        `
      }
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