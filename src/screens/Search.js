import React, {useEffect} from "react";
import { Text, StyleSheet,Button,View,Image,ImageBackground} from "react-native";
import AxiosWithAuth from '../helpers/AxiosWithAuth'
import Axios from "axios";
import NavBar from '../components/NavBar'


const Search = (props) => {


   useEffect(() => {
    // const token = AsyncStorage.getItem("token")
    // console.log(token,"token")
    
    console.log(AxiosWithAuth(),"axios")

       }, [])

  return (

   <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
   <Text>Search</Text>
   <NavBar navigate={props.navigation.navigate}   props={props}/>

   </View>


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

export default Search;