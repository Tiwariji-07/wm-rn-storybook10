import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmMenu from "@wavemaker/app-rn-runtime/components/navigation/menu/menu.component";
import { action } from "storybook/actions";
import { ModalServiceComponent } from "../../services/ModalService";
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
      description: {
        component: `
# WmMenu Component

A menu component that displays a list of options in a dropdown or popup format.

## Features
- Dropdown and popup menu styles
- Custom menu items
- Icon support
- Keyboard navigation
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the menu |
| items | array | [] | Array of menu items |
| trigger | ReactNode | - | Element that triggers the menu |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | false | Whether the menu is visible |
| enabled | boolean | true | Whether the menu is enabled |
| placement | string | 'bottom' | Menu placement relative to trigger |
| mode | string | 'dropdown' | Menu display mode |

### Layout Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | 'auto' | Width of the menu |
| maxHeight | number/string | '300px' | Maximum height of menu |
| offset | number | 0 | Offset from trigger element |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| itemStyle | object | {} | Custom styles for menu items |
| triggerStyle | object | {} | Custom styles for trigger element |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onSelect | (item) | Triggered when item is selected |
| onOpen | () | Triggered when menu opens |
| onClose | () | Triggered when menu closes |

## Usage Notes
- Menu can be used for navigation or actions
- Items can include icons and submenus
- Keyboard navigation is supported
- Menu can be positioned relative to trigger
- The component is fully accessible with proper ARIA attributes
        `
      }
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
