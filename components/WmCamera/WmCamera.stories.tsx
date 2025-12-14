import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmCamera from "@wavemaker/app-rn-runtime/components/device/camera/camera.component";
import { action } from "storybook/actions";
import { CameraProvider } from "@wavemaker/app-rn-runtime/core/device/camera-service";
import { ModalServiceComponent } from "../../services/ModalService";
import { SafeAreaProvider } from "react-native-safe-area-context";
import cameraService from "@wavemaker/app-rn-runtime/runtime/services/device/camera-service";
// import {CameraType,CameraView} from 'expo-camera'

const meta = {
  title: "Device/Camera",
  component: WmCamera,
  decorators: [
    (Story) => (
      <SafeAreaProvider>
        <CameraProvider value={cameraService}>
          <ModalServiceComponent>
            <View style={{ padding: 16 }}>
              <Story />
            </View>
          </ModalServiceComponent>
        </CameraProvider>
      </SafeAreaProvider>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmCamera Component

A camera component that allows users to capture images and videos using their device's camera.

## Features
- Image and video capture
- Camera switching (front/back)
- Flash control
- Image quality settings
- Gallery access
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the camera |
| value | string | - | Captured image/video data |
| required | boolean | false | Whether capture is required |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the camera is visible |
| enabled | boolean | true | Whether the camera is enabled |
| showLabel | boolean | true | Whether to show the label |
| label | string | '' | Label text |

### Camera Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | string | 'image' | Capture type ('image' or 'video') |
| cameraType | string | 'back' | Camera to use ('front' or 'back') |
| flashMode | string | 'off' | Flash mode ('on', 'off', 'auto') |
| quality | string | 'medium' | Image/video quality ('low', 'medium', 'high') |

### Capture Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| maxDuration | number | - | Maximum video duration in seconds |
| maxSize | number | - | Maximum file size in bytes |
| allowGallery | boolean | true | Whether to allow gallery access |
| allowEditing | boolean | false | Whether to allow image editing |

### Validation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| required | boolean | false | Whether capture is required |
| validationMessage | string | '' | Custom validation message |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | object | {} | Custom styles for the component |
| labelClass | string | '' | CSS class for the label |
| cameraClass | string | '' | CSS class for the camera view |
| buttonClass | string | '' | CSS class for the capture button |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | 'button' | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onCapture | (data, event) | Triggered when image/video is captured |
| onError | (error, event) | Triggered when an error occurs |
| onCameraReady | (event) | Triggered when camera is ready |
| onGallerySelect | (data, event) | Triggered when image is selected from gallery |

## Usage Notes
- Camera permissions must be granted by the user
- Image/video data is returned in base64 format
- Quality settings affect file size and performance
- Gallery access requires additional permissions
- The component is fully accessible with proper ARIA attributes
- Camera features may vary by device capabilities
        `
      }
    }
  },
} satisfies Meta<typeof WmCamera>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basicCamera",
    onCapture: action("onCapture"),
    onError: action("onError"),
    capturetype: "IMAGE",
    allowedit: true,
    imagequality: 0.8,
    imageencodingtype: "jpeg",
    imagetargetwidth: 1280,
    imagetargetheight: 720,
  },
};

export const WithCustomButtons: Story = {
  args: {
    ...Basic.args,
    name: "customCamera",
    capturebtnlabel: "Take Photo",
    switchcamerabtnlabel: "Switch Camera",
    recordbtnlabel: "Record Video",
    stoprecordbtnlabel: "Stop Recording",
  },
};

export const WithQualitySettings: Story = {
  args: {
    ...Basic.args,
    name: "qualityCamera",
    quality: 0.8,
    maxwidth: 1280,
    maxheight: 720,
  },
};

export const VideoMode: Story = {
  args: {
    ...Basic.args,
    name: "videoCamera",
    capturetype: "VIDEO",
    maxduration: 30, // 30 seconds
    quality: "high",
  },
};
