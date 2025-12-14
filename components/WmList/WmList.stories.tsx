import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View, Text } from "react-native";
import WmList from "@wavemaker/app-rn-runtime/components/data/list/list.component";
import { action } from "storybook/actions";
import { Users } from "../../constants/constant";
import { AssetProvider } from "@wavemaker/app-rn-runtime/core/asset.provider";
import { handleAsset } from "../../services/Assethandler";
import { ModalServiceComponent } from "../../services/ModalService";

import {
  TextTemplate,
  TextWithAvatar,
  TextWithDescription,
  MediaList,
  EmailList,
  ContactList,
  ActionList
} from "../../templates/list";

const handleTemplate = (templateName: string, $item: any, $index: number, list: any) => {
  switch (templateName) {
    case "Text List":
      return <TextTemplate $item={$item} $index={$index} list={list} />;
    case "Text With Avatar":
      return <TextWithAvatar $item={$item} $index={$index} list={list} />;
    case "Text With Description":
      return <TextWithDescription $item={$item} $index={$index} list={list} />;
    case "Media List":
      return <MediaList $item={$item} $index={$index} list={list} />;
    case "Email List":
      return <EmailList $item={$item} $index={$index} list={list} />;
    case "Contact List":
      return <ContactList $item={$item} $index={$index} list={list} />;
    case "Action List":
      return <ActionList $item={$item} $index={$index} list={list} />;
    default:
      return <TextTemplate $item={$item} $index={$index} list={list} />;
  }
};

const meta = {
  title: "Data/List",
  component: WmList,
  decorators: [
    (Story) => (
      <AssetProvider value={handleAsset}>
        <ModalServiceComponent>
          <View style={{ padding: 16, }}>
            <Story />
          </View>
        </ModalServiceComponent>
      </AssetProvider>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmList Component

A list component that displays a collection of items in a structured format.

## Features
- Multiple list types (ordered, unordered)
- Custom item rendering
- Selection support
- Pagination
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the list |
| items | array | [] | Array of items to display |
| type | string | 'unordered' | List type (ordered/unordered) |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the list is visible |
| enabled | boolean | true | Whether the list is enabled |
| loading | boolean | false | Whether list is loading |
| emptyText | string | 'No items' | Text to show when empty |

### Layout Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| itemSpacing | number/string | '8px' | Space between items |
| padding | number/string | '0' | Padding around list |
| maxHeight | number/string | 'none' | Maximum height |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| itemStyle | object | {} | Custom styles for items |
| selectedStyle | object | {} | Custom styles for selected items |
| backgroundColor | string | 'transparent' | Background color |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | 'list' | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onItemClick | (item, index) | Triggered when item is clicked |
| onItemSelect | (item, index) | Triggered when item is selected |
| onLoadMore | () | Triggered when more items need to be loaded |

## Usage Notes
- List can be used for displaying any type of data
- Items can be custom rendered
- Selection can be single or multiple
- Pagination can be implemented
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  },
  argTypes: {
    direction: {
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
    },
    itemsperrow: {
      table: {
        disable: true,
      },
    },
    template: {
      table: {
        disable: true,
      },
    },
    statehandler: {
      table: {
        disable: true,
      },
    },
    navigation: {
      control: {
        type: "select",
      },
      options: ["None", "Scroll", "On-Demand"],
    },
    orderby: {
      control: {
        type: "select",
      },
      options: [
        ...Object.keys(Users[0]).flatMap((key) => [
          `${key}:asc`,
          `${key}:desc`,
        ]),
        "",
      ],
    },
    groupby: {
      control: {
        type: "select",
      },
      options: [...Object.keys(Users[0]), ""],
    },
    templatename: {
      control: {
        type: "select",
      },
      options: ["Text List", "Text With Avatar", "Text With Description", "Media List", "Email List", "Contact List", "Action List"],
    },
  },
} satisfies Meta<typeof WmList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "BasicList",
    templatename: "Text List",
    title: "Users",
    subheading: "wavemaker",
    dataset: Users,
    istclass: "list-group",
    // itemclass:(item, index) => 'list-group-item'},
    template: "true",
    itemsperrow: { xs: 1, sm: 1, md: 1, lg: 1 },
    statehandler: "URL",
    pagesize: 5,
    navigation: "None",
    direction: "vertical",
    multiselect: false,
    selectfirstitem: false,
    selectionlimit: 3,
    orderby: "",
    groupby: "",
    nodatamessage: "No data found  ",
    loadingdatamsg: "Loading...  ",
    // loadingdata:{fragment.Variables.staticVariable1.isExecuting},
    styles: { root: { width: 350 }, text: {} },
    classname: "media-list",
    onSelect: action("onSelect"),
    renderItem: ($item, $index, list) => {
      return (
        <>
          <TextTemplate
            $item={$item}
            $index={$index}
            list={list}
            fragment={{}}
          />
        </>
      );
    },
  },
  render: (args) => (
    <WmList
      {...args}
      renderItem={($item: any, $index: number, list: any) => {
        return <>{handleTemplate(args.templatename, $item, $index, list)}</>;
      }}
    ></WmList>
  ),
};

export const WithGrouping: Story = {
  args: {
    ...Basic.args,
    groupby: "gender",
  },
  render: (args) => (
    <WmList
      {...args}
      renderItem={($item: any, $index: number, list: any) => {
        return <>{handleTemplate(args.templatename, $item, $index, list)}</>;
      }}
    ></WmList>
  ),
};

export const Template: Story = {
  args: {
    ...Basic.args,
    templatename: "Text With Avatar",
  },
  render: (args) => (
    <WmList
      {...args}
      renderItem={($item: any, $index: number, list: any) => {
        return <>{handleTemplate(args.templatename, $item, $index, list)}</>;
      }}
    ></WmList>
  ),
};
