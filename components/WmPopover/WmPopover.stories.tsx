import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmPopover from "@wavemaker/app-rn-runtime/components/navigation/popover/popover.component";
import WmButton from "@wavemaker/app-rn-runtime/components/basic/button/button.component";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";
import { action } from "storybook/actions";
import { ModalServiceComponent } from "../../services/ModalService";
import { animationNames } from "../../constants/constant";

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
      description: {
        component: `
# WmPopover Component

A popover component that displays content in a floating container relative to a trigger element.

## Features
- Position customization
- Custom trigger element
- Auto-positioning
- Animation support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the popover |
| trigger | ReactNode | - | Element that triggers the popover |
| content | ReactNode | - | Content to display in popover |
| open | boolean | false | Whether popover is open |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the popover is visible |
| enabled | boolean | true | Whether the popover is enabled |
| placement | string | 'bottom' | Placement relative to trigger |
| arrow | boolean | true | Whether to show arrow |

### Layout Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | 'auto' | Width of popover |
| maxWidth | number/string | '300px' | Maximum width |
| maxHeight | number/string | '400px' | Maximum height |
| offset | number | 8 | Offset from trigger |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| contentStyle | object | {} | Custom styles for content |
| arrowStyle | object | {} | Custom styles for arrow |
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
| onOpen | () | Triggered when popover opens |
| onClose | () | Triggered when popover closes |
| onPositionChange | (position) | Triggered when position changes |

## Usage Notes
- Popover can be used for tooltips, menus, or custom content
- Trigger element can be any React node
- Content can be any React node
- Auto-positioning prevents overflow
- The component is fully accessible with proper ARIA attributes
        `
      }
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
