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
     justifyContent:"space-between",
     borderBottomWidth:1,
      borderColor:"gray"
  

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
    padding: 10,
    borderRadius: 5,
    position:"absolute",
    width:screenSize.width,
    bottom:10,
    flexDirection:"row"
  },

  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  icon:{
    padding: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    position:"absolute",
    right:15,
    bottom:23

    
  },
  input_container:{
    padding: 5,
    borderColor: '#bdbdbd',
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 1,
    justifyContent: 'center',
  }
});
const header_styles=StyleSheet.create({
  container:{
    backgroundColor:"#fff59d",padding:8,borderRadius:25
  },
  text:{
    fontSize:30, fontWeight:"bold"
  },
  icon:{
    position:"absolute",right:0,top:3
  }
})
export {message_styles,styles, header_styles}