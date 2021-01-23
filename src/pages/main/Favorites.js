
import React,{useState,useEffect} from "react"
import auth from '@react-native-firebase/auth';
import {SafeAreaView,Text,View, TextInput,FlatList,Button} from "react-native"
import database from '@react-native-firebase/database';
import ItemFavorite from './components/ItemFavorite';

function Favorites(props) {

  const [messageArray, setMessageArray] = useState([]);


  useEffect(() => {
    database()
      .ref(`${auth().currentUser.uid}`)
      .on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        if (!data) {
          return;
        }
        setMessageArray(Object.values(data));
      });
  }, []);

  function logOut() {
    auth()
      .signOut()
      .then(() => props.navigation.replace('AuthStack'));
  }
  const renderTodo = ({item}) => <ItemFavorite item={item} />;
  return (
    <SafeAreaView style={{flex: 1}}>
              <FlatList
        keyExtractor={(item,index) => index.toString()}
        data={messageArray}
        renderItem={renderTodo}
      />
      <View>
        <Button title="Çıkış Yap" onPress={logOut} />
      </View>
    </SafeAreaView>
  );
}
export {Favorites};
