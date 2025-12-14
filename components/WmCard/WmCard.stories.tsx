import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmList from "@wavemaker/app-rn-runtime/components/data/list/list.component";
import { action } from "storybook/actions";
import { Users } from "../../constants/constant";
import { AssetProvider } from "@wavemaker/app-rn-runtime/core/asset.provider";
import { handleAsset } from "../../services/Assethandler";
import { ModalServiceComponent } from "../../services/ModalService";

import {
  CardWithText,
  ContactCard,
  BusinessCard,
  MediaPost,
  NewsPost,
  PersonalSpotlight,
} from "../../templates/card/index";

const handleTemplate = (
  templateName: string,
  $item: any,
  $index: number,
  list: any
) => {
  switch (templateName) {
    case "Text Card":
      return <CardWithText $item={$item} $index={$index} list={list} />;
    case "Contact Card":
      return <ContactCard $item={$item} $index={$index} list={list} />;
    case "Business Card":
      return <BusinessCard $item={$item} $index={$index} list={list} />;
    case "Media Post":
      return <MediaPost $item={$item} $index={$index} list={list} />;
    case "News Post":
      return <NewsPost $item={$item} $index={$index} list={list} />;
    case "Personal Spotlight":
      return <PersonalSpotlight $item={$item} $index={$index} list={list} />;
    default:
      return <CardWithText $item={$item} $index={$index} list={list} />;
  }
};

const meta = {
  title: "Data/Card",
  component: WmList,
  decorators: [
    (Story) => (
      <AssetProvider value={handleAsset}>
        <ModalServiceComponent>
          <View style={{ padding: 16, minWidth: '80%' }}>
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
# WmCard Component

A container component that displays content in a card-like format with customizable styling and interactions.

## Features
- Card layout with header, body, and footer sections
- Custom styling options
- Interactive elements
- Shadow and elevation effects
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the card |
| title | string | '' | Card title text |
| subtitle | string | '' | Card subtitle text |
| content | string | '' | Card content text |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the card is visible |
| enabled | boolean | true | Whether the card is enabled |
| showHeader | boolean | true | Whether to show card header |
| showFooter | boolean | true | Whether to show card footer |

### Layout Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | '100%' | Width of the card |
| height | number/string | 'auto' | Height of the card |
| padding | number/string | 16 | Padding around card content |
| margin | number/string | 0 | Margin around card |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| headerStyle | object | {} | Custom styles for header |
| bodyStyle | object | {} | Custom styles for body |
| footerStyle | object | {} | Custom styles for footer |
| elevation | number | 2 | Card elevation level |
| borderRadius | number | 4 | Card corner radius |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onPress | () | Triggered when card is pressed |
| onHeaderPress | () | Triggered when header is pressed |
| onFooterPress | () | Triggered when footer is pressed |

## Usage Notes
- Card can be used as a container for various content types
- Header and footer sections are optional
- Custom styling can be applied to different card sections
- Card supports elevation and shadow effects
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
      options: [
        "Text Card",
        "Business Card",
        "Contact Card",
        "Media Post",
        "Personal Spotlight",
        "News Post",
      ],
    },
  },
} satisfies Meta<typeof WmList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    templatename: "Text Card",
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
