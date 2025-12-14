import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmTile from "@wavemaker/app-rn-runtime/components/container/tile/tile.component";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";
import WmIcon from "@wavemaker/app-rn-runtime/components/basic/icon/icon.component";
import WmLinearlayout from "@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayout.component";
import WmLinearlayoutitem from '@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayoutitem/linearlayoutitem.component';
import {animationNames} from "../../constants/constant";
const style = {
    containerStyle: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        padding: 20,
    },
    tileStyle: {
        width: 200,
        height: 200,
    },
    labelStyle: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
    iconStyle: {
        color: 'white',
        fontSize: 32,
        marginBottom: 10,
    }
};

const meta = {
    title: "Containers/Tile",
    component: WmTile,
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
# WmTile Component

A tile component that displays content in a card-like format with optional header and footer.

## Features
- Card-like display format
- Optional header and footer
- Custom styling options
- Content organization
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the tile |
| title | string | '' | Title text for the tile |
| children | ReactNode | - | Content to display in the tile |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the tile is visible |
| enabled | boolean | true | Whether the tile is enabled |
| showHeader | boolean | true | Whether to show the header |
| showFooter | boolean | false | Whether to show the footer |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | - | Width of the tile |
| height | number/string | - | Height of the tile |
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
| onPress | () | Triggered when tile is pressed |
| onLayout | (event: LayoutChangeEvent) | Triggered when layout changes |

## Usage Notes
- The tile can have a header, body, and footer section
- Custom styling can be applied to each section
- The component is fully accessible with proper ARIA attributes
- Layout changes can be monitored through onLayout event
- Tile visibility and enabled state can be controlled
                `
            }
        }
    },
    args:{
      width:200,
      height:200,
      classname:"bg-primary",
      backgroundcolor:"",
      backgroundimage:"",
      backgroundsize:"cover",
      backgroundposition:"center",
      backgroundrepeat:"no-repeat",
    },
    argTypes:{
        classname: {
            control:{type:'select'},
            options:['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info','bg-muted']
        },
        animation: {
            control:{type:'select'},
            options:animationNames
        }
    }
} satisfies Meta<typeof WmTile>;

export default meta;
type Story = StoryObj<typeof meta>;

const TileContent = ({ icon, label }: { icon: string; label: string }) => (
    <WmLinearlayout
          direction="row"
          verticalalign="center"
          name="linearlayout2"
          styles={{ root: { height: '100%' }, text: {} }}
          >
          <WmLinearlayoutitem
            name="linearlayoutitem4"
            styles={{
              root: {
                textAlign: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                flexWrap: 'wrap',
              },
              text: { textAlign: 'center' },
            }}
            >
            <WmIcon
              iconclass="wi wi-bar-chart fa-2x"
              name="icon1"
              classname="tile-template-text"
              ></WmIcon>
          </WmLinearlayoutitem>
          <WmLinearlayoutitem
            flexgrow={1}
            name="linearlayoutitem5"
            >
            <WmLinearlayout
              direction="column"
              spacing="10px"
              name="linearlayout3"
              >
              <WmLinearlayoutitem
                name="linearlayoutitem6"
                styles={{
                  root: {
                    textAlign: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    width: '100%',
                  },
                  text: { textAlign: 'center' },
                }}
                >
                <WmLabel
                  caption="title"
                  fontunit="px"
                  name="label4"
                  styles={{
                    root: { textAlign: 'center' },
                    text: { textAlign: 'center' },
                  }}
                  classname="tile-template-text"
                  ></WmLabel>
              </WmLinearlayoutitem>
              <WmLinearlayoutitem
                name="linearlayoutitem7"
                marginTop="10px"
                styles={{
                  root: {
                    textAlign: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    marginTop: 10,
                    width: '100%',
                  },
                  text: { textAlign: 'center' },
                }}
                >
                <WmLabel
                  caption="00"
                  fontunit="px"
                  name="label5"
                  styles={{
                    root: { textAlign: 'center' },
                    text: { textAlign: 'center' },
                  }}
                  classname="tile-template-text"
                  ></WmLabel>
              </WmLinearlayoutitem>
            </WmLinearlayout>
          </WmLinearlayoutitem>
        </WmLinearlayout>
);

export const Basic: Story = {
    args: {
        name: "basicTile",
        styles: { root: style.tileStyle },
    },
    render: (args) => (
        <WmTile {...args}>
            <TileContent icon="fa-solid fa-home" label="Home Tile" />
        </WmTile>
    ),
};

export const Animated: Story = {
    args: {
        name: "animatedTile",
        animation: "fadeIn",
        animationdelay: 200,
        styles: { root: style.tileStyle },
        classname:"bg-primary"

    },
    render: (args) => (
        <WmTile {...args}>
            <TileContent icon="fa-solid fa-bell" label="Notifications" />
        </WmTile>
    ),
};

// export const TileGroup: Story = {
//     render: () => (
//         <View style={style.containerStyle}>
//             {[
//                 { icon: 'fa-solid fa-chart-line', label: 'Analytics' },
//                 { icon: 'fa-solid fa-users', label: 'Team' },
//                 { icon: 'fa-solid fa-folder', label: 'Projects' }
//             ].map((item, index) => (
//                 <WmTile 
//                     key={index}
//                     name={`tile${index + 1}`}
//                     animation="fadeIn"
//                     animationdelay={index * 200}
//         classname="bg-primary"

//                 >
//                     <TileContent icon={item.icon} label={item.label} />
//                 </WmTile>
//             ))}
//         </View>
//     ),
// };
