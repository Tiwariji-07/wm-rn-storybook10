import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import WmCamera from "@wavemaker/app-rn-runtime/components/device/camera/camera.component";
import { action } from "storybook/actions";
import { CameraProvider, CameraPluginProvider } from "@wavemaker/app-rn-runtime/core/device/camera-service";
import { ModalServiceComponent } from "../../services/ModalService";
import { SafeAreaProvider } from "react-native-safe-area-context";
import cameraService from "@wavemaker/app-rn-runtime/runtime/services/device/camera-service";
import { CameraView } from "expo-camera";
import { Video } from "expo-av";
import * as FileSystem from "expo-file-system";

// Camera plugin service that provides expo-camera components
const cameraPluginService = {
  CameraView: CameraView,
  Video: Video,
  fsReadAsString: async (uri: string, _options: { encoding: string }) => {
    // For web, we can't use FileSystem directly, but we can handle base64 conversion
    if (typeof window !== "undefined" && uri.startsWith("data:")) {
      // Already base64
      return uri.split(",")[1] || "";
    }
    try {
      // @ts-ignore - encoding type mismatch but works at runtime
      return await FileSystem.readAsStringAsync(uri, { encoding: "base64" });
    } catch (e) {
      console.warn("Could not read file as string:", e);
      return "";
    }
  },
};

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
  title: "Device/Camera",
  component: WmCamera,
  decorators: [
    (Story) => (
      <SafeAreaProvider>
        <CameraPluginProvider value={cameraPluginService}>
          <CameraProvider value={cameraService}>
            <ModalServiceComponent>
              <View style={{ padding: 16 }}>
                <Story />
              </View>
            </ModalServiceComponent>
          </CameraProvider>
        </CameraPluginProvider>
      </SafeAreaProvider>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
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
