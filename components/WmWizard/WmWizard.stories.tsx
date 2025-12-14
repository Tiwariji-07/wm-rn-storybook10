import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmWizard from "@wavemaker/app-rn-runtime/components/container/wizard/wizard.component";
import WmWizardstep from "@wavemaker/app-rn-runtime/components/container/wizard/wizardstep/wizardstep.component";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";
import { action } from "storybook/actions";

const style = {
  wizardStyle: {

  },
  stepStyle: {

  },
  contentStyle: {

  },
};

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
      description: {
        component: `
# WmWizard Component

A step-by-step wizard component that guides users through a multi-step process.

## Features
- Multi-step navigation
- Progress tracking
- Custom step content
- Navigation controls
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the wizard |
| steps | array | [] | Array of step configurations |
| currentStep | number | 0 | Index of the current step |
| children | ReactNode | - | Step content components |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the wizard is visible |
| enabled | boolean | true | Whether the wizard is enabled |
| showProgress | boolean | true | Whether to show progress indicator |
| showNavigation | boolean | true | Whether to show navigation buttons |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | - | Width of the wizard |
| height | number/string | - | Height of the wizard |
| styles | object | {} | Custom styles for the component |
| stepStyle | object | {} | Custom styles for steps |
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
| onChange | (step: number) | Triggered when current step changes |
| onComplete | () | Triggered when wizard is completed |
| onCancel | () | Triggered when wizard is cancelled |

## Usage Notes
- Each step can have custom content and validation
- Progress can be tracked through the currentStep prop
- The component is fully accessible with proper ARIA attributes
- Step changes can be monitored through onChange event
- Navigation can be customized or hidden
        `
      }
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
