import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Text, View } from "react-native";
import WmMessage from "@wavemaker/app-rn-runtime/components/basic/message/message.component";
import { animationNames } from "../../constants/constant";

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
      description: {
        component: `
# WmMessage Component

A versatile message component that supports various types of notifications and alerts.

## Features
- Multiple message types (success, error, warning, info, loading)
- Animation support
- Customizable styling
- Close button option
- Icon support
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the message |
| type | string | 'info' | Type of message ('success', 'error', 'warning', 'info', 'loading') |
| caption | string | '' | Text content of the message |
| hideclose | boolean | false | Whether to hide the close button |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | string | '300px' | Width of the message container |
| height | string | 'auto' | Height of the message container |
| styles | object | {} | Custom styles for the component |

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

## Message Types
- \`success\`: Green message for successful operations
- \`error\`: Red message for error notifications
- \`warning\`: Yellow message for warning alerts
- \`info\`: Blue message for information
- \`loading\`: Gray message with loading indicator

## Usage Notes
- Each message type has its own default styling and icon
- Messages can be animated using the animation prop
- The close button can be hidden using hideclose prop
- Custom styling can be applied through the styles prop
- The component is fully accessible with proper ARIA attributes


        `
      }
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
   caption:{
    control:"text",
    name:"Message"
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
   caption:{
    control:"text",
    name:"Message"
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
   caption:{
    control:"text",
    name:"Message"
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
   caption:{
    control:"text",
    name:"Message"
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
   caption:{
    control:"text",
    name:"Message"
   }
  },
};

 export const Animation: Story = {
  args: {
    name: "MessageAnimation",
    type: "info",
    caption: "Please wait...",
    width:"300px",
    height:"100px",
    animation:"fadeInLeftBig",
    hideclose:false,
    styles:{root:{
      width:300,
    }}
  },
  argTypes: {    
    type: {      
      options: ['success', 'error', 'warning', 'info', 'loading'],      
      control: { type: 'select' },    
   }, 
   animation :{
    control: { type: 'select' },
    options:animationNames
  } ,
  caption:{
    control:"text",
    name:"Message"
   }  
  },
 
};

 export const Showcase: Story = {
  
  render: () => {
    return (
      
        <View style={{gap:32}}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Message Types</Text>
        <WmMessage {...Success.args} />
        <WmMessage  {...Error.args}/>
        <WmMessage {...Warning.args}/>
        <WmMessage  {...Info.args}/>
        <WmMessage  {...Loading.args}/>
        </View>
      
    );
  }
}
