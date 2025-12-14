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
      description: {
        component: `
# WmSearch Component

A search input component that provides search functionality with customizable options.

## Features
- Search input with customizable styling
- Placeholder text support
- Clear button option
- Search icon support
- Custom styling options
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the search input |
| datavalue | string | '' | Current value of the search input |
| placeholder | string | '' | Placeholder text when input is empty |
| required | boolean | false | Whether the field is required |
| disabled | boolean | false | Whether the input is disabled |
| readonly | boolean | false | Whether the input is read-only |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| showclear | boolean | true | Whether to show the clear button |
| iconclass | string | '' | CSS class for the search icon |
| iconposition | string | 'left' | Position of the icon ('left' or 'right') |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | string | '300px' | Width of the search input |
| height | string | '40px' | Height of the search input |
| fontsize | string | '16px' | Font size of the text |
| color | string | '' | Text color |
| backgroundcolor | string | '' | Background color |
| textalign | string | 'left' | Text alignment |
| classname | string | '' | CSS class for styling |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onChange | (value: string) | Triggered when the search value changes |
| onSearch | (value: string) | Triggered when search is performed |
| onClear | () | Triggered when the clear button is clicked |
| onBlur | () | Triggered when the input loses focus |
| onFocus | () | Triggered when the input gains focus |

## Styling Classes
Available classes for styling:
- \`input-sm\` - Small input size
- \`input-lg\` - Large input size
- \`input-primary\`
- \`input-secondary\`
- \`input-success\`
- \`input-danger\`
- \`input-warning\`
- \`input-info\`
- \`input-muted\`
        `
      }
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
