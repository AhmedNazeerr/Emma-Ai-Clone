import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

import React from 'react';
import { COLORS } from '../constants/COLORS';

const ChatHomeItem = ({ title, icon, title1, title2, setMessage, leftStyle }) => {

  const button = (title) => {
    return (
      <TouchableOpacity style={title.length < 36 ? styles.smallItem : styles.largeItem} onPress={() => setMessage(title)}>
        <Text style={styles.textStyle}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Card mode="outlined" style={title1.length < 36 ? styles.smallCard : styles.bigCard}>
      <Card.Title
        title={title}
        titleStyle={styles.Title}
        left={() => icon}
        leftStyle={leftStyle} />
      <Card.Content style={styles.content}>
        {button(title1)}
        {button(title2)}
      </Card.Content>
    </Card>
  );
};

export default ChatHomeItem;

const styles = StyleSheet.create({
  smallCard: {
    borderColor: COLORS.darkLight,
    backgroundColor: COLORS.darkLight,
    marginHorizontal: 8,
    marginVertical: 10,
    height: 183
  },
  bigCard: {
    borderColor: COLORS.darkLight,
    backgroundColor: COLORS.darkLight,
    marginHorizontal: 8,
    marginVertical: 10,
    height: 210
  },
  Title: {
    alignSelf: 'center',
    //fontWeight: 'bold',
    fontSize: 17,
    bottom: 5,
    color: '#7f7f7f',
    fontFamily: 'JosefinSans-Bold'
  },
  textStyle: {
    color: COLORS.black,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'JosefinSans-Medium'
  },
  smallItem: {
    backgroundColor: COLORS.darkestLight,
    height: 55,
    borderRadius: 10,
    marginVertical: 5,
    justifyContent: 'center',
    padding: 10
  },
  largeItem: {
    backgroundColor: COLORS.darkestLight,
    height: "40%",
    borderRadius: 10,
    marginVertical: 5,
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  content: {
    bottom: 25,
    //alignSelf:'center'
  }
});
