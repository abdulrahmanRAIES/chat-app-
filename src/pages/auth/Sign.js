import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {useSign} from './hooks';

function Sign(props) {
  const [email, setEmail] = useState('');
  const [passwordFirst, setPasswordFirst] = useState('first');
  const [passwordSecond, setPasswordSecond] = useState('second');
  const {loading, error, response, sign} = useSign();

  function signUp() {
    if (passwordFirst === passwordSecond) {
      sign(email, passwordFirst);
      alert("OK")
    }
  }
if(response){
    props.navigation.navigate("Login")
}
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          resizeMode="contain"
          source={{
            uri:
              'https://www.offshorecompany.com/wp-content/uploads/2017/12/lion-WHITE-no-background-black-shadow.png',
          }}
          style={styles.logo}
        />

        <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="Email.."
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          onChangeText={(value) => setPasswordFirst(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          onChangeText={(value) => setPasswordSecond(value)}
        />
        <TouchableOpacity style={styles.button} onPress={signUp}>
          <Text style={styles.button_text}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.goBack()}>
          <Text style={styles.button_text}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
export {Sign};
