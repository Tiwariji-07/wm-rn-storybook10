import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmBarcodescanner from "@wavemaker/app-rn-runtime/components/device/barcodescanner/barcodescanner.component";
import { action } from "storybook/actions";
import { ScanProvider } from "@wavemaker/app-rn-runtime/core/device/scan-service";
import scanService from "@wavemaker/app-rn-runtime/runtime/services/device/scan-service";
import { ModalServiceComponent } from "../../services/ModalService";
import { SafeAreaProvider } from "react-native-safe-area-context";

// const scanService = new ScanService();

// // Override methods for story demonstration
// scanService.scan = async (options) => {
//   action("scan")(options);
//   return {
//     cancelled: false,
//     data: "Sample QR Code Data",
//     type: "QR",
//   };
// };

// scanService.hasPermission = async () => {
//   action("hasPermission")();
//   return true;
// };

// scanService.requestPermission = async () => {
//   action("requestPermission")();
//   return true;
// };

const meta = {
  title: "Device/Barcodescanner",
  component: WmBarcodescanner,
  decorators: [
    (Story) => (
      <SafeAreaProvider>
        <ScanProvider value={scanService}>
          <ModalServiceComponent>
            <View style={{ padding: 16 }}>
              <Story />
            </View>
          </ModalServiceComponent>
        </ScanProvider>
      </SafeAreaProvider>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmBarcodescanner Component

A component that allows users to scan barcodes and QR codes using the device's camera.

## Features
- Barcode and QR code scanning
- Multiple barcode format support
- Camera preview
- Flash control
- Full accessibility support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the scanner |
| value | string | '' | Scanned barcode value |
| placeholder | string | '' | Placeholder text when no value |
| required | boolean | false | Whether scanning is required |

### Scanner Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| formats | array | ['all'] | Supported barcode formats |
| flashMode | string | 'off' | Camera flash mode ('on', 'off', 'auto') |
| cameraType | string | 'back' | Camera to use ('front', 'back') |
| scanInterval | number | 2000 | Time between scans in milliseconds |

### Display Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | boolean | true | Whether the scanner is visible |
| enabled | boolean | true | Whether the scanner is enabled |
| showPreview | boolean | true | Whether to show camera preview |
| showFlashButton | boolean | true | Whether to show flash control |

### Styling Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number/string | '100%' | Width of the scanner |
| height | number/string | '300px' | Height of the scanner |
| styles | object | {} | Custom styles for the component |
| previewStyle | object | {} | Custom styles for camera preview |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onScan | (value: string) | Triggered when barcode is scanned |
| onError | (error: Error) | Triggered when scanning fails |
| onFlashChange | (mode: string) | Triggered when flash mode changes |

## Usage Notes
- Multiple barcode formats can be supported
- Camera flash can be controlled manually or automatically
- Scanner can be configured to use front or back camera
- Scan interval can be adjusted to prevent multiple scans
- The component is fully accessible with proper ARIA attributes
        `
      }
    }
  },
} satisfies Meta<typeof WmBarcodescanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "barcodescanner1",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
};

export const WithOptions: Story = {
  args: {
    name: "barcodescanner2",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
    options: {
      scanTypes: ["QR", "BARCODE"],
      showFlashlight: true,
      showMyQrCode: true,
    },
  },
};
