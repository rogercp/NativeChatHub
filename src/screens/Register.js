import React,{useState,useEffect} from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity,TextInput } from "react-native";
import {AsyncStorage} from 'react-native';
import axios from 'axios';


const Register = (props) => {
const [userInfo,setUserInfo] = useState({

// email:'',
username:'',
password1:'',
password2:''

})



useEffect(() => {
    
}, [])


console.log(userInfo, "post")


const register = () =>{
fetch('http://192.168.68.103:8000/user/registration', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(userInfo),
});
}



// const register = () =>{

//     axios
//     .post('http://192.168.68.103.:8000/user/registration',userInfo)
//     .then(res => {
//       console.log(res.data, "post")
//       uuid =res.data.uuid
//       email =res.data.email
//       username =res.data.username
//       token =res.data.token
//       AsyncStorage.setItem('id', uuid);
//       AsyncStorage.setItem('email', email);
//       AsyncStorage.setItem('username', username);
//       AsyncStorage.setItem('token', token);
    
//     }).then(

//         AsyncStorage.getItem('token', (error, result) => {
//             if(result !== null){
//                 console.log("hitting")
//                 props.navigation.navigate('UserHome')
//             }
//     })
//     )
//     .catch(err => {
      
//         console.log("errorq1")
//     });


// }


    

    return (
      <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',backgroundColor:"lightgrey"}}>

        <Text style={{fontSize:30}}>Register</Text>
        {/* <TextInput 
        name = 'email'
        placeholder='email'
        autoCapitalize = "none"
        autoCorrect= {false}
        style={styles.input} 
        value={userInfo.email}
        onChangeText={(newValue)=>setUserInfo({...userInfo,email:newValue})}
        />
        <Text> {userInfo.email}</Text> */}

        <TextInput 
        name = 'username'
        placeholder='username'
        autoCapitalize = "none"
        autoCorrect= {false}
        style={styles.input} 
        value={userInfo.username}
        onChangeText={(newValue)=>setUserInfo({...userInfo,username:newValue})}
        />
        <Text> {userInfo.username}</Text>

        <TextInput 
        name = 'password1'
        placeholder='password'
        autoCapitalize = "none"
        autoCorrect= {false}
        style={styles.input} 
        value={userInfo.password1}
        onChangeText={(newValue)=>setUserInfo({...userInfo,password1:newValue})}
        />
        <Text> {userInfo.password1}</Text>

        <TextInput 
        name = 'password2'
        placeholder='validate password'
        autoCapitalize = "none"
        autoCorrect= {false}
        style={styles.input} 
        value={userInfo.password2}
        onChangeText={(newValue)=>setUserInfo({...userInfo,password2:newValue})}
        />
        <Text> {userInfo.password2}</Text>

        <View style={styles.buttonBox}>
        <Button
            onPress={register}
            style={styles.button}
                
                title="Enter"
            />
        </View>
        
      </View>
      
    )
  };
  
  const styles = StyleSheet.create({
    input: {
    width:'80%',
    height:40,
      margin:15,
      borderColor:'black',
      borderWidth:1
    },
    buttonBox:{
        marginBottom: 10,
        width: "40%",
        borderRadius: 6,
        backgroundColor:'white'
       },
});

export default Register;