import React from "react"
import {SafeAreaView,View,Text} from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { header_styles } from "./styles";
function HeaderFavorite({logOut}){
    return(
        <SafeAreaView style={header_styles.container}>
            <View style={{flexDirection:"row"}} > 
                <Text style={header_styles.text} >FAVORITES</Text>
                <View style={header_styles.icon}>
        <Icon name="logout" size={30} color="black" onPress={logOut} />
      </View>
            </View>
        </SafeAreaView>
    )
}
export default HeaderFavorite;