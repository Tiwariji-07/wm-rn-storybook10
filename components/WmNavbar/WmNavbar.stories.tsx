import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmNavbar from "@wavemaker/app-rn-runtime/components/navigation/navbar/navbar.component";
import WmNavItem from "@wavemaker/app-rn-runtime/components/navigation/navitem/navitem.component";
import WmAnchor from "@wavemaker/app-rn-runtime/components/basic/anchor/anchor.component";
import { action } from "storybook/actions";

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
      description: {
        component: `
# WmNavbar Component

A navigation bar component that provides a responsive header with navigation items and branding.

## Features
- Responsive design
- Custom branding
- Navigation items
- Search functionality
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the navbar |
| brand | ReactNode | - | Brand/logo element |
| items | array | [] | Array of navigation items |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the navbar is visible |
| enabled | boolean | true | Whether the navbar is enabled |
| fixed | boolean | false | Whether navbar is fixed at top |
| transparent | boolean | false | Whether navbar is transparent |

### Layout Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| height | number/string | '64px' | Height of the navbar |
| padding | number/string | '0 16px' | Padding around navbar content |
| justify | string | 'space-between' | Justify content alignment |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| brandStyle | object | {} | Custom styles for brand element |
| itemStyle | object | {} | Custom styles for navigation items |
| backgroundColor | string | '#fff' | Background color |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onItemClick | (item) | Triggered when item is clicked |
| onBrandClick | () | Triggered when brand is clicked |
| onSearch | (query) | Triggered when search is performed |

## Usage Notes
- Navbar can be used for main navigation
- Brand element can be customized
- Navigation items can include icons
- Search functionality can be added
- The component is fully accessible with proper ARIA attributes
        `
      }
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