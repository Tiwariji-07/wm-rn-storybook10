import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmLinearlayout from "@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayout.component";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";
import WmLinearlayoutitem from '@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayoutitem/linearlayoutitem.component';

const style = {
    layoutStyle: {
        backgroundColor: "#A9B7C5",
        padding: 15,
        width: 600,
        height: 300,
        borderRadius: 8,
        gap: 10
    },
    itemStyle: {
        backgroundColor: '#7C8B9C',
        paddingHorizontal:"60px",
        paddingVertical:"10px",
        borderRadius: 4,
        // minWidth: 100,
    },
    labelStyle: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center'
    }
};

const meta = {
    title: "Containers/LinearLayout",
    component: WmLinearlayout,
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
# WmLinearLayout Component

A layout component that arranges its children in a single row or column.

## Features
- Linear arrangement of components
- Horizontal and vertical orientation
- Customizable spacing
- Custom styling options
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the layout |
| orientation | string | 'horizontal' | Layout direction ('horizontal' or 'vertical') |
| children | ReactNode | - | Child components to render |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the layout is visible |
| enabled | boolean | true | Whether the layout is enabled |
| spacing | number | 0 | Space between child components |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | - | Width of the layout |
| height | number/string | - | Height of the layout |
| styles | object | {} | Custom styles for the component |
| padding | number/string | 0 | Padding around the layout |
| margin | number/string | 0 | Margin around the layout |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onPress | () | Triggered when layout is pressed |
| onLayout | (event: LayoutChangeEvent) | Triggered when layout changes |

## Usage Notes
- Components can be arranged horizontally or vertically
- Custom spacing can be applied between components
- Custom styling can be applied through the styles prop
- The component is fully accessible with proper ARIA attributes
- Layout changes can be monitored through onLayout event
                `
            }
        }
    },
    argTypes: {
        direction: {
            control: { type: "select" },
            options: ["row","row-reverse", "column","column-reverse"],
        },
        horizontalalign: {
            control: { type: "select" },
            options: ["left", "center", "right"],
        },
        verticalalign: {
            control: { type: "select" },
            options: ["top", "center", "bottom"],
        },
    }
} satisfies Meta<typeof WmLinearlayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
    args: {
        name: "horizontalLayout",
        direction: "row",
        horizontalalign: "center",
        verticalalign: "center",
        // spacing: 10,
        styles: { root: style.layoutStyle }
    },
    render: (args) => (
        <WmLinearlayout {...args}>
            {[1, 2, 3].map((num) => (
                <WmLinearlayoutitem key={num} name={`item${num}`} styles={{root: style.itemStyle, text: {}}}>
                    <WmLabel 
                        name={`label${num}`} 
                        caption={`Item ${num}`}
                        styles={{
                            root: style.labelStyle,
                            text: style.labelStyle
                        }} 
                    />
                </WmLinearlayoutitem>
            ))}
        </WmLinearlayout>
    ),
};

export const Vertical: Story = {
    args: {
        name: "verticalLayout",
        direction: "column",
        horizontalalign: "center",
        verticalalign: "top",
        styles: { root: style.layoutStyle }
    },
    render: (args) => (
        <WmLinearlayout {...args}>
            {[1, 2, 3].map((num) => (
                <WmLinearlayoutitem key={num} name={`item${num}`} styles={{root: style.itemStyle, text: {}}}>
                <WmLabel 
                    name={`label${num}`} 
                    caption={`Item ${num}`}
                    styles={{
                        root: style.labelStyle,
                        text: style.labelStyle
                    }} 
                />
            </WmLinearlayoutitem>
            ))}
        </WmLinearlayout>
    ),
};

export const Centered: Story = {
    args: {
        name: "centeredLayout",
        direction: "row",
        horizontalalign: "center",
        verticalalign: "center",
        styles: { 
            root: {
                ...style.layoutStyle,
                height: 200
            }
        }
    },
    render: (args) => (
        <WmLinearlayout {...args}>
            {[1, 2, 3].map((num) => (
                <WmLinearlayoutitem key={num} name={`item${num}`} styles={{root: style.itemStyle, text: {}}}>
                <WmLabel 
                    name={`label${num}`} 
                    caption={`Item ${num}`}
                    styles={{
                        root: style.labelStyle,
                        text: style.labelStyle
                    }} 
                />
            </WmLinearlayoutitem>
            ))}
        </WmLinearlayout>
    ),
};
