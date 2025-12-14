import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmFileUpload from "@wavemaker/app-rn-runtime/components/input/fileupload/fileupload.component";
import { action } from "storybook/actions";

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
      description: {
        component: `
# WmFileUpload Component

A file upload component that allows users to select and upload files with various options and validations.

## Features
- Single and multiple file upload
- File type restrictions
- File size validation
- Upload progress tracking
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the upload |
| multiple | boolean | false | Whether to allow multiple file selection |
| required | boolean | false | Whether file upload is required |

### File Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accept | string | '*' | Accepted file types (e.g., 'image/*') |
| maxsize | number | null | Maximum file size in bytes |
| maxfiles | number | null | Maximum number of files allowed |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the upload is visible |
| enabled | boolean | true | Whether the upload is enabled |
| readonly | boolean | false | Whether the upload is read-only |
| showPreview | boolean | true | Whether to show file preview |

### Upload Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| uploadurl | string | '' | URL to upload files to |
| method | string | 'POST' | HTTP method for upload |
| headers | object | {} | Custom headers for upload request |
| timeout | number | 30000 | Upload timeout in milliseconds |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | - | Width of the upload component |
| height | number/string | - | Height of the upload component |
| styles | object | {} | Custom styles for the component |
| buttonStyle | object | {} | Custom styles for the upload button |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onChange | (files: File[]) | Triggered when files are selected |
| onUpload | (response: any) | Triggered when upload completes |
| onError | (error: Error) | Triggered when upload fails |
| onProgress | (progress: number) | Triggered during upload progress |

## Usage Notes
- File types can be restricted using accept prop
- File size can be limited using maxsize prop
- Multiple files can be allowed with multiple prop
- Upload progress can be tracked through onProgress event
- The component is fully accessible with proper ARIA attributes
        `
      }
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
