import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, TextInput, FlatList} from 'react-native';
import database from '@react-native-firebase/database';
import Input from './components/Input';
import ItemMessage from './components/ItemMessage';
import auth from '@react-native-firebase/auth';
import moment from 'moment';
function Messages() {
  const [messageArray, setMessageArray] = useState([]);

  useEffect(() => {
    database()
      .ref('public')
      .on('value', (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          return;
        }
        setMessageArray(Object.values(data));
      });
  }, []);

  function addMessage(item) {
    database()
      .ref('public')
      .push({
        text: item,
        email: auth().currentUser.email.split('@mail.com'||'@gmail.com'),
        time: moment().format('MMMM Do YYYY, h:mm:ss a'),
      });
  }
  
  function addfavorite(item) {
    database()
      .ref(`${auth().currentUser.uid}`)
      .push({text: item.text, email: item.email});

    return;
  }
  const renderTodo = ({item}) => <ItemMessage item={item} add={addfavorite} />;

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={messageArray.sort((a, b) => (a.time > b.time ? -1 : 1))}
        renderItem={renderTodo}
      />

      <Input onAdd={addMessage} />
    </SafeAreaView>
  );
}

export {Messages};
