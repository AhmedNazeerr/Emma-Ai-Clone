import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Dimensions,
  Easing,
  Platform,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import React, { useState, useEffect } from "react";

import {
  NavigationContainer,
  useFocusEffect,
  useIsFocused,
} from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { CardStyleInterpolators } from "@react-navigation/stack";

import ChatHome from "../screens/chat/ChatHome";
import ExploreHome from "../screens/explore/ExploreHome";
import RecentsHome from "../screens/recents/RecentsHome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { styles, FadeInView, config, customHeaderLeft, customHeaderRight } from "../constants/HeaderStyles";
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from "../constants/COLORS";







const Tab = createBottomTabNavigator();

export default Home = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Chat"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: COLORS.main,
            borderTopWidth: 1,
            height: Platform.OS === 'ios' ? 120 : 75,

            borderTopColor: COLORS.darkestLight,
            animate: true,
            interpolate: CardStyleInterpolators.forHorizontalIOS,
          },
          tabBarLabelStyle: {
            bottom: 15,
            fontFamily: "JosefinSans-Medium",
            fontSize: 14,
          },
          tabBarActiveTintColor: COLORS.black,
          headerShown: false,
          tabBarHideOnKeyboard: true,
          //tabBarButton: (props) => <SlideInView>{props.children}</SlideInView>,
        }}
      >
        <Tab.Screen
          name="Chat"
          component={ChatHome}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="ios-chatbubbles-outline"
                size={27}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreHome}
          options={{
            tabBarLabel: "Explore",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="image-search" size={27} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Recents"
          component={RecentsHome}
          options={{
            tabBarLabel: "Recents",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-timer-outline" size={27} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}