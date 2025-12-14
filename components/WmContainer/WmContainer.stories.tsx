import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmContainer from "@wavemaker/app-rn-runtime/components/container/container.component";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";
import {animationNames} from "../../constants/constant";
const style = {
  containerStyle: {
    backgroundColor: "#fff",
    width: 300,
    overflow:'hidden',
  },
  labelStyle: {
    color: "#000",
    fontSize: 16,
    padding:12,
  },
};

const meta = {
  title: "Containers/Container",
  component: WmContainer,
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
# WmContainer Component

A layout component that provides a container for grouping and organizing other components.

## Features
- Flexible layout options
- Custom styling
- Responsive design
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the container |
| children | ReactNode | - | Child components to render |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the container is visible |
| enabled | boolean | true | Whether the container is enabled |

### Layout Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| direction | string | 'column' | Layout direction (row/column) |
| justify | string | 'flex-start' | Justify content alignment |
| align | string | 'flex-start' | Align items |
| wrap | string | 'nowrap' | Flex wrap behavior |
| gap | number/string | 0 | Gap between items |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | '100%' | Width of the container |
| height | number/string | 'auto' | Height of the container |
| padding | number/string | 0 | Padding around content |
| margin | number/string | 0 | Margin around container |
| styles | object | {} | Custom styles for the component |
| backgroundColor | string | 'transparent' | Background color |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onPress | () | Triggered when container is pressed |
| onLayout | (event: LayoutChangeEvent) | Triggered when layout changes |

## Usage Notes
- Container can be used to group related components
- Flexible layout options for different screen sizes
- Custom styling can be applied to match design
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  },
  args:{
    backgroundcolor:"",
    backgroundimage:"",
    backgroundsize:"cover",
    backgroundposition:"center",
    backgroundrepeat:"no-repeat"
  },
  argTypes: {
    classname:{
      control:{
        type:'select'
      },
      options:['app-elevated-container','app-outlined-container'],
     
    },
    animation: {
      control:{
        type:'select'
      },
      options:animationNames
    },

  }
} satisfies Meta<typeof WmContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicContainer",
    styles: { root: style.containerStyle },
    width:"200px",
    height:"200px",
    children: [
      <WmLabel
        name="label1"
        caption="Basic Container"
        styles={{
          root: style.labelStyle,
          text: style.labelStyle,
        }}
      />,
    ],
  },
};

// export const ElevatedContainer :Story= {
//     args: {
//         ...Basic.args,
//         classname:"app-elevated-container"
        
//       },
// }

// export const OutlinedContainer :Story= {
//     args: {
//         ...Basic.args,
//         classname:"app-outlined-container"
//       },
// }


const labelText=`Container widget is an empty box for flow content, a collection of more semantically marked-up content that may need to be grouped together with the class, lang and title attributes. It represents its children. The users can either place the content or include the partial pages.

Containers are semantically correct for laying out content. Its most common use will likely be for stylistic purposes — i.e., wrapping some semantically marked-up content in a CSS-styled container.`

export const Scrollable :Story= {
    args: {
        ...Basic.args,
        children: [].concat(...Array(10).fill(<WmLabel
          name="label1"
          caption={labelText}
          styles={{
            root: style.labelStyle,
            text: style.labelStyle,
          }}
        />)),
        scrollable: true,
        styles: {
          ...Basic.args.styles,
          root: {
            ...Basic.args.styles.root,
            height: 400,
          },
        },
    }
}

export const Animated :Story= {
    args: {
        ...Basic.args,
        animation: "fadeIn",
        animationdelay: 500,
        
      },
}