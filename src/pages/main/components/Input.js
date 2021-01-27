import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Input({onAdd}) {
  const [text, setText] = useState('');
  function add() {
    if (text !== '') {
      onAdd(text);
      setText("")
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        <TextInput
          placeholder="Add something.."
          style={styles.input}
          onChangeText={(value) => setText(value)}
          value={text}
        />
      </View>
      <Icon
        name="send"
        color="#039be5"
        size={25}
        onPress={() => add()}
        style={styles.icon}
      />
    </View>
  );
}
