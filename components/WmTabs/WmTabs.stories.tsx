import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmTabs from "@wavemaker/app-rn-runtime/components/container/tabs/tabs.component";
import WmTabpane from "@wavemaker/app-rn-runtime/components/container/tabs/tabpane/tabpane.component";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";
import { action } from "storybook/actions";

const style = {
    tabsStyle: {
        backgroundColor: "white",
        width: 400,
        minHeight: '100%'
        // borderRadius: 8,
    },
    paneStyle: {
        padding: 15,
        height: 200
    },
    headerStyle: {
        backgroundColor: '#5A6978',
        padding: 10,
    },
    labelStyle: {
        color: 'white',
        fontSize: 14,
    }
};

const meta = {
    title: "Containers/Tabs",
    component: WmTabs,
    decorators: [
        (Story) => (
            <View style={{ padding: 16, height: 300 }}>
                <Story />
            </View>
        ),
    ],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: `
# WmTabs Component

A tabbed interface component that organizes content into multiple sections.

## Features
- Tabbed navigation interface
- Customizable tab headers
- Content switching
- Custom styling options
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the tabs |
| activeTab | number | 0 | Index of the active tab |
| children | ReactNode | - | Tab content components |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the tabs are visible |
| enabled | boolean | true | Whether the tabs are enabled |
| showIcons | boolean | false | Whether to show icons in tabs |
| showClose | boolean | false | Whether to show close buttons |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | - | Width of the tabs |
| height | number/string | - | Height of the tabs |
| styles | object | {} | Custom styles for the component |
| tabStyle | object | {} | Custom styles for tabs |
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
| onChange | (index: number) | Triggered when active tab changes |
| onClose | (index: number) | Triggered when a tab is closed |

## Usage Notes
- Each tab can have a custom header and content
- Tabs can be styled individually or as a group
- The component is fully accessible with proper ARIA attributes
- Tab changes can be monitored through onChange event
- Tabs can be closed if showClose is enabled
                `
            }
        }
    },
    argTypes: {
        statehandler: {
            table: {
                disable: true,
            }
        },
        defaultpaneindex: {
            control: "text",
            name: 'active tab'
        },
        type: {
            control: "select",
            options: ['static', 'dynamic'],
            table: {
                disable: true,
            }
        }
    }
} satisfies Meta<typeof WmTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        name: "basicTabs",
        // defaultpaneindex: 0, 
        styles: { root: style.tabsStyle },
        type: "static",
        statehandler: "URL",
        // onChange: action("onChange"),
        // enablegestures: true,
    },
    render: (args) => (
        <WmTabs {...args}>
            {[1, 2, 3].map((num) => (
                <WmTabpane
                    key={num}
                    name={`tab${num}`}
                    title={`Tab ${num}`}
                    styles={{
                        root: style.paneStyle,
                    }}
                    memoize={false}
                    // onSelect={action("onSelect")}
                    show={true}
                >
                    <WmLabel
                        name={`content${num}`}
                        caption={`This is the content for Tab ${num}. Click on other tabs to switch content.`}
                    />
                </WmTabpane>
            ))}
        </WmTabs>
    ),
};

export const ScrollableHeader: Story = {
    args: {
        name: "scrollableTabs",
        defaultpaneindex: 1,
        enablescroll: true,
        // enablegestures: true,
        styles: { root: style.tabsStyle },
        // onChange: action("onChange"),
    },
    render: (args) => (
        <WmTabs {...args}>
            {[1, 2, 3, 4, 5, 6].map((num) => (
                <WmTabpane
                    key={num}
                    name={`tab${num}`}
                    title={`Tab ${num}`}
                    styles={{
                        root: style.paneStyle,
                    }}
                    show={true}
                    onSelect={action("onSelect")}
                >
                    <WmLabel
                        name={`content${num}`}
                        caption={`This is the content for Tab ${num}. Tabs are scrollable when there are many.`}
                    />
                </WmTabpane>
            ))}
        </WmTabs>
    ),
};

export const WithIcon: Story = {
    args: {
        ...Basic.args,
        // iconposition:"top",
    },
    argTypes: {
        paneicon: {
            control: {
                type: "select"
            },
            options: ["wi wi-angle-double-right", "wi wi-done-all", "wi wi-language"],
            name: "tab icon"
        },
        // iconposition:{
        //     control:{
        //         type:"select"
        //       },
        //       options:["left","top","right"],
        //       name:"icon position"
        // }
    },
    render: (args) => (
        <WmTabs {...args}>
            {[1, 2, 3].map((num) => (
                <WmTabpane
                    key={num}
                    name={`tab${num}`}
                    title={`Tab ${num}`}
                    styles={{
                        root: style.paneStyle,
                    }}
                    memoize={false}
                    onSelect={action("onSelect")}
                    show={true}
                    paneicon={args.paneicon}
                >
                    <WmLabel
                        name={`content${num}`}
                        caption={`This is the content for Tab ${num}. Click on other tabs to switch content.`}
                    />
                </WmTabpane>
            ))}
        </WmTabs>
    ),
};
