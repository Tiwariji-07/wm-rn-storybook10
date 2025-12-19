import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmFileUpload from "@wavemaker/app-rn-runtime/components/input/fileupload/fileupload.component";
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

const meta = {
  title: "Form/FileUpload",
  component: WmFileUpload,
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
} satisfies Meta<typeof WmFileUpload>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicFileUpload",
    placeholder: "Choose File",
    caption: "Upload your files here",
    onChange: action("onChange"),
    onSelect: action("onSelect"),
    onBeforeupload: action("onBeforeupload"),
    onUpload: action("onUpload"),
    onError: action("onError"),
    styles: {
      root: {
        backgroundColor: '#FFFFFF',
      },

    },
  },
};

// export const WithMultipleFiles: Story = {
//   args: {
//     ...Basic.args,
//     multiple: true,
//     name: "multipleFileUpload",
//     caption: "Upload multiple files",
//   },
// };

export const WithFileTypes: Story = {
  args: {
    ...Basic.args,
    filetype: "image/*",
    name: "imageFileUpload",
    caption: "Upload images only",
  },
};

export const WithMaxFileSize: Story = {
  args: {
    ...Basic.args,
    maxfilesize: 5, // 5MB
    name: "maxSizeFileUpload",
    caption: "Max file size: 5MB",
  },
};

// export const WithCustomButton: Story = {
//   args: {
//     ...Basic.args,
//     name: "customButtonFileUpload",
//     caption: "Upload your documents",
//     styles: {
//       ...Basic.args.styles,
//       button: {
//         backgroundColor: '#4CAF50',
//         paddingHorizontal: 20,
//         paddingVertical: 12,
//         borderRadius: 8,
//         flexDirection: 'row',
//         alignItems: 'center',
//       },
//       buttonText: {
//         color: '#FFFFFF',
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginLeft: 8,
//       },
//       caption: {
//         color: '#4CAF50',
//         fontSize: 14,
//         marginTop: 8,
//         fontStyle: 'italic',
//       },
//     },
//   },
// };

// export const Disabled: Story = {
//   args: {
//     ...Basic.args,
//     disabled: true,
//     name: "disabledFileUpload",
//     styles: {
//       ...Basic.args.styles,
//       button: {
//         ...Basic.args.styles.button,
//         backgroundColor: '#BDBDBD',
//       },
//       caption: {
//         ...Basic.args.styles.caption,
//         color: '#9E9E9E',
//       },
//     },
//   },
// };
