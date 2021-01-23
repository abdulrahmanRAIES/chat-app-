import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet,Button,Dimensions} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"

import {message_styles} from "./styles"

export default function ItemMessage({item,add}) {
  return (
    <View style={message_styles.container}>
      
    <View style={message_styles.container_2}>
        <Text style={message_styles.text}>{item.email}</Text>
        <Text style={message_styles.text}>{item.text}</Text>
        <View style={message_styles.text_2}>
           
            <TouchableOpacity onPress={() =>add(item)}>
            <Text>Add to favorite</Text>
            </TouchableOpacity>
            
        </View>
    </View>
</View>
  );
}