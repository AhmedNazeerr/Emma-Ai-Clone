// import { COLORS } from "../../constants/COLORS";
// import React, { useEffect, useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Button, ActivityIndicator } from "react-native-paper";
// import {
//   PurchaseError,
//   requestSubscription,
//   useIAP,
//   withIAPContext,
//   validateReceiptIos,
// } from "react-native-iap";

// const errorLog = ({ message, error }) => {
//   console.error("An error happened", message, error);
// };

// const isIos = Platform.OS === "ios";

// const ITUNES_SHARED_SECRET = "48aa6328291a4601bd1dba78b21419b4";

// const Subscription = ({ navigation }) => {
//   const {
//     connected,
//     subscriptions,
//     getSubscriptions,
//     currentPurchase,
//     finishTransaction,
//     purchaseHistory,
//   } = useIAP();

//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState(2);

//   const SubTitle = ({ icon, text }) => {
//     return (
//       <View style={{ flexDirection: "row" }}>
//         <Text style={styles.subTitle}>{text}</Text>
//       </View>
//     );
//   };

//   const CustomButton = ({ text, num, onPress }) => {
//     return (
//       <Button
//         mode="outlined"
//         style={[
//           styles.Button,
//           {
//             borderColor:
//               status === num ? COLORS.black : COLORS.darkestLight,
//             borderWidth: status === num ? 0.5 : 1,
//           },
//         ]}
//         labelStyle={{ color: COLORS.black }}
//         contentStyle={{ alignSelf: "flex-start" }}
//         buttonColor={status === num ? "#40e6b4" : null}
//         onPress={onPress}
//       >
//         {text}
//       </Button>
//     );
//   };

//   useEffect(() => {
//     const handleGetPurchaseHistory = async () => {
//       try {
//         await getSubscriptions();
//       } catch (error) {
//         errorLog({ message: "handleGetPurchaseHistory", error });
//       }
//     };

//     if (connected) {
//       handleGetPurchaseHistory();
//     }
//   }, [connected, getSubscriptions]);

//   useEffect(() => {
//     if (
//       purchaseHistory.find(
//         (x) =>
//           x.productId === (subscriptions?.[0]?.productId || subscriptions?.[1]?.productId)
//       )
//     ) {
//       navigation.navigate("Home");
//     }
//   }, [connected, purchaseHistory, subscriptions, navigation]);

//   const handleBuySubscription = async (productId) => {
//     try {
//       await requestSubscription({
//         sku: productId,
//       });
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       if (error instanceof PurchaseError) {
//         errorLog({ message: `[${error.code}]: ${error.message}`, error });
//       } else {
//         errorLog({ message: "handleBuySubscription", error });
//       }
//     }
//   };

//   useEffect(() => {
//     const checkCurrentPurchase = async (purchase) => {
//       if (purchase) {
//         try {
//           const receipt = purchase.transactionReceipt;
//           if (receipt && isIos) {
//             const isTestEnvironment = __DEV__;
//             const appleReceiptResponse = await validateReceiptIos(
//               {
//                 "receipt-data": receipt,
//                 password: ITUNES_SHARED_SECRET,
//               },
//               isTestEnvironment
//             );

//             if (appleReceiptResponse) {
//               const { status } = appleReceiptResponse;
//               if (status) {
//                 navigation.navigate("Home");
//               }
//             }
//           }
//         } catch (error) {
//           console.log("error", error);
//         }
//       }
//     };
//     checkCurrentPurchase(currentPurchase);
//   }, [currentPurchase, finishTransaction, navigation]);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={[{ color: COLORS.black }, styles.title]}>GET ACCESS TO:</Text>
//       <View style={styles.fishing}>
//         <SubTitle text={"Unlimited Questions & Answers"} />
//         <SubTitle text={"Higher Word Limit"} />
//         <SubTitle text={"Most Advanced AI Model (ChatGPT & GPT-4)"} />
//         <SubTitle text={"Try 3 Days for Free"} />
//       </View>
//       <View style={{ flex: 1, justifyContent: "flex-end" }}>
//         {subscriptions?.map((subscription, index) => {
//           const owned = purchaseHistory.find(
//             (s) => s?.productId === subscription.productId
//           );
//           return (
//             <View style={styles.box} key={index}>
//               {subscription?.introductoryPriceSubscriptionPeriodIOS && (
//                 <Text style={styles.specialTag}>SPECIAL OFFER</Text>
//               )}
//               <View
//                 style={{
//                   flex: 1,
//                   flexDirection: "row",
//                   justifyContent: "space-between",
//                   marginTop: 10,
//                 }}
//               >
//                 <Text
//                   style={{
//                     paddingBottom: 10,
//                     fontWeight: "bold",
//                     fontSize: 18,
//                     textTransform: "uppercase",
//                   }}
//                 >
//                   {subscription?.title}
//                 </Text>
//                 <Text
//                   style={{
//                     paddingBottom: 20,
//                     fontWeight: "bold",
//                     fontSize: 18,
//                   }}
//                 >
//                   {subscription?.localizedPrice}
//                 </Text>
//               </View>
//               {subscription?.introductoryPriceSubscriptionPeriodIOS && (
//                 <Text>
//                   Free for 1{" "}
//                   {subscription?.introductoryPriceSubscriptionPeriodIOS}
//                 </Text>
//               )}
//               <Text style={{ paddingBottom: 20 }}>
//                 {subscription?.description}
//               </Text>
//               {owned && (
//                 <Text style={{ textAlign: "center", marginBottom: 10 }}>
//                   You are Subscribed to this plan!
//                 </Text>
//               )}
//               {owned && (
//                 <TouchableOpacity
//                   style={[
//                     styles.button,
//                     { backgroundColor: "#0071bc" },
//                   ]}
//                   onPress={() => {
//                     navigation.navigate("Home");
//                   }}
//                 >
//                   <Text style={styles.buttonText}>Continue to App</Text>
//                 </TouchableOpacity>
//               )}
//               {loading && <ActivityIndicator size="large" />}
//               {!loading && !owned && isIos && (
//                 <TouchableOpacity
//                   style={styles.button}
//                   onPress={() => {
//                     setLoading(true);
//                     handleBuySubscription(subscription.productId);
//                   }}
//                 >
//                   <Text style={styles.buttonText}>Subscribe</Text>
//                 </TouchableOpacity>
//               )}
//             </View>
//           );
//         })}
//         {/* <CustomButton
//           text={"$2250.0/week"}
//           num={1}
//           onPress={() => {r
//             setLoading(true);
//             handleBuySubscription("theharismSheraAi");
//           }}
//         /> */}
//         <CustomButton
//           text={"3 days for free"}
//           num={2}
//           onPress={() => {
//             setLoading(true);
//             handleBuySubscription("theharismSheraAi");
//           }}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.white,
//     paddingTop: 10,
//     paddingHorizontal: 15,
//   },
//   title: {
//     fontSize: 22,
//     paddingBottom: 15,
//   },
//   fishing: {
//     borderBottomColor: COLORS.gray,
//     borderBottomWidth: 1,
//     paddingBottom: 15,
//     marginBottom: 20,
//   },
//   subTitle: {
//     fontSize: 16,
//     paddingVertical: 5,
//   },
//   box: {
//     borderWidth: 1,
//     borderColor: COLORS.gray,
//     borderRadius: 5,
//     padding: 15,
//     marginBottom: 15,
//   },
//   specialTag: {
//     position: "absolute",
//     top: 0,
//     right: 0,
//     backgroundColor: COLORS.green,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     color: COLORS.white,
//     fontWeight: "bold",
//     textTransform: "uppercase",
//     borderRadius: 5,
//     fontSize: 12,
//   },
//   button: {
//     backgroundColor: COLORS.primary,
//     borderRadius: 10,
//     padding: 10,
//     marginVertical: 10,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: COLORS.white,
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default withIAPContext(Subscription);








import { COLORS } from "../../constants/COLORS";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ActivityIndicator } from "react-native-paper";

const Subscription = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(2);

  const SubTitle = ({ text }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.subTitle}>{text}</Text>
      </View>
    );
  };

  const CustomButton = ({ text, num, onPress }) => {
    return (
      <Button
        mode="outlined"
        style={[
          styles.Button,
          {
            borderColor:
              status === num ? COLORS.black : COLORS.darkestLight,
            borderWidth: status === num ? 0.5 : 1,
          },
        ]}
        labelStyle={{ color: COLORS.black }}
        contentStyle={{ alignSelf: "flex-start" }}
        buttonColor={status === num ? "#40e6b4" : null}
        onPress={onPress}
      >
        {text}
      </Button>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[{ color: COLORS.black }, styles.title]}>GET ACCESS TO:</Text>
      <View style={styles.fishing}>
        <SubTitle text={"Unlimited Questions & Answers"} />
        <SubTitle text={"Higher Word Limit"} />
        <SubTitle text={"Most Advanced AI Model (ChatGPT & GPT-4)"} />
        <SubTitle text={"Try 3 Days for Free"} />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View style={styles.box}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                paddingBottom: 10,
                fontWeight: "bold",
                fontSize: 18,
                textTransform: "uppercase",
              }}
            >
              Subscription Title
            </Text>
            <Text
              style={{
                paddingBottom: 20,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              $9.99
            </Text>
          </View>
          <Text style={{ paddingBottom: 20 }}>
            Subscription Description
          </Text>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: "#0071bc" },
            ]}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.buttonText}>Continue to App</Text>
          </TouchableOpacity>
        </View>
        {loading && <ActivityIndicator size="large" />}
        {!loading && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setLoading(true);
              // handleBuySubscription(subscription.productId);
            }}
          >
            <Text style={styles.buttonText}>Subscribe</Text>
          </TouchableOpacity>
        )}
        <CustomButton
          text={"3 days for free"}
          num={2}
          onPress={() => {
            setLoading(true);
            // handleBuySubscription("theharismSheraAi");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 22,
    paddingBottom: 15,
  },
  fishing: {
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    paddingVertical: 5,
  },
  box: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Subscription;