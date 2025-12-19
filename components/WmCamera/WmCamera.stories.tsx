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
