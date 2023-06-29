import {
    Text,
    StyleSheet,
    View,
    StatusBar,
    Image,
    Dimensions,
    ImageBackground,
    TouchableHighlight,
    SafeAreaView,
    Animated,
    ScrollView
} from "react-native";
import React, { Component, useRef, useState, useEffect, } from "react";
import { Platform, TouchableOpacity } from "react-native";
import MyComponent from "../../components/button";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants/COLORS";

const AnimeScreen = ({ navigation }) => {
    const nextscreen = () => {
        navigation.navigate('artworkscreen');
        // setFlag(true);
    };
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.textcontainer}>
                <Text style={styles.text}>
                    Turn yourself into
                </Text>
                <View style={styles.inRowContainer}>
                    <Text style={[styles.text, { fontSize: 32, fontWeight: '900', }]}>
                        Anime Character
                    </Text>
                </View>
            </View>
            <View style={styles.iconimage}>
                <Image
                    source={require("../../../assets/animeImage.png")}
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
        padding: '5%',
    },
    iconimage: {
        alignSelf: "center",
        justifyContent: "center",
        flex: 18,
        paddingBottom: "15%",
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
        paddingBottom: Platform.OS == 'ios' ? '2%' : 0
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
        width: 400,
        maxHeight: Platform.OS == 'ios' ? 520 : 550
        // width: '100%',
    }
});

export default AnimeScreen;
