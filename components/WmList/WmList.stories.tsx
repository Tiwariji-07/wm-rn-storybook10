import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View, Text } from "react-native";
import WmList from "@wavemaker/app-rn-runtime/components/data/list/list.component";
import { action } from "storybook/actions";
import { Users } from "../../constants/constant";
import { AssetProvider } from "@wavemaker/app-rn-runtime/core/asset.provider";
import { handleAsset } from "../../services/Assethandler";
import { ModalServiceComponent } from "../../services/ModalService";


import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";
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
      page: Docs,
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
