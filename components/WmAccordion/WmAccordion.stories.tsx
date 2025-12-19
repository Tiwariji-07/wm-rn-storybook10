import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmAccordion from "@wavemaker/app-rn-runtime/components/container/accordion/accordion.component";
import WmAccordionpane from "@wavemaker/app-rn-runtime/components/container/accordion/accordionpane/accordionpane.component";
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

const style = {
  labelStyle: {
    color: "#000",
    // fontSize: 14,
  },
  labelWrapper: {
    padding: 20,
    background: "rgb(206 206 206 / 64%)"
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
      page: Docs,
    }
  },
  argTypes: {
    closeothers: {
      control: {
        type: "boolean",
      },
      name: "collapse other"
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



const icons = ['wm-sl-r sl-home', 'wm-sl-r sl-analytics-bars', 'wm-sl-r sl-settings']
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
          iconclass={icons[num - 1]}
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
      options: ["primary", "default", "info", "success", "warning", "danger"],
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
