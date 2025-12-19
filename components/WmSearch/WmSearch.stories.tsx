import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { View } from "react-native";
import WmSearch from "@wavemaker/app-rn-runtime/components/basic/search/search.component";
import { action } from "storybook/actions";
import { ModalServiceComponent } from "../../services/ModalService";
import { WmTimeService } from "../../services/WmTimeService";
import { SearchService } from "../../services/SearchService";
import { Users } from "../../constants/constant";
import { AssetProvider } from "@wavemaker/app-rn-runtime/core/asset.provider";
import { handleAsset } from "../../services/Assethandler";

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";


const SearchWrapper = (props: any) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View style={{ padding: 16 }}>
      <WmSearch
        {...props}
        // Force a re-render by updating the key when searchTerm changes:
        key={searchTerm}
        onChange={
          // console.log(text);÷
          // setSearchTerm(text);
          action("onChange")
        }
      />
    </View>
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
  title: "Basic/Search",
  component: SearchWrapper,
  args: {
    width: '400px',
    // height:'40px',
    showclear: true,
    disabled: false,
    styles: {
      root: {
        width: '400px',
      },
      text: {
        backgroundColor: '#fff',
      },
    }
  },
  argTypes: {
    searchon: {
      control: {
        type: "select"
      },
      options: ['typing', 'onsearchiconclick']
    },
    searchkey: {
      control: {
        type: "text"
      },
      table: {
        disable: false,
      }
    },
    type: {
      control: {
        type: "select"
      },
      options: ['search', 'autocomplete']
    },
    dataset: {
      control: {

      },
      table: {
        disable: false,
      }
    }

    // matchmode:{
    //   control:{
    //     type:"select"
    //   },
    //   options:['startignorecase','endignorecase','start','end','anywhereignorecase','anywhere','exactignorecase','exact']
    // }
  },
  decorators: [
    (Story) => (
      <SearchService>
        <AssetProvider value={handleAsset}>
          <View style={{ padding: 16 }}>
            <Story />
          </View>
        </AssetProvider>
      </SearchService>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    }
  },
} satisfies Meta<typeof SearchWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    // name: "basicSearch",
    placeholder: "Search...",
    onChange: action("onChange"),
    dataset: Users,
    searchon: "typing",
    searchkey: "name",
    displaylabel: "name",
    datafield: "id",
    type: "search",
    displayimagesrc: "image",

    // searchiconclass: "wm-sl-l sl-search",
    onQuerySearch: () => {
      console.log("OnQuerySearch");
    },
    isUpdateRequired: action("update"),
    // console.log("Update Required");
  },
};

// export const DefaultValue: Story = {
//   args: {
//     ...Basic.args,
//     datavalue: 1,
//   },
// };

// export const Autocomplete: Story = {
//   args: {
//     ...Basic.args,
//     type: "autocomplete",
//   },
// };

// export const Disabled: Story = {
//   args: {
//     name: "disabledSearch",
//     placeholder: "Search...",
//     disabled: true,
//     onChange: action("onChange"),
//   },
// };
