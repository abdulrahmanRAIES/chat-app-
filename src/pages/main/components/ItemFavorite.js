import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet,Button} from 'react-native';
import {message_styles} from "./styles"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import moment from 'moment';
export default function ItemFavorite({item}) {
  /*function emailMinus(){
    if(item.email.includes("@gmail.com")){
     return item.email.replace("@gmail.com","")
    }
    if(item.email.includes("@mail.com")){
     return item.email.replace("@mail.com","")
    }
  }
  */
  return (
    <View style={message_styles.container}>
    <View style={message_styles.container_2}>
      <View style={message_styles.text_view}>
        <View style={{flexDirection: 'row'}}> 
        <Icon style={{ paddingRight:7 }} name="note"  color="#039be5" size={25} />
        <Text style={message_styles.text_title}>{item.email}</Text>
        </View>  
      </View>
      <View >
          
          <Text style={message_styles.text}>{item.text}</Text>
      </View>
    </View>
  </View>
  );
}
