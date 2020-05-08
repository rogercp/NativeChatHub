import React,{useState,useEffect} from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity,TextInput } from "react-native";
import {AsyncStorage} from 'react-native';
import axios from 'axios';


const Login = (props) => {

    const [userInfo,setUserInfo] = useState({

        // email:'',
        username:'',
        password:'',
        
        })

    //    useEffect(() => {
       
    //     console.log(fetch('http://192.168.68.103.:8000/user/init'))
    //    }, [])

       
       

       const login = () =>{
        axios
        .post('http://192.168.68.103:8000/user/login/',userInfo)
        .then(res => {

        AsyncStorage.setItem('token', res.data.key);
        
        }).then(
            AsyncStorage.getItem('token', (error, result) => {
                if(result !== null){
                    console.log("hitting",result)
                    props.navigation.navigate('UserHome')
                }
        })
        )
        .catch(err => {
          
            console.log(err)
        });
    
    
    }



        
            return (
              <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',backgroundColor:"lightgrey"}}>
        
                <Text style={{fontSize:30}}>Login</Text>
        
                {/* <TextInput 
                name = 'email'
                placeholder='email'
                autoCapitalize = "none"
                autoCorrect= {false}
                style={styles.input} 
                value={userInfo.email}
                onChangeText={(newValue)=>setUserInfo({...userInfo,email:newValue})}
                />
                <Text> {userInfo.email}</Text>
         */}
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
                name = 'password'
                placeholder='password'
                autoCapitalize = "none"
                autoCorrect= {false}
                style={styles.input} 
                value={userInfo.password}
                onChangeText={(newValue)=>setUserInfo({...userInfo,password:newValue})}
                />
                <Text> {userInfo.password}</Text>
        
        
                <View style={styles.buttonBox}>
                <Button
                    style={styles.button}
                    onPress={login}
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

export default Login;
