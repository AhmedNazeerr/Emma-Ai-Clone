import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  BackHandler,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/COLORS";
import CustomTextInput from "./CustomTextInput";
import { FlatList } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { chatWithGPT3 } from "../Api/chatgpt";
import { addMessage, addChat } from "../slices/chatsSlice";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomString } from "../utilities/StringGenerator";
import { subtractPoints } from "../slices/pointsSlice";
import renderItem from "./renderItem";
import { useNavigation } from "@react-navigation/native";

const ChatScreen = ({ navigation }) => {
  const route = useRoute();
  const messageReceived = route.params?.message;
  const id = route.params?.id;
  const content = route.params?.content;
  const x = useSelector((state) => state.pointsSlice.points)
  const [points, setPoints] = useState(x);




  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [sendPressed, setSendPressed] = useState(false);
  const [chatID, setChatID] = useState("");
  const [typing, setTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(true);



  const flatListRef = useRef(null);
  // const navigation = useNavigation();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
  //     // Handle back button press
  //     // Your code here
  //    dispatch(saveChats())
  //     // Return true to prevent default back button behavior
  //     return false;
  //   });

  //   return () => backHandler.remove();
  // }, []);

  // useEffect(() => {
  //   const handleBackButton = async () => {
  //     try {
  //       await AsyncStorage.setItem('chats', JSON.stringify(chats));
  //     } catch (error) {
  //       console.log('Error saving chat:', error);
  //     }
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     handleBackButton
  //   );

  //   return () => {
  //     backHandler.remove();
  //   };
  // }, [chats]);

  useEffect(() => {
    setSubmitted(false);
  }, [message]);

  useEffect(() => {
    if (messageReceived) {
      setMessage(messageReceived);
      setSendPressed(true);
    }
  }, []);

  useEffect(() => {
    if (submitted) {
      handleResponseMessage();
    }
  }, [submitted]);

  let messagesArray = [];

  if (id) {
    messagesArray = useSelector(
      (state) =>
        state.chatSlice.chats.find((chat) => chat.id === id)?.messages || []
    );
    if (messagesArray) {
      useEffect(() => {
        setMessages(messagesArray);
      }, []);
    }
  }

  // useEffect(() => {
  //   if (messagesArray) {
  //     setMessages(messagesArray);
  //   }
  // }, [messagesArray]);

  const handleSetChatId = (id) => {
    return new Promise((resolve) => {
      setChatID(id);
      resolve(id);
    });
  };

  const handleSendMessage = async () => {
    if (message.trim() === "") {
      return;
    }

    setPoints(points - 1);
    console.log("points=>", points);
    if (points == 0 || points < 0) {
      navigation.replace("Subscription");
    } else {
      dispatch(subtractPoints({ value: 1, }));
    }


    if (messages.length === 0) {
      const newID = generateRandomString(10);
      const now = new Date();
      const dateString = now.toLocaleDateString();
      const timeString = now.toLocaleTimeString();
      date = dateString + " " + timeString;

      dispatch(
        addChat({
          id: newID,
          title: message,
          date,
        })
      );
      const newid = await handleSetChatId(newID);
      dispatch(
        addMessage({
          chatId: newID,
          id: messages.length,
          message: message.trimEnd(),
          sender: "user",
        })
      );
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages.length + 1,
        message: message.trimEnd(),
        sender: "user",
      },
    ]);

    if (chatID) {
      dispatch(
        addMessage({
          chatId: id,
          id: messages.length,
          message: message.trimEnd(),
          sender: "user",
        })
      );
    }

    setMessage("");
    setTyping(true);
    setSubmitted(true);
    setSendPressed(false);
  };

  const handleResponseMessage = async () => {
    const reply = await chatWithGPT3(messages, content);

    if (reply) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, message: reply, sender: "ChatGPT" },
      ]);

      if (chatID) {
        dispatch(
          addMessage({
            chatId: chatID,
            id: messages.length,
            message: reply,
            sender: "ChatGPT",
          })
        );
      }
    }
    setTyping(false);
  };

  useEffect(() => {
    if (sendPressed) {
      handleSendMessage();
    }
  }, [sendPressed]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.innerContainer}>
        <View style={styles.chatContainer}>
          <View style={{ flex: 1 }}>
            <FlatList
              ref={flatListRef}
              data={messages}
              renderItem={(item) => renderItem(item)}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "flex-end",
              }}
              onLayout={() => {
                if (messages.length > 0) {
                  flatListRef.current.scrollToEnd();
                }
              }}
              onContentSizeChange={() => {
                if (messages.length > 0) {
                  flatListRef.current?.scrollToEnd();
                }
              }}
            />
          </View>

          <CustomTextInput
            message={message}
            setMessage={setMessage}
            addShow={false}
            onPress={() => setSendPressed(true)}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.main,
    paddingBottom: Platform.OS == 'ios' ? '10%' : 0
  },
  innerContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  chatContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  textInput: {
    width: "100%",
    height: 60,
    // marg
  },
});