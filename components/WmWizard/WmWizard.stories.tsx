import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmWizard from "@wavemaker/app-rn-runtime/components/container/wizard/wizard.component";
import WmWizardstep from "@wavemaker/app-rn-runtime/components/container/wizard/wizardstep/wizardstep.component";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";
import { action } from "storybook/actions";

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";

const style = {
  wizardStyle: {

  },
  stepStyle: {

  },
  contentStyle: {

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
  title: "Containers/Wizard",
  component: WmWizard,
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
    classname: {
      control: {
        type: "select",
      },
      options: ["number", "number vertical", "iconstepper", "classic"],
    },
    actionsalignment: {
      control: {
        type: "select",
      },
      options: ["left", "right"],
      name: "action align"
    },
    cancelable: {
      control: {
        type: "boolean",
      },
    },
    defaultstep: {
      control: {
        type: "select",
      },
      options: ["step1", "step2", "step3"],
      name: "active step"
    },
    stepstyle: {
      table: {
        disable: true,
      }
    }
  },
} satisfies Meta<typeof WmWizard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicWizard",
    // styles: { root: style.wizardStyle },
    classname: "number vertical",
    defaultstep: "step1",
    actionsalignment: "right",
    previousbtnlabel: "Previous",
    nextbtnlabel: "Next",
    donebtnlabel: "Done",
    cancelbtnlabel: "Cancel",
    cancelable: false,
    stepstyle: "justified",
    onChange: action("onChange"),
  },
  render: (args) => (
    <WmWizard {...args}>
      {[1, 2, 3].map((num) => (
        <WmWizardstep
          key={num}
          index={num - 1}
          name={`step${num}`}
          title={`Step ${num}`}
          styles={{
            root: style.stepStyle,
          }}
        //   iconclass="wi wi-person"
        // doneiconclass="wi wi-done"
        >
          <View style={{ height: 200, padding: 16 }}>
            <WmLabel
              name={`content${num}`}
              caption={`This is the content for Step ${num}. Click Next/Previous to navigate through steps.`}
            />
          </View>
        </WmWizardstep>
      ))}
    </WmWizard>
  ),

};

export const WithIcon: Story = {
  args: {
    ...Basic.args,
    classname: "classic",
    defaultstep: "step2",
  },
  render: (args) => (
    <WmWizard {...args}>
      {[1, 2, 3].map((num) => (
        <WmWizardstep
          key={num}
          index={num - 1}
          name={`step${num}`}
          //   title={`Step ${num}`}
          iconclass="wi wi-person"
          doneiconclass="wi wi-done"
          styles={{
            root: style.stepStyle,
          }}
        >
          <View style={{ height: 200, padding: 16 }}>
            <WmLabel
              name={`content${num}`}
              caption={`This is the content for Step ${num}. Click Next/Previous to navigate through steps.`}
            />
          </View>

        </WmWizardstep>
      ))}
    </WmWizard>
  ),
};
