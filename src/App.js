import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import auth from '@react-native-firebase/auth';
import {Login,Sign} from "./pages/auth"
import {Messages,Favorites} from "./pages/main"
const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();
const hasSession = auth().currentUser;

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign" component={Sign} />
    </Stack.Navigator>
  );
}
function MainStack(){
  return(
    <Tab.Navigator>
    <Tab.Screen name="Mesajlar" component={Messages} />
    <Tab.Screen name="Kayıtar" component={Favorites}/>
  </Tab.Navigator>
  )
}
function App() {
 
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName={hasSession ? 'MainStack' : 'AuthStack'}>
       <Stack.Screen name="AuthStack" component={AuthStack}  />
       <Stack.Screen name="MainStack" component={MainStack} />
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
