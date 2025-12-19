import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmBarcodescanner from "@wavemaker/app-rn-runtime/components/device/barcodescanner/barcodescanner.component";
import { action } from "storybook/actions";
import { ScanProvider } from "@wavemaker/app-rn-runtime/core/device/scan-service";
import scanService from "@wavemaker/app-rn-runtime/runtime/services/device/scan-service";
import { ModalServiceComponent } from "../../services/ModalService";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
      page: Docs,
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
