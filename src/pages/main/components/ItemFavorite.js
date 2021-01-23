import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet,Button} from 'react-native';
import {message_styles} from "./styles"
export default function ItemFavorite({item}) {
  return (
    <View style={message_styles.container}>
      
    <View style={message_styles.container_2}>
        <Text style={message_styles.text}>{item.email}</Text>
        <Text style={message_styles.text}>{item.text}</Text>
        <View style={message_styles.text_2}>
                   
        </View>
    </View>
</View>
  );
}
