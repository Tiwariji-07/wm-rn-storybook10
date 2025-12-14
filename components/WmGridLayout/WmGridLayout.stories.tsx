import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmGridcolumn from "@wavemaker/app-rn-runtime/components/container/layoutgrid/gridcolumn/gridcolumn.component";
import WmGridrow from "@wavemaker/app-rn-runtime/components/container/layoutgrid/gridrow/gridrow.component";
import WmLayoutgrid from "@wavemaker/app-rn-runtime/components/container/layoutgrid/layoutgrid.component";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";
import { action } from "storybook/actions";

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
      description: {
        component: `
# WmGridLayout Component

A grid-based layout component that organizes content in rows and columns.

## Features
- Grid-based layout system
- Customizable rows and columns
- Responsive grid design
- Custom styling options
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the grid layout |
| rows | number | 1 | Number of rows in the grid |
| columns | number | 1 | Number of columns in the grid |
| children | ReactNode | - | Child components to render |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the grid is visible |
| enabled | boolean | true | Whether the grid is enabled |
| gap | number | 0 | Gap between grid items |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | - | Width of the grid |
| height | number/string | - | Height of the grid |
| styles | object | {} | Custom styles for the component |
| rowGap | number | 0 | Gap between rows |
| columnGap | number | 0 | Gap between columns |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onPress | () | Triggered when grid is pressed |
| onLayout | (event: LayoutChangeEvent) | Triggered when layout changes |

## Usage Notes
- The grid can be customized with any number of rows and columns
- Custom styling can be applied through the styles prop
- The component is fully accessible with proper ARIA attributes
- Layout changes can be monitored through onLayout event
- Grid visibility and enabled state can be controlled
- Gaps between items can be customized
        `
      }
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
