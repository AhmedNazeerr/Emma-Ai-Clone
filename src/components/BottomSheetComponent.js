import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";

import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/COLORS";

const BottomSheetComponent = ({
  bgcolor,
  title,
  iconname,
  bottom,
  top,
  icon,
}) => {
  const AssetType = () => {
    console.log(`Picking ${title}`);
  };

  const Screen_Height = Dimensions.get("screen").height;

  return (
    <Pressable
      onPress={AssetType}
      style={{
        backgroundColor: COLORS.darkestLight,
        height: Screen_Height / 11,
        justifyContent: "flex-end",
        flexDirection: "row-reverse",
        borderBottomColor: COLORS.black,
        marginHorizontal: "2%",
        borderTopStartRadius: top === "true" ? 10 : 0,
        borderBottomEndRadius: bottom === "true" ? 10 : 0,
        borderBottomStartRadius: bottom === "true" ? 10 : 0,
        borderTopEndRadius: top === "true" ? 10 : 0,
      }}
      android_disableSound="true"
      android_ripple={{ color: "#40e6b4", foreground: "true" }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          paddingRight: "3%",
        }}
      >
        <Ionicons
          name="ios-chevron-forward"
          color="rgb(50,50,50)"
          style={{
            textAlign: "right",
            flexGrow: 1,
          }}
          size={22}
        />
      </View>

      <Text
        style={{
          color: COLORS.black,
          fontWeight: "bold",
          alignSelf: "center",
          paddingLeft: 20,
          fontSize: 16,
          fontFamily: "JosefinSans-Medium",
        }}
      >
        {title}
      </Text>
      <View
        style={{
          alignSelf: "center",
          marginLeft: "3%",
        }}
      >
        {icon === "true" ? (
          <Ionicons
            name={iconname}
            color={COLORS.black}
            size={33}
            style={{ borderRadius: 8 }}
          />
        ) : (
          <Image
            source={iconname}
            style={{
              resizeMode: "contain",
              padding: 16,
              borderRadius: 8,
              // backgroundColor: "black",
            }}
          />
        )}
      </View>
    </Pressable>
  );
};

export default BottomSheetComponent;
