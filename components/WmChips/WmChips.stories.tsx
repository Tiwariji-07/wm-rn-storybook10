import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import WmChips from "@wavemaker/app-rn-runtime/components/input/chips/chips.component";
import { action } from "storybook/actions";

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";

const Docs = () => (
  <ComponentDocumentation
    overview={overview}
    props={props}
    events={events}
    methods={methods}
    styling={styling}
  />
);
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
      page: Docs,
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
