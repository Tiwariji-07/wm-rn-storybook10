import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View, Text } from "react-native";
import WmButton from "@wavemaker/app-rn-runtime/components/basic/button/button.component";
import { action } from "storybook/actions";
import { animationNames } from "../../constants/constant";

const meta = {
  title: "Form/Button",
  component: WmButton,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmButton Component

A versatile button component that supports various styles, icons, animations, and states.

## Features
- Multiple button styles (primary, secondary, success, danger, warning, info, muted, default)
- Icon support with positioning
- Animation support
- Disabled state
- Custom styling through class names
- Background image support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the button |
| caption | string | '' | Text to display on the button |
| disabled | boolean | false | Whether the button is disabled |
| classname | string | 'btn-primary' | CSS class for styling the button |
| defaultClass | string | 'app-button' | Default CSS class applied to the button |

### Icon Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| iconclass | string | null | CSS class for the icon |
| iconposition | string | 'left' | Position of the icon ('left' or 'right') |

### Background Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| backgroundcolor | string | '' | Background color of the button |
| backgroundimage | string | '' | URL of the background image |
| backgroundsize | string | 'cover' | Size of the background image |
| backgroundposition | string | 'center' | Position of the background image |
| backgroundrepeat | string | 'no-repeat' | Repeat behavior of the background image |

### Animation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animation | string | null | Animation type to apply |
| animationdelay | number | null | Delay before animation starts |
| iterationcount | number | undefined | Number of times to repeat the animation |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onTap | (e: Event, proxy: ComponentProxy) | Triggered when the button is clicked |

## Styling Classes
Available button classes:
- \`btn-primary\`
- \`btn-secondary\`
- \`btn-success\`
- \`btn-danger\`
- \`btn-warning\`
- \`btn-info\`
- \`btn-muted\`
- \`btn-default\`
- \`btn-link\`

## Icon Libraries
The button supports icons from multiple libraries:
- Font Awesome (prefix: \`fa fa-\`)
- Wavicon (prefix: \`wi wi-\`)
- Streamline Light (prefix: \`wm-sl-l sl-\`)
- Streamline Regular (prefix: \`wm-sl-r sl-\`)
        `
      }
    }
  },
} satisfies Meta<typeof WmButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    caption: "Basic button",
    disabled: false,
    classname: "btn-primary",
    backgroundcolor: "",
    backgroundimage: "",
    backgroundsize: "cover",
    backgroundposition: "center",
    backgroundrepeat: "no-repeat"
  },
  argTypes: {
    classname: {
      control: {
        type: "select",
      },
      options: [
        "btn-primary",
        "btn-secondary",
        "btn-success",
        "btn-danger",
        "btn-warning",
        "btn-info",
        "btn-muted",
        "btn-default",
      ],
      name: "button Class",
    },
    iconclass: {
      control: {
        type: "select",
      },
      options: ["fa fa-send", "fa fa-at", "fa fa-archive", "fa fa-bar-chart", "wm-sl-l sl-twitter", "wm-sl-l sl-facebook", "wm-sl-l sl-apple"],
      name: "icon",
    },
    iconposition: {
      control: { type: "radio" },
      options: ["left", "right"],
    },
    animation: {
      control: {
        type: "select",
      },
      options: animationNames,
    },

  },
};

// export const Outline: Story = {
//   args: {
//     buttons: [
//       {
//         name: "outlineButton",
//         caption: "outline",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//         classname: "btn-default",
//       },
//       {
//         name: "outlineButton",
//         caption: "With Icon",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//         classname: "btn-default",
//         iconclass: "wi wi-plus",
//       },
//       {
//         name: "outlineButton",
//         caption: "Disabled",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//         classname: "btn-default",
//         iconclass: "wi wi-plus",
//         disabled: true,
//       },
//     ],
//   },
//   render: ({ buttons }) => (
//     <View style={{ gap: 16, flexDirection: "row" }}>
//       {buttons.map((button, index) => (
//         <WmButton key={index} {...button} />
//       ))}
//     </View>
//   ),
// };

// export const Texts: Story = {
//   args: {
//     buttons: [
//       {
//         name: "text buttonButton",
//         caption: "text button",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//       },
//       {
//         name: "text buttonButton",
//         caption: "With Icon",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//         iconclass: "wi wi-plus",
//       },
//       {
//         name: "text buttonButton",
//         caption: "Disabled",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//         iconclass: "wi wi-plus",
//         disabled: true,
//       },
//     ],
//   },
//   render: ({ buttons }) => (
//     <View style={{ gap: 16, flexDirection: "row" }}>
//       {buttons.map((button, index) => (
//         <WmButton key={index} {...button} />
//       ))}
//     </View>
//   ),
// };

// export const Icon: Story = {
//   args: {
//     buttons: [
//       {
//         name: "filledButton",
//         // caption: "With Icon",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//         classname: "btn-primary",
//         iconclass: "wi wi-plus",
//       },
//       {
//         name: "iconButton",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//         iconclass: "wi wi-plus",
//         classname: "btn-default",
//       },
//       {
//         name: "iconButton",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//         iconclass: "wi wi-plus",
//       },
//       {
//         name: "iconButton",
//         onTap: action("onTap"),
//         defaultClass: "app-button",
//         iconclass: "wi wi-plus",
//         disabled: true,
//         classname: "btn-primary",
//       },
//     ],
//   },
//   render: ({ buttons }) => (
//     <View style={{ gap: 16, flexDirection: "row" }}>
//       {buttons.map((button, index) => (
//         <WmButton key={index} {...button} />
//       ))}
//     </View>
//   ),
// };

export const Status: Story = {
  args: {
    buttons: [
      {
        name: "primaryButton",
        caption: "Primary Button",
        onTap: action("onTap"),
        defaultClass: "app-button",
        classname: "btn-primary",
      },
      {
        name: "secondaryButton",
        caption: "Secondary Button",
        classname: "btn-secondary",
        onTap: action("onTap"),
        defaultClass: "app-button",
      },
      {
        name: "successButton",
        caption: "Success Button",
        classname: "btn-success",
        onTap: action("onTap"),
        defaultClass: "app-button",
      },
      {
        name: "dangerButton",
        caption: "Danger Button",
        classname: "btn-danger",
        onTap: action("onTap"),
        defaultClass: "app-button",
      },
      {
        name: "warningButton",
        caption: "Warning Button",
        classname: "btn-warning",
        onTap: action("onTap"),
        defaultClass: "app-button",
      },
      {
        name: "infoButton",
        caption: "Info Button",
        classname: "btn-info",
        onTap: action("onTap"),
        defaultClass: "app-button",
      },
      {
        name: "linkButton",
        caption: "Link Button",
        classname: "btn-link",
        onTap: action("onTap"),
        defaultClass: "app-button",
      },
    ],
  },
  argTypes: {
    buttons: {
      table: {
        disable: true
      }
    }
  },
  render: ({ buttons }) => (
    <View
      style={{
        gap: 16,
        flexDirection: "row",
        flexWrap: "wrap",
        maxWidth: "70vw",
      }}
    >
      {buttons.map((button, index) => (
        <WmButton key={index} {...button} />
      ))}
    </View>
  ),
};

// export const Showcase: Story = {
//   render: () => (
//     <View style={{ gap: 20 }}>
//       <View style={{ gap: 16 }}>
//         <Text style={{ fontSize: 16, fontWeight: "bold" }}>Filled Buttons</Text>
//         <Filled.render {...Filled.args} />
//       </View>
//       <View style={{ gap: 16 }}>
//         <Text style={{ fontSize: 16, fontWeight: "bold" }}>
//           Outline Buttons
//         </Text>
//         <Outline.render {...Outline.args} />
//       </View>
//       <View style={{ gap: 16 }}>
//         <Text style={{ fontSize: 16, fontWeight: "bold" }}>Text Buttons</Text>
//         <Texts.render {...Texts.args} />
//       </View>
//       <View style={{ gap: 16 }}>
//         <Text style={{ fontSize: 16, fontWeight: "bold" }}>Icon Buttons</Text>
//         <Icon.render {...Icon.args} />
//       </View>
//       <View style={{ gap: 16 }}>
//         <Text style={{ fontSize: 16, fontWeight: "bold" }}>
//           Buttons with different status
//         </Text>
//         <Status.render {...Status.args} />
//       </View>
//     </View>
//   ),
// };
