import React, { useEffect, useRef } from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants/COLORS";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(nextScreen, 3000);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  const nextScreen = () => {
    navigation.navigate("animationscreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Emma AI</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 44,
    color: COLORS.black,
    fontFamily: "JosefinSans-Medium",
    fontWeight: "900",
  },
});

export default WelcomeScreen;
