import type { Meta, StoryObj } from "@storybook/react";
import React, { useRef, useState } from "react";
import { View, Modal, StyleSheet, Text, Dimensions } from "react-native";
import WmBottomsheet from "@wavemaker/app-rn-runtime/components/basic/bottomsheet/bottomsheet.component";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";
import WmButton from '@wavemaker/app-rn-runtime/components/basic/button/button.component';
import { action } from "storybook/actions";
import { ModalServiceComponent } from "../../services/ModalService";

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

const BottomSheetWithTrigger = (props: any) => {
  const bottomsheetRef: any = useRef();


  const openBotomSheet = () => {
    // console.log('Opening dialog');
    if (bottomsheetRef.current) {
      bottomsheetRef.current.open()
    }
  };

  return (

    <View style={{ flex: 1, }}>
      <WmButton
        caption="Open Bottom Sheet"
        onTap={openBotomSheet}
        classname="btn-success"

      />
      <WmBottomsheet ref={bottomsheetRef} {...props} >
        <WmLabel
          padding="unset"
          caption={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque.

Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Nam ut velit vitae tortor mattis facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`}
        />

      </WmBottomsheet>
    </View>


  );

};


const meta = {
  title: "Advanced/BottomSheet",
  component: BottomSheetWithTrigger,
  decorators: [
    (Story) => (
      <View style={{ height: 400, width: '100%' }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    //layout: "centered",
    docs: {
      page: Docs,
    }
  },
  // argTypes: {
  //   alerttype: {
  //     control: "select",
  //     options: ["error", "information", "success", "warning"]
  //   }
  // }
} satisfies Meta<typeof BottomSheetWithTrigger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    showonrender: false,
    bottomsheetheightratio: 1.0,
    expand: false,
    bottomsheetexpandedheightratio: 1.0,
    onOpened: action("onOpened"),
    onClose: action("onClose"),
  },

};


