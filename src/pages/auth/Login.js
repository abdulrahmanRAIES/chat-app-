import React,{useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useLogin } from './hooks';
import styles from './styles';
function Login(props) {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const {loading,error,response,signIn}=useLogin()

  if(response){
    props.navigation.navigate("MainStack")
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
          placeholder="Enter Email.."
          onChangeText={(value)=>setEmail(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password.."
          secureTextEntry={true}
          onChangeText={(value)=>setPassword(value)}
        />
        <TouchableOpacity style={styles.button} onPress={()=>signIn(email,password)}>
          <Text style={styles.button_text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Sign')}>
          <Text style={styles.button_text}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
export {Login};
