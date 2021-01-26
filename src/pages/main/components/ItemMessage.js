import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Button,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import pencil from 'react-native-vector-icons/EvilIcons'
import moment from 'moment';
import {message_styles} from './styles';

export default function ItemMessage({item, add}) {
  /*
  function emailMinus() {
    if (item.email.includes('@gmail.com')) {
      return item.email.replace('@gmail.com', '');
    }
    if (item.email.includes('@mail.com')) {
      return item.email.replace('@mail.com', '');
    }
  }
  */
  return (
    <View style={message_styles.container}>
      <View style={message_styles.container_2}>
        <View style={message_styles.text_view}>
          <View style={{flexDirection: 'row'}}> 
          <Icon style={{ paddingRight:7 }} name="pencil"  color="#039be5" size={25} onPress={() => add(item)} />
          <Text style={message_styles.text_title}>{item.email}</Text>
          </View>
            <Text style={{fontStyle: 'italic'}}>
              {' '}
              {moment(`${item.time}`, 'MMMM Do YYYY, h:mm:ss a').fromNow()}{' '}
            </Text>
            
        </View>
        <View >
            
            <Text style={message_styles.text}>{item.text}</Text>
        </View>

        

        <View style={message_styles.text_2}>
          <Icon name="heart"  color="#039be5" size={30} onPress={() => add(item)} />
        </View>
      </View>
    </View>
  );
}
