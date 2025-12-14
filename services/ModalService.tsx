import { useState } from "react";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ModalProvider } from "@wavemaker/app-rn-runtime/core/modal.service";

// Create a modal service implementation with rendering
export const ModalServiceComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentModal, setCurrentModal] = useState<any>(null);

  const modalService = {
    showModal: (options: any) => {
      // console.log("Showing modal with options:", options);
      setCurrentModal(options);
    },
    hideModal: async (options: any) => {
      // console.log("Hiding modal:", options);
      if (options.onClose) {
        await options.onClose();
      }
      setCurrentModal(null);
    },
    refresh: () => {
      // console.log("Refresh called");
    },
  };

  return (
    <ModalProvider value={modalService}>
      {children}
      {currentModal && (
        <Modal
          visible={true}
          transparent
          animationType="fade"
          onRequestClose={() => modalService.hideModal(currentModal)}
        >
          <TouchableWithoutFeedback
            onPress={() =>
              currentModal.outsideClick && modalService.hideModal(currentModal)
            }
          >
            <View />
          </TouchableWithoutFeedback>
          <View
            style={[
              styles.modalContainer,
              currentModal.centered && styles.centered,
              currentModal.modalStyle,
            ]}
          >
            <View style={[styles.contentContainer, currentModal.contentStyle]}>
              {currentModal.content}
            </View>
          </View>
        </Modal>
      )}
    </ModalProvider>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    margin: 20,
    // maxHeight: '80%',
  },
});
