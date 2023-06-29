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
    ScrollView,
    TouchableOpacity
} from "react-native";
import React, { Component, useRef, useState, useEffect } from "react";
import { Platform } from "react-native";
import MyComponent from "../../components/button";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants/COLORS";


const AnimationScreen = ({ navigation }) => {

    const scrollViewRef = useRef();
    const scrollY = useRef(new Animated.Value(0)).current;
    const contentHeight = 1600; // Set the height of your scrollable content here
    const screenHeight = 400; // Set the height of the visible screen here
    const scrollDuration = 10000; // Adjust the duration for the desired scrolling speed
    const [animateValue, setAnimateValue] = useState(-1100)

    const nextscreen = () => {
        navigation.navigate('avatarscreen')
    };





    useEffect(() => {

        const startScrollAnimation = () => {
            console.log("scrollY", scrollY);
            Animated.timing(scrollY, {
                toValue: animateValue,
                duration: scrollDuration,
                useNativeDriver: true,
            }).start(() => {
                if (animateValue == -1100) {
                    setAnimateValue(0);
                } else {
                    setAnimateValue(-1100);
                }
                startScrollAnimation();
            });
        };




        startScrollAnimation();

        return () => {
            // console.log("end reeched!")
            scrollY.stopAnimation();
        };
    }, []);


    const handlePrivacyPolicyPress = () => {
        // Handle privacy policy press
        console.log('Privacy policy pressed');
    };

    const handleTermsOfUsePress = () => {
        // Handle terms of use press
        console.log('Terms of use pressed');
    };

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.textcontainer}>
                <Text style={styles.text}>Welcome to</Text>
                <Text style={[styles.text, { fontSize: 48, fontWeight: '600' }]}>Emma AI</Text>
            </View>
            <ScrollView
                ref={scrollViewRef}
                showsVerticalScrollIndicator={false}
                // decelerationRate={'normal'}
                contentContainerStyle={{ height: contentHeight }}
                style={styles.scrollViewContainer}
            >
                <Animated.View style={[{ transform: [{ translateY: scrollY }] }, styles.imagesContainer]}>
                    <View style={styles.leftImagesContainer}>
                        <Image
                            source={require("../../../assets/welcomePics/welcomepic1.jpeg")}
                            style={styles.leftImages}
                            resizeMode={'contain'}
                        />
                        <Image
                            source={require("../../../assets/welcomePics/welcomepic2.jpeg")}
                            style={styles.leftImages}
                            resizeMode={'contain'}
                        />
                        <Image
                            source={require("../../../assets/welcomePics/welcomepic3.jpeg")}
                            style={styles.leftImages}
                            resizeMode={'contain'}
                        />
                        <Image
                            source={require("../../../assets/welcomePics/welcomepic4.jpeg")}
                            style={styles.leftImages}
                            resizeMode={'contain'}
                        />
                        <Image
                            source={require("../../../assets/welcomePics/welcomepic5.jpeg")}
                            style={styles.leftImages}
                            resizeMode={'contain'}
                        />
                        <Image
                            source={require("../../../assets/welcomePics/welcomepic6.jpeg")}
                            style={styles.leftImages}
                            resizeMode={'contain'}
                        />
                    </View>
                    <View style={styles.rightImagesContainer}>
                        <Image
                            source={require("../../../assets/welcomePics/welcomepic7.jpeg")}
                            style={styles.rightImages}
                            resizeMode={'contain'}
                        />
                        <Image
                            source={require("../../../assets/welcomePics/welcomepic8.jpeg")}
                            style={styles.rightImages}
                            resizeMode={'contain'}
                        />
                        <Image
                            source={require("../../../assets/welcomePics/welcomepic9.jpeg")}
                            style={styles.rightImages}
                            resizeMode={'contain'}
                        />
                        <Image
                            source={require("../../../assets/welcomePics/welcomepic14.jpeg")}
                            style={styles.rightImages}
                            resizeMode={'contain'}
                        />
                        <Image
                            source={require("../../../assets/welcomePics/welcomepic11.jpeg")}
                            style={styles.rightImages}
                            resizeMode={'contain'}
                        />
                        <Image
                            source={require("../../../assets/welcomePics/welcomepic12.jpeg")}
                            style={styles.rightImages}
                            resizeMode={'contain'}
                        />
                        <Image
                            source={require("../../../assets/welcomePics/welcomepic13.jpeg")}
                            style={styles.rightImages}
                            resizeMode={'contain'}
                        />
                    </View>
                </Animated.View>
            </ScrollView>
            <View style={[styles.buttonstyle,]}>
                <TouchableOpacity
                    onPress={() => nextscreen()}
                // onPress={() => (console.log('continue clicked'))}
                >
                    <MyComponent />
                </TouchableOpacity>
            </View>
            <View style={styles.containerTS}>
                <Text style={styles.textTS}>
                    By continuing, you agree to our{' '}
                    <TouchableOpacity onPress={handlePrivacyPolicyPress}>
                        <Text style={styles.underline}>Privacy policy</Text>
                    </TouchableOpacity>{' '}
                    and{' '}
                    <TouchableOpacity onPress={handleTermsOfUsePress}>
                        <Text style={styles.underline}>terms of use</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textcontainer: {
        alignItems: 'center',
        marginTop: '5%',
        // marginVertical: '5%',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        // backgroundColor: 'pink'
    },
    text: {
        alignSelf: 'flex-start',
        fontSize: 24,
        color: COLORS.black,
        fontFamily: 'JosefinSans-Medium',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    main: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: '5%',
    },
    scrollViewContainer: {
        // flex: 3,
        // backgroundColor: 'orange'
    },
    containerTS: {
        // paddingHorizontal: 16,
        // paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        // backgroundColor: 'yellow'
        paddingBottom: Platform.OS == 'ios' ? '5%' : 0

    },
    textTS: {
        width: '90%',
        flexDirection: 'row',
        // backgroundColor: 'orange',
        fontSize: 10,
        textAlign: 'auto',
        marginTop: '2%'
    },
    underline: {
        // marginTop: 10,
        // padding: '5%',
        // backgroundColor: 'pink',
        textDecorationLine: 'underline',
        fontSize: 10,
    },
    imagesContainer: {
        flex: 1,
        // backgroundColor: 'pink',
        // height: 1600,
        flexDirection: 'row',
    },
    leftImagesContainer: {
        flex: 1.5,
        // backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftImages: {
        width: 195,
        height: 241,
        borderRadius: 32,
        overflow: 'hidden',
        // maxWidth: 390,
        // maxHeight: 482,
        marginVertical: '5%',
    },


    rightImagesContainer: {
        flex: 1,
        // backgroundColor: 'yellow',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    rightImages: {
        width: 118,
        height: 150,
        borderRadius: 32,
        overflow: 'hidden',
        // maxWidth: 390,
        // maxHeight: 482,
        marginVertical: '5%',
    },

    buttonstyle: {
        alignSelf: "center",
        width: "98%",
        paddingBottom: "10%",
        // backgroundColor: 'pink',

        height: "11%",

    },
});

export default AnimationScreen;
