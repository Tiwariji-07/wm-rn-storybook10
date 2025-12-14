import { useRef, useState } from "react";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ModalProvider } from "@wavemaker/app-rn-runtime/core/modal.service";

export const SearchService = ({ children }: { children: React.ReactNode }) => {
  const [currentModal, setCurrentModal] = useState<any>(null);
  const [refreshCount, setRefreshCount] = useState(0);
  const updateTimer = useRef<NodeJS.Timeout | null>(null);

  const modalService = {
    showModal: (options: any) => {
      // console.log("Showing modal with options:", options);
      // Clear any pending update
      if (updateTimer.current) {
        clearTimeout(updateTimer.current);
      }
      // Debounce updates so we only update once every 300ms
      updateTimer.current = setTimeout(() => {
        // Only update state if options have actually changed (you could add a more
        // sophisticated comparison here if needed)
        setCurrentModal({ ...options, refreshKey: Date.now() });
      }, 300);
    },
    hideModal: async (options: any) => {
      // console.log("Hiding modal:", options);
      if (options.onClose) {
        await options.onClose();
      }
      if (updateTimer.current) {
        clearTimeout(updateTimer.current);
      }
      setCurrentModal(null);
    },
    refresh: () => {
      // console.log("Refresh called");
    },
  };
  // const modalService = {
  //   showModal: (options: any) => {
  //     console.log("Showing modal with options:", options);
  //     // Force a new object reference to trigger a re-render
  //     // setCurrentModal(null);
  //     setCurrentModal((prev) => {
  //       // If a modal is already shown, update its content
  //       if (prev) {
  //         return { ...prev, ...options, refreshKey: Date.now() };
  //       }
  //       return { ...options, refreshKey: Date.now() };
  //     });
  //     // setRefreshCount((prev) => prev + 1);
  //   },
  //   hideModal: async (options: any) => {
  //     console.log("Hiding modal:", options);
  //     if (options.onClose) {
  //       await options.onClose();
  //     }
  //     setCurrentModal(null);
  //   },
  //   refresh: () => {
  //     console.log("Refresh called");
  //   },
  // };

  return (
    <ModalProvider value={modalService}>
      {children}
      {currentModal && (
        <View style={[styles.contentContainer, currentModal.contentStyle]}>
          {currentModal.content}
        </View>
      )}
    </ModalProvider>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    // flex: 1,
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
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
  suggestionsOverlay: {},
});

///debounce
// import { useState, useRef, useCallback } from "react";
// import { Modal, StyleSheet, View } from "react-native";
// import { ModalProvider } from "@wavemaker/app-rn-runtime/core/modal.service";
// import isEqual from "lodash/isEqual";
// import debounce from "lodash/debounce";

// export const SearchService = ({ children }: { children: React.ReactNode }) => {
//   const [currentModal, setCurrentModal] = useState<any>(null);
//   const prevOptionsRef = useRef<any>(null);

//   // Debounced updater for modal state
//   const debouncedUpdateModal = useCallback(
//     debounce((options) => {
//       // Only update if options have changed
//       if (!isEqual(prevOptionsRef.current, options)) {
//         prevOptionsRef.current = options;
//         setCurrentModal({ ...options, refreshKey: Date.now() });
//       }
//     }, 300),
//     []
//   );

//   const modalService = {
//     showModal: (options: any) => {
//       console.log("Showing modal with options:", options);
//       debouncedUpdateModal(options);
//     },
//     hideModal: async (options: any) => {
//       console.log("Hiding modal:", options);
//       if (options.onClose) {
//         await options.onClose();
//       }
//       // Cancel any pending update if needed
//       debouncedUpdateModal.cancel();
//       prevOptionsRef.current = null;
//       setCurrentModal(null);
//     },
//     refresh: () => {
//       console.log("Refresh called");
//     },
//   };

//   return (
//     <ModalProvider value={modalService}>
//       {children}
//       {currentModal && (
//         <View style={[styles.contentContainer, currentModal.contentStyle]}>
//           {currentModal.content}
//         </View>
//       )}
//     </ModalProvider>
//   );
// };

// const styles = StyleSheet.create({
//   contentContainer: {
//     backgroundColor: "white",
//     padding: 20,
//     borderRadius: 8,
//     margin: 20,
//   },
// });

// import { useState, useRef, useCallback } from "react";
// import { View, StyleSheet } from "react-native";
// import { ModalProvider } from "@wavemaker/app-rn-runtime/core/modal.service";
// import isEqual from "lodash/isEqual";
// import throttle from "lodash/throttle";

// export const SearchService = ({ children }: { children: React.ReactNode }) => {
//   const [currentModal, setCurrentModal] = useState<any>(null);
//   const prevOptionsRef = useRef<any>(null);

//   // Throttle updates so that the modal state is refreshed at least every 100ms.
//   const throttledUpdateModal = useCallback(
//     throttle((options) => {
//       if (!isEqual(prevOptionsRef.current, options)) {
//         prevOptionsRef.current = options;
//         setCurrentModal({ ...options, refreshKey: Date.now() });
//       }
//     }, 100),
//     []
//   );

//   const modalService = {
//     showModal: (options: any) => {
//       console.log("Showing modal with options:", options);
//       throttledUpdateModal(options);
//     },
//     hideModal: async (options: any) => {
//       console.log("Hiding modal:", options);
//       if (options.onClose) {
//         await options.onClose();
//       }
//       throttledUpdateModal.cancel();
//       prevOptionsRef.current = null;
//       setCurrentModal(null);
//     },
//     refresh: () => {
//       console.log("Refresh called");
//     },
//   };

//   return (
//     <ModalProvider value={modalService}>
//       {children}
//       {currentModal && (
//         <View style={[styles.contentContainer, currentModal.contentStyle]}>
//           {currentModal.content}
//         </View>
//       )}
//     </ModalProvider>
//   );
// };

// const styles = StyleSheet.create({
//   contentContainer: {
//     backgroundColor: "white",
//     padding: 20,
//     borderRadius: 8,
//     margin: 20,
//   },
// });
