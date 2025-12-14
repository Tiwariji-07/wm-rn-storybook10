import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ModalProvider } from "@wavemaker/app-rn-runtime/core/modal.service";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RefreshWrapper from "./RefreshWrapper";

export const WmTimeService = ({ children }: { children: React.ReactNode }) => {
  const [currentModal, setCurrentModal] = useState<any>(null);
  const [refreshCount, setRefreshCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [modalKey, setModalKey] = useState(Date.now());

  const modalService = {
    showModal: (options: any) => {
      console.log("Showing modal with options:", options);
      setCurrentModal(options);
      // setModalKey(Date.now());
      // setRefreshCount((prev) => prev + 1);
    },
    hideModal: (options: any) => {
      //   console.log("Hiding modal:", options);
      if (options.onClose) {
        options.onClose();
      }
      setCurrentModal(null);
    },
    refresh: () => {
      console.log("re rendered");

      // Incrementing the refreshCount will force a re-render
      setRefreshCount((prev) => prev + 1);
    },
  };

  return (
    <ModalProvider value={modalService}>
      <View style={{ display: "none" }}>{refreshCount}</View>
      {children}
      {currentModal && (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View style={styles.modalWrapper}>{currentModal.content}</View>
        </GestureHandlerRootView>
      )}
    </ModalProvider>
  );
};

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 400,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  contentContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 10,
  },
  itemText: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
});
