import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color}) =>
        generateIcon(focused, color, route),
      tabBarLabel: () => null,
    })}
    tabBarOptions={{
      activeTintColor: '#fff59d',
      inactiveTintColor: 'gray',
    }}>
    <Tab.Screen name="Messages" component={Messages} />
    <Tab.Screen name="Favorites" component={Favorites}/>
  </Tab.Navigator>
  )
}
function App() {
 
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName={hasSession ? 'MainStack' : 'AuthStack'} screenOptions={{header: () => null}}>
       <Stack.Screen name="AuthStack" component={AuthStack}  />
       <Stack.Screen name="MainStack" component={MainStack} />
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
function generateIcon(focused, color, route) {
  let iconName;
  switch (route.name) {
    case 'Messages':
      iconName = focused ? 'message' : 'message-outline';
      break;
    case 'Favorites':
      iconName = focused ? 'heart' : 'heart-outline';
      break;
    default:
      break;
  }
  return <Icon name={iconName} color={color} size={30} />;
}