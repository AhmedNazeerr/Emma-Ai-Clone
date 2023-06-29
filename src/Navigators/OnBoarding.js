
// import React from "react";

// import { createStackNavigator } from "@react-navigation/stack";
// import { CardStyleInterpolators } from "@react-navigation/stack";

// // import YourAiAssistant from "../screens/onBoarding/WelcomeScreen";
// // import HelpUsGrow from "../screens/onBoarding/AvatarScreen";
// // import EnableNotifications from "../screens/onBoarding/ArtworkScreen";

// import AvatarScreen from "../screens/onBoarding/AvatarScreen";
// import ArtworkScreen from "../screens/onBoarding/ArtworkScreen";
// import WelcomeScreen from "../screens/onBoarding/WelcomeScreen";


// import { styles, config } from "../constants/HeaderStyles";
// import AnimationScreen from "../screens/onBoarding/AnimationScreen";
// import AnimeScreen from "../screens/onBoarding/AnimeScreen";


// const Stack = createStackNavigator();

// export default OnBoarding = ({ setFlag }) => {
//   return (
//     <Stack.Navigator
//       initialRouteName="YourAiAssistant"
//       screenOptions={{
//         gestureEnabled: true,
//         gestureDirection: "horizontal",
//         transitionSpec: {
//           open: config,
//           close: config,
//         },
//         headerMode: "float",
//         animationEnabled: true,
//         cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen
//         name="welcomescreen"
//         options={{
//           headerTitle: "Your AI Assistant",
//           headerTintColor: "#FFFFFF",
//           headerStyle: styles.headerStyle,
//           headerTitleStyle: styles.onboardingHeader,
//           headerLeft: null,
//         }}
//       >
//         {(props) => <WelcomeScreen {...props} />}
//       </Stack.Screen>

//       <Stack.Screen
//         name="animationscreen"
//         options={{
//           headerTitle: "Your AI Assistant",
//           headerTintColor: "#FFFFFF",
//           headerStyle: styles.headerStyle,
//           headerTitleStyle: styles.onboardingHeader,
//           headerLeft: null,
//         }}
//       >
//         {(props) => <AnimationScreen {...props} />}
//       </Stack.Screen>
//       <Stack.Screen
//         name="avatarscreen"
//         component={AvatarScreen}
//         options={{
//           headerTitle: "Help Us Grow",
//           headerTintColor: "#FFFFFF",
//           headerStyle: styles.headerStyle,
//           headerTitleStyle: styles.onboardingHeader,
//           headerLeft: null,
//         }}
//       />

//       <Stack.Screen
//         name="animescreen"
//         options={{
//           headerTitle: "Enable Notifications",
//           headerTintColor: "#FFFFFF",
//           headerStyle: styles.headerStyle,
//           headerTitleStyle: styles.onboardingHeader,
//           headerLeft: null,
//         }}
//       >
//         {(props) => <AnimeScreen {...props} />}
//       </Stack.Screen>

//       <Stack.Screen
//         name="artworkscreen"
//         options={{
//           headerTitle: "Enable Notifications",
//           headerTintColor: "#FFFFFF",
//           headerStyle: styles.headerStyle,
//           headerTitleStyle: styles.onboardingHeader,
//           headerLeft: null,
//         }}
//       >
//         {(props) => <ArtworkScreen setFlag={setFlag} {...props} />}
//       </Stack.Screen>
//     </Stack.Navigator>
//   );
// }


import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { CardStyleInterpolators } from "@react-navigation/stack";

// import YourAiAssistant from "../screens/onBoarding/WelcomeScreen";
// import HelpUsGrow from "../screens/onBoarding/AvatarScreen";
// import EnableNotifications from "../screens/onBoarding/ArtworkScreen";

import AvatarScreen from "../screens/onBoarding/AvatarScreen";
import ArtworkScreen from "../screens/onBoarding/ArtworkScreen";
import WelcomeScreen from "../screens/onBoarding/WelcomeScreen";


import { styles, config } from "../constants/HeaderStyles";
import AnimationScreen from "../screens/onBoarding/AnimationScreen";
import AnimeScreen from "../screens/onBoarding/AnimeScreen";


const Stack = createStackNavigator();

export default OnBoarding = ({ setFlag }) => {
  return (
    <Stack.Navigator
      initialRouteName="YourAiAssistant"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        transitionSpec: {
          open: config,
          close: config,
        },
        headerMode: "float",
        animationEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="welcomescreen"
        options={{
          headerTitle: "Your AI Assistant",
          headerTintColor: "#FFFFFF",
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.onboardingHeader,
          headerLeft: null,
        }}
      >
        {(props) => <WelcomeScreen {...props} />}
      </Stack.Screen>

      <Stack.Screen
        name="animationscreen"
        options={{
          headerTitle: "Your AI Assistant",
          headerTintColor: "#FFFFFF",
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.onboardingHeader,
          headerLeft: null,
        }}
      >
        {(props) => <AnimationScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="avatarscreen"
        component={AvatarScreen}
        options={{
          headerTitle: "Help Us Grow",
          headerTintColor: "#FFFFFF",
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.onboardingHeader,
          headerLeft: null,
        }}
      />

      <Stack.Screen
        name="animescreen"
        options={{
          headerTitle: "Enable Notifications",
          headerTintColor: "#FFFFFF",
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.onboardingHeader,
          headerLeft: null,
        }}
      >
        {(props) => <AnimeScreen  {...props} />}
      </Stack.Screen>

      <Stack.Screen
        name="artworkscreen"
        options={{
          headerTitle: "Enable Notifications",
          headerTintColor: "#FFFFFF",
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.onboardingHeader,
          headerLeft: null,
        }}
      >
        {(props) => <ArtworkScreen setFlag={setFlag} {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}