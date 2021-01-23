import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {styles} from "./styles"

export default function Input({onAdd}) {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ekle bir şeyler.."
        style={styles.input}
        onChangeText={(value) => setText(value)}
      />
      <Button title="Ekle"   onPress={() => onAdd(text)} />
    </View>
  );
}
