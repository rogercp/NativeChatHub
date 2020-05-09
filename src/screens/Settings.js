import React, {useEffect} from "react";
import { Button, StyleSheet,View,FlatList,Text } from "react-native";
import AxiosWithAuth from '../helpers/AxiosWithAuth'
import Axios from "axios";
import NavBar from '../components/NavBar'
import { Icon } from 'react-native-elements'
import {AsyncStorage} from 'react-native';


const Settings = (props) => {


   useEffect(() => {
    // const token = AsyncStorage.getItem("token")
    // console.log(token,"token")
    
    console.log(AxiosWithAuth(),"axios")

       }, [])

       const logout = () =>{
           console.log("hitting")
        AsyncStorage.getItem('token', (error, result) => {
            if(result !== null){
                console.log("hitting",result)
            }
    })
        AsyncStorage.removeItem('token');
        props.navigation.navigate('Home')

        AsyncStorage.getItem('token', (error, result) => {
            if(result !== null){
                console.log("hitting",result)
            }
    })
        
       }

  return (
<>
<View style={{marginLeft:'auto'}}>
<Icon
   
        raised
        name='sign-out'
        type='font-awesome'
        color='#003d99'
        onPress={() => logout}/>
</View>
   
   <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
   

   
       
        <NavBar navigate={props.navigation.navigate}   props={props}/>

        


   <Text>Settings</Text>
   



   </View>

</>
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

export default Settings;