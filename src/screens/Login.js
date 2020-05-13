import React,{useState,useEffect} from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity,TextInput } from "react-native";
import {AsyncStorage} from "react-native";
import { StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Input } from 'react-native-elements';
// import deviceStorage from '../helpers/deviceStorage'

import axios from 'axios';


const Login = (props) => {

    const [userInfo,setUserInfo] = useState({

        // email:'',
        username:'',
        password:'',
        
        })

       useEffect(() => {
        StatusBar.setHidden(true);
       }, [])

       
       

    //    const login = () =>{
    //     axios
    //     .post('http://192.168.68.103:8000/user/login/',userInfo)
    //     .then(res => {

    //     AsyncStorage.setItem('token', res.data.key);
        
    //     }).then(
    //         AsyncStorage.getItem('token', (error, result) => {
    //             if(result !== null){
    //                 console.log("hitting",result)
    //                 props.navigation.navigate('UserHome')
    //             }
    //     })
    //     )
    //     .catch(err => {
          
    //         console.log(err)
    //     });
    
    
    // }




    const login = () =>{
        axios
        .post('http://192.168.68.103:8000/user/login/',userInfo)
        .then(res => {
            
            
                setValue = async () => {
                    try {
                    await AsyncStorage.setItem('token', `${res.data.key}`)
                    } catch (e) {
                    // saving error
                    }
                }
                setValue()

                getMyValue = async () => {

                    try {
                    const value = await AsyncStorage.getItem('token')
                      if(value !== null) {
                        props.navigation.navigate('UserHome')
                    }
                    } catch(e) {
                      // error reading value
                    }
                  }
                  getMyValue()
                            
             
        })
        
    
        .catch(err => {
          
            console.log(err)
        });
    
    }





        
            return (
                <KeyboardAwareScrollView contentContainerStyle={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',backgroundColor:"lightgrey"}}>
      <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',backgroundColor:"lightgrey"}}>
                {/* keyboardAppearance="dark" */}

                {/* <TextInput 
                name = 'email'
                placeholder='email'
                autoCapitalize = "none"
                autoCorrect= {false}
                style={styles.input} 
                value= {userInfo.email}</Text>
         */}
                <Input 
               keyboardAppearance="dark"
                name = 'username'
                placeholder='username'
                autoCapitalize = "none"
                autoCorrect= {false}
                style={styles.input} 
                value={userInfo.username}
                onChangeText={(newValue)=>setUserInfo({...userInfo,username:newValue})}
                />
                <Text> {userInfo.username}</Text>
        
                <Input 
                keyboardAppearance="dark"
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
              </KeyboardAwareScrollView>
              
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
