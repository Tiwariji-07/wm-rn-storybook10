import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmLinearlayout from "@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayout.component";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";
import WmLinearlayoutitem from '@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayoutitem/linearlayoutitem.component';

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";

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
        paddingHorizontal: "60px",
        paddingVertical: "10px",
        borderRadius: 4,
        // minWidth: 100,
    },
    labelStyle: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center'
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
            page: Docs,
        }
    },
    argTypes: {
        direction: {
            control: { type: "select" },
            options: ["row", "row-reverse", "column", "column-reverse"],
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
                <WmLinearlayoutitem key={num} name={`item${num}`} styles={{ root: style.itemStyle, text: {} }}>
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
                <WmLinearlayoutitem key={num} name={`item${num}`} styles={{ root: style.itemStyle, text: {} }}>
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
                <WmLinearlayoutitem key={num} name={`item${num}`} styles={{ root: style.itemStyle, text: {} }}>
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
