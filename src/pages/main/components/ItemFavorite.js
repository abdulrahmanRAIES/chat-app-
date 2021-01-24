import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet,Button} from 'react-native';
import {message_styles} from "./styles"
export default function ItemFavorite({item}) {
  function emailMinus(){
    if(item.email.includes("@gmail.com")){
     return item.email.replace("@gmail.com","")
    }
    if(item.email.includes("@mail.com")){
     return item.email.replace("@mail.com","")
    }
  }
  return (
    <View style={message_styles.container}>
      
    <View style={message_styles.container_2}>
        <Text style={message_styles.text_title}>{emailMinus()}</Text>
        <Text style={message_styles.text}>{item.text}</Text>
        <View style={message_styles.text_2}>
                   
        </View>
    </View>
</View>
  );
}
