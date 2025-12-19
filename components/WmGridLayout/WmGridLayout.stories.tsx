import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmGridcolumn from "@wavemaker/app-rn-runtime/components/container/layoutgrid/gridcolumn/gridcolumn.component";
import WmGridrow from "@wavemaker/app-rn-runtime/components/container/layoutgrid/gridrow/gridrow.component";
import WmLayoutgrid from "@wavemaker/app-rn-runtime/components/container/layoutgrid/layoutgrid.component";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";
import { action } from "storybook/actions";

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";

const style = {
  gridStyle: {
    backgroundColor: "#A9B7C5",
    padding: 5,
    width: 500,
    borderStyle: "dotted",
  },
  columnStyle: {
    height: 25,
    backgroundColor: "#475B71",
    border: "1px solid black",
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  columnLabelStyle: {
    color: "white",
  },
};
const LayoutContent = (col1: number, col2: number, col3: number, col4: number) => {
  return (<>

    <WmGridrow name="gridrow1">
      <WmGridcolumn
        columnwidth={col1}
        name="gridcolumn1"
        styles={{ root: style.columnStyle, text: {} }}
      >
        <WmLabel
          name="label1"
          caption="Column 1"
          styles={{
            root: style.columnLabelStyle,
            text: style.columnLabelStyle,
          }}
        ></WmLabel>
      </WmGridcolumn>
      <WmGridcolumn
        columnwidth={col2}
        name="gridcolumn2"
        styles={{ root: style.columnStyle, text: {} }}
      >
        <WmLabel
          name="label1"
          caption="Column 2"
          styles={{
            root: style.columnLabelStyle,
            text: style.columnLabelStyle,
          }}
        ></WmLabel>
      </WmGridcolumn>
    </WmGridrow>
    <WmGridrow name="gridrow2">
      <WmGridcolumn
        columnwidth={col3}
        name="gridcolumn3"
        styles={{ root: style.columnStyle, text: {} }}
      >
        <WmLabel
          name="label1"
          caption="Column 3"
          styles={{
            root: style.columnLabelStyle,
            text: style.columnLabelStyle,
          }}
        ></WmLabel>
      </WmGridcolumn>
      <WmGridcolumn
        columnwidth={col4}
        name="gridcolumn4"
        styles={{ root: style.columnStyle, text: {} }}
      >
        <WmLabel
          name="label1"
          caption="Column 4"
          styles={{
            root: style.columnLabelStyle,
            text: style.columnLabelStyle,
          }}
        ></WmLabel>
      </WmGridcolumn>
    </WmGridrow>
  </>
  );
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
  title: "Containers/GridLayout",
  component: WmLayoutgrid,
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
} satisfies Meta<typeof WmLayoutgrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    styles: { root: style.gridStyle, text: {} },
    children: LayoutContent(8, 4, 4, 8),
  },
  // render: (args) => (
  //   args.columns ? (

  //   ) : 
  //     <LayoutContent />

  // )
};
