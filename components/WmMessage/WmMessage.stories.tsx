import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Text, View } from "react-native";
import WmMessage from "@wavemaker/app-rn-runtime/components/basic/message/message.component";
import { animationNames } from "../../constants/constant";

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

const meta = {
  title: "Basic/Message",
  component: WmMessage,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      page: Docs,
    }
  },
} satisfies Meta<typeof WmMessage>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Basic: Story = {
  args: {
    name: "MessageWidget",
    type: "success",
    caption: "Operation completed successfully!",
  },
  argTypes: {
    type: {
      options: ['success', 'error', 'warning', 'info', 'loading'],
      control: { type: 'select' },
    },
    caption: {
      control: "text",
      name: "Message"
    }
  },

};

const Success: Story = {
  args: {
    name: "successMessage",
    type: "success",
    caption: "Operation completed successfully!",
  },
  argTypes: {
    type: {
      options: ['success', 'error', 'warning', 'info', 'loading'],
      control: { type: 'select' },
    },
  },

};

const Warning: Story = {
  args: {
    name: "warningMessage",
    type: "warning",
    caption: "Please review your input before proceeding.",
  },
  argTypes: {
    type: {
      options: ['success', 'error', 'warning', 'info', 'loading'],
      control: { type: 'select' },
    },
    caption: {
      control: "text",
      name: "Message"
    }
  },
};

const Info: Story = {
  args: {
    name: "infoMessage",
    type: "info",
    caption: "Here's some helpful information.",
  },
  argTypes: {
    type: {
      options: ['success', 'error', 'warning', 'info', 'loading'],
      control: { type: 'select' },
    },
    caption: {
      control: "text",
      name: "Message"
    }
  },

};
const Error: Story = {
  args: {
    name: "errorMessage",
    type: "error",
    caption: "An error occurred. Please try again.",
  },
  argTypes: {
    type: {
      options: ['success', 'error', 'warning', 'info', 'loading'],
      control: { type: 'select' },
    },
    caption: {
      control: "text",
      name: "Message"
    }
  },
};

const Loading: Story = {
  args: {
    name: "iconMessage",
    type: "loading",
    caption: "Please wait...",
    // iconclass: "wi wi-check-circle",
  },
  argTypes: {
    type: {
      options: ['success', 'error', 'warning', 'info', 'loading'],
      control: { type: 'select' },
    },
    caption: {
      control: "text",
      name: "Message"
    }
  },
};

export const Animation: Story = {
  args: {
    name: "MessageAnimation",
    type: "info",
    caption: "Please wait...",
    width: "300px",
    height: "100px",
    animation: "fadeInLeftBig",
    hideclose: false,
    styles: {
      root: {
        width: 300,
      }
    }
  },
  argTypes: {
    type: {
      options: ['success', 'error', 'warning', 'info', 'loading'],
      control: { type: 'select' },
    },
    animation: {
      control: { type: 'select' },
      options: animationNames
    },
    caption: {
      control: "text",
      name: "Message"
    }
  },

};

export const Showcase: Story = {

  render: () => {
    return (

      <View style={{ gap: 32 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Message Types</Text>
        <WmMessage {...Success.args} />
        <WmMessage  {...Error.args} />
        <WmMessage {...Warning.args} />
        <WmMessage  {...Info.args} />
        <WmMessage  {...Loading.args} />
      </View>

    );
  }
}
