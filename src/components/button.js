import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/COLORS";

const onboardingButton = () => (
  <View style={styles.button}>
    <View style={styles.continue}>
      <Text style={styles.buttontext}>Continue</Text>
    </View>
    <View style={styles.nextbutton}>
      <Ionicons name="md-arrow-forward" color={COLORS.main} size={30} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  continue: {
    // backgroundColor: "white",
    alignSelf: "center",
    paddingRight: "26%",
    marginLeft: "38%"
  },
  button: {
    backgroundColor: COLORS.black,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    height: "110%",
    borderRadius: 16,
    // marginHorizontal: 10
  },
  buttontext: {
    fontSize: 22,
    fontFamily: 'JosefinSans-Medium',
    color: COLORS.main,

  },
  nextbutton: {},
});

export default onboardingButton;
