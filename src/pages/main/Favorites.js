import React from 'react';
import auth from '@react-native-firebase/auth';
import {SafeAreaView, Text, View, Button} from 'react-native';
function Favorites(props) {
  function logOut() {
    auth()
      .signOut()
      .then(() => props.navigation.replace('AuthStack'));
  }
  return (
    <SafeAreaView>
      <View>
        <Text>Favorites Page</Text>
        <Button title="Çıkış Yap" onPress={logOut} />
      </View>
    </SafeAreaView>
  );
}
export {Favorites};
