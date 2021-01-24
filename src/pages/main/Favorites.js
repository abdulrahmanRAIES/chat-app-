
import React,{useState,useEffect} from "react"
import auth from '@react-native-firebase/auth';
import {SafeAreaView,Text,View, TextInput,FlatList,Button} from "react-native"
import database from '@react-native-firebase/database';
import ItemFavorite from './components/ItemFavorite';
import HeaderFavorite from "./components/HeaderFavorite"
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
              ListHeaderComponent={<HeaderFavorite logOut={logOut} />}
        keyExtractor={(item,index) => index.toString()}
        data={messageArray}
        renderItem={renderTodo}
      />
      
    </SafeAreaView>
  );
}
export {Favorites};
