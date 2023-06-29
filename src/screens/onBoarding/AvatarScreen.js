import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Dimensions,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { Component } from "react";
import { Platform } from "react-native";
import MyComponent from "../../components/button";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants/COLORS";

export default AvatarScreen = ({ navigation }) => {

  const nextscreen = () => {
    navigation.navigate('animescreen')
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.textcontainer}>
        <Text style={styles.text}>
          Create your own
        </Text>
        <View style={styles.inRowContainer}>
          <Text style={[styles.text, { fontSize: 42, fontWeight: '900', }]}>
            AI Avatar
          </Text>
        </View>
      </View>
      <View style={styles.iconimage}>
        <Image
          source={require("../../../assets/avatarImage.png")}
          style={styles.image}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.buttonstyle}>
        <TouchableOpacity
          onPress={() => nextscreen()}
        >
          <MyComponent />
        </TouchableOpacity>
      </View>
      <View style={styles.skipTextContainer}>
        <TouchableOpacity>
          <Text>Skip Demo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textcontainer: {
    // alignItems: "center",
    marginVertical: '5%'
  },
  text: {
    alignSelf: "flex-start",
    fontSize: 32,
    color: COLORS.black,
    fontFamily: "JosefinSans-Medium",
    marginLeft: '5%'
  },
  main: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: '5%'
  },
  iconimage: {
    alignItems: 'center',
    justifyContent: "center",
    flex: 18,
    paddingBottom: "10%",
  },
  buttonstyle: {
    alignSelf: "center",
    width: "98%",
    paddingBottom: "10%",
    // backgroundColor: 'red',
    height: "11%",
  },
  skipTextContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    color: COLORS.darkLight,
    paddingBottom: Platform.OS == 'ios' ? '5%' : 0
  },
  inRowContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between'
    // alignItems: 'flex-start',
    // backgroundColor: 'red',
  },
  image: {
    // width: 1094,
    // height: 1599,
    maxWidth: 300,
    // maxHeight: 780,
    height: 550,
  }
});