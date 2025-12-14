import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import WmChips from "@wavemaker/app-rn-runtime/components/input/chips/chips.component";
import { action } from "storybook/actions";

const sampleDataset = [
  { label: "React", value: "react" },
  { label: "Angular", value: "angular" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Next.js", value: "nextjs" },
];

const ChipsWrapper = (props: any) => {
  const chipsRef = useRef<any>();

  useEffect(() => {
    // Force update after mount
    if (chipsRef.current) {
      chipsRef.current.setDataItems(props.dataset, { dataValue: props.datavalue });
      chipsRef.current.updateDefaultQueryModel();
    }
  }, []);

  return <WmChips {...props} ref={chipsRef} />;
};

const meta = {
  title: "Form/Chips",
  component: ChipsWrapper,
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
# WmChips Component

A component that displays a set of interactive chips/tags with customizable styling and behavior.

## Features
- Multiple chip selection
- Custom styling
- Icon support
- Deletable chips
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the chips |
| value | array | [] | Array of selected chips |
| options | array | [] | Array of chip options |
| multiple | boolean | true | Whether multiple selection is allowed |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the chips are visible |
| enabled | boolean | true | Whether the chips are enabled |
| showIcons | boolean | false | Whether to show chip icons |
| deletable | boolean | false | Whether chips can be deleted |

### Layout Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | '100%' | Width of the chips container |
| height | number/string | 'auto' | Height of the chips container |
| layout | string | 'flow' | Layout of chips ('flow' or 'grid') |
| spacing | number | 8 | Space between chips |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| chipStyle | object | {} | Custom styles for individual chips |
| selectedStyle | object | {} | Custom styles for selected chips |
| iconStyle | object | {} | Custom styles for chip icons |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onChange | (values: array) | Triggered when selection changes |
| onDelete | (chip: object) | Triggered when a chip is deleted |
| onChipClick | (chip: object) | Triggered when a chip is clicked |

## Usage Notes
- Chips can be used for selection or display
- Multiple chips can be selected
- Chips can be deleted if enabled
- Custom styling can be applied to chips
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  },
} satisfies Meta<typeof WmChips>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicChips",
    placeholder: "Select frameworks",
    dataset: sampleDataset,
    datafield: "value",
    displayfield: "label",
    datavalue: [],
    onChange: action("onChange"),
    searchable: false,
    imgSrc: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    // styles: {
    //   root: {
    //     backgroundColor: 'transparent',
    //   },
    //   chip: {
    //     backgroundColor: '#fff',
    //     borderRadius: 16,
    //     paddingHorizontal: 12,
    //     paddingVertical: 6,
    //     marginRight: 8,
    //     marginBottom: 8,
    //   },
    //   chipText: {
    //     color: '#000',
    //     fontSize: 14,
    //   },
    //   chipIcon: {
    //     color: '#000',
    //     fontSize: 14,
    //   },
    // },
  },
};

export const PreselectedValues: Story = {
  args: {
    name: "preselectedChips",
    placeholder: "Select frameworks",
    dataset: sampleDataset,
    datafield: "value",
    displayfield: "label",
    datavalue: ["react", "angular"],
    onChange: action("onChange"),
    searchable: false,
    // styles: {
    //   ...Basic.args.styles,
    // },
  },
};

export const MaxSelection: Story = {
  args: {
    name: "maxSelectionChips",
    placeholder: "Select frameworks",
    dataset: sampleDataset,
    datafield: "value",
    displayfield: "label",
    datavalue: [],
    maxsize: 3,
    onChange: action("onChange"),
    searchable: false,
    // styles: {
    //   ...Basic.args.styles,
    // },
  },
};

export const CustomChipStyle: Story = {
  args: {
    ...Basic.args,
    name: "customStyleChips",
    // styles: {
    //   ...Basic.args.styles,
    //   chip: {
    //     backgroundColor: '#E8F5E9',
    //     borderRadius: 20,
    //     paddingHorizontal: 16,
    //     paddingVertical: 8,
    //     marginRight: 8,
    //     marginBottom: 8,
    //     borderWidth: 1,
    //     borderColor: '#4CAF50',
    //   },
    //   chipText: {
    //     color: '#2E7D32',
    //     fontSize: 14,
    //     fontWeight: 'bold',
    //   },
    //   chipIcon: {
    //     color: '#2E7D32',
    //   },
    // },
  },
};

export const ReadOnly: Story = {
  args: {
    ...Basic.args,
    readonly: true,
    datavalue: ["react", "vue"],
    name: "readonlyChips",
  },
};
