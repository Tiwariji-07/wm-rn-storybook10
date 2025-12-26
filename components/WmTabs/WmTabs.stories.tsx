import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmTabs from "@wavemaker/app-rn-runtime/components/container/tabs/tabs.component";
import WmTabpane from "@wavemaker/app-rn-runtime/components/container/tabs/tabpane/tabpane.component";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";
import { action } from "storybook/actions";

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";

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
            page: Docs,
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
