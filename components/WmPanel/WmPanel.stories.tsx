import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmPanel from "@wavemaker/app-rn-runtime/components/container/panel/panel.component";
import WmPanelContent from "@wavemaker/app-rn-runtime/components/container/panel/panel-content/panel-content.component";
import WmPanelFooter from "@wavemaker/app-rn-runtime/components/container/panel/panel-footer/panel-footer.component";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";



const meta = {
  title: "Containers/Panel",
  component: WmPanel,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 ,minWidth:500}}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmPanel Component

A container component that provides a bordered panel with optional header and footer sections.

## Features
- Panel container with borders
- Optional header and footer sections
- Custom styling options
- Child component support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the panel |
| title | string | '' | Title text for the panel header |
| children | ReactNode | - | Child components to render |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the panel is visible |
| enabled | boolean | true | Whether the panel is enabled |
| showHeader | boolean | true | Whether to show the header section |
| showFooter | boolean | false | Whether to show the footer section |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | - | Width of the panel |
| height | number/string | - | Height of the panel |
| styles | object | {} | Custom styles for the component |
| headerStyle | object | {} | Custom styles for the header |
| footerStyle | object | {} | Custom styles for the footer |
| bodyStyle | object | {} | Custom styles for the body |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onPress | () | Triggered when panel is pressed |
| onLayout | (event: LayoutChangeEvent) | Triggered when layout changes |

## Usage Notes
- The panel can have a header, body, and footer section
- Custom styling can be applied to each section
- The component is fully accessible with proper ARIA attributes
- Layout changes can be monitored through onLayout event
- Panel visibility and enabled state can be controlled
        `
      }
    }
  },
  argTypes:{
    iconclass:{
      control:{
        type:"select"
      },
      options:["wi wi-verified-user","wi wi-account-circle","fa fa-user"],
      name:"icon class"
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
    iconclass:"wi wi-account-circle",
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
    iconclass:"fa fa-user"
  },
  argTypes:{
    badgetype: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "success", "danger", "warning", "info"],
    },
  },
  render: (args) => (
    <View style={{ gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
      
        <Basic.render {...{ ...args}} />

    </View>
  ),
};


