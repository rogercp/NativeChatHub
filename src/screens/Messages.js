import React, {useEffect,useState} from "react";
import { Text, StyleSheet,Button,View,ScrollView,ImageBackground} from "react-native";
import AxiosWithAuth from '../helpers/AxiosWithAuth'
import Axios from "axios";
import NavBar from '../components/NavBar'
import { GiftedChat } from 'react-native-gifted-chat'


const Messages = (props) => {


   useEffect(() => {
    
    
    console.log(AxiosWithAuth(),"axios")

       }, [])


     

  return (

   <ScrollView contentContainerStyle={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
   <Text>Messages</Text>
   <Button
    style={styles.button}
     onPress={() => props.navigation.navigate('WriteMessage')}
        title="click to open messageer"
      />
 <NavBar  navigate={props.navigation.navigate}   props={props}/>
 

</ScrollView>


    


  )
};

const styles = StyleSheet.create({
buttonBox:{
  marginBottom: 10,
  width: "40%",
  borderRadius: 6,
  backgroundColor:'white'
 },
  text: {
    zIndex:10,
    fontSize: 30,
    color:"#0275d8"
  }
});

export default Messages;
