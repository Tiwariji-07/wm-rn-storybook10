import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmAccordion from "@wavemaker/app-rn-runtime/components/container/accordion/accordion.component";
import WmAccordionpane from "@wavemaker/app-rn-runtime/components/container/accordion/accordionpane/accordionpane.component";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";

const style = {
  labelStyle: {
    color: "#000",
    // fontSize: 14,
  },
  labelWrapper:{
    padding:20,
    background:"rgb(206 206 206 / 64%)"
  }
};

const meta = {
  title: "Containers/Accordion",
  component: WmAccordion,
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
# WmAccordion Component

A collapsible content panel component that displays a list of expandable/collapsible sections.

## Features
- Expandable/collapsible sections
- Custom section headers
- Icon support
- Animation support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the accordion |
| sections | array | [] | Array of section objects |
| activeSections | array | [] | Array of active section indices |
| multipleExpand | boolean | false | Allow multiple sections to be expanded |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the accordion is visible |
| enabled | boolean | true | Whether the accordion is enabled |
| showIcons | boolean | false | Whether to show icons in headers |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | - | Width of the accordion |
| height | number/string | - | Height of the accordion |
| styles | object | {} | Custom styles for the component |
| headerStyle | object | {} | Custom styles for headers |
| contentStyle | object | {} | Custom styles for content |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onChange | (index: number) | Triggered when a pane is opened/closed |

## Usage Notes
- Each pane can have a custom header and content
- Panes can be styled individually or as a group
- The component is fully accessible with proper ARIA attributes
- Pane state changes can be monitored through onChange event
- Icons can be added to pane headers
        `
      }
    }
  },
  argTypes: {
    closeothers: {
      control: {
        type: "boolean",
      },
      name:"collapse other"
    },
  }
} satisfies Meta<typeof WmAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const AccordionContent = ({ num }: { num: number }) => (
  <WmLabel
    name={`content${num}`}
    caption={`This is the content for Section ${num}. Click on other sections to expand/collapse them.`}
    styles={{
      root: style.labelWrapper,
      text: style.labelStyle,
    }}
  />
);

export const Basic: Story = {
  args: {
    // defaultpaneindex: 0,
    name: "basicAccordion",
    closeothers: true,
  },
  render: (args) => (
    <WmAccordion {...args}>
      {[1, 2, 3].map((num) => (
        <WmAccordionpane
          key={num}
          name={`pane${num}`}
          title={`Section ${num}`}
        >
          <AccordionContent num={num} />
        </WmAccordionpane>
      ))}
    </WmAccordion>
  ),
};



const icons=['wm-sl-r sl-home','wm-sl-r sl-analytics-bars','wm-sl-r sl-settings']
export const WithIcon: Story = {
  args: {
    ...Basic.args,
    name: "animatedAccordion",
    closeothers: true,
  },
  render: (args) => (
    <WmAccordion {...args}>
      {[1, 2, 3].map((num) => (
        <WmAccordionpane
          key={num}
          name={`pane${num}`}
          title={`Section ${num}`}
          // styles={defaultPaneStyles}
          iconclass={icons[num-1]}
        >
          <AccordionContent num={num} />
        </WmAccordionpane>
      ))}
    </WmAccordion>
  ),
};

export const WithBadge: Story = {
  args: {
    ...Basic.args,
    name: "animatedAccordion",
    closeothers: true,
    badgevalue: "2",
    // badgetype: "success",
  },
  argTypes: {
    badgetype: {
      control: {
        type: "select",
      },
      options: ["primary","default", "info", "success", "warning", "danger"],
    }  
  },
  render: (args) => (
    <WmAccordion {...args}>
      {[1, 2, 3].map((num) => (
        <WmAccordionpane
          key={num}
          name={`pane${num}`}
          title={`Section ${num}`}
          badgevalue={args.badgevalue}
          badgetype={args.badgetype}
        >
          <AccordionContent num={num} />
        </WmAccordionpane>
      ))}
    </WmAccordion>
  ),
};
