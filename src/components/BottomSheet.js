// import { View, Text, StatusBar } from "react-native";
// import React from "react";
// import BottomSheet from "@gorhom/bottom-sheet";

// const BottomSheets = (
//   snapPoints,
//   bottomSheetModalRef,
//   index,
//   handleSheetChanges,
//   enablePanDownToClose
// ) => {
//   return (
//     <BottomSheet
//       snapPoints={snapPoints}
//       ref={bottomSheetModalRef}
//       index={parseInt(index)}
//       onChange={handleSheetChanges}
//       animateOnMount={true}
//       enablePanDownToClose={enablePanDownToClose}
//       topInset={StatusBar.currentHeight}
//       handleStyle={{ backgroundColor: "black" }}
//       handleIndicatorStyle={{ backgroundColor: "gray" }}
//     />
//   );
// };

// export default BottomSheets;



import React, { useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modalize from "react-native-modalize";

const BottomSheet = () => {
  const modalRef = useRef(null);

  const openBottomSheet = () => {
    if (modalRef.current) {
      modalRef.current.open();
    }
  };

  const closeBottomSheet = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openBottomSheet}>
        <Text>Open Bottom Sheet</Text>
      </TouchableOpacity>

      <Modalize ref={modalRef}>
        <View style={styles.bottomSheetContent}>
          <Text>Bottom Sheet Content</Text>
          <TouchableOpacity onPress={closeBottomSheet}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modalize>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSheetContent: {
    padding: 16,
    alignItems: "center",
  },
});

export default BottomSheet;
