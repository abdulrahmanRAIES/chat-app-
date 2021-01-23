import React from "react"
import {StyleSheet,Dimensions} from "react-native"

const screenSize = Dimensions.get("window")


const message_styles = StyleSheet.create({
    container : {
      marginTop:20,
      flex:1
    },
    text : {
        fontSize:17,
        paddingTop:10,
        fontStyle:"italic"
    },
    text_title:{
      fontSize:20,
        fontWeight:"bold",
    },
    text_view:{
     flexDirection:"row",
     justifyContent:"space-between"
    },
    container_2 : {
      backgroundColor:'#fff59d',
      borderRadius:20,
      padding:10,
      
      
    },
    text_2 : {
        flexDirection:"row-reverse",
    },

})

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },

  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});
export {message_styles,styles}