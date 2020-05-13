import React, {useEffect,useState} from "react";
import { Text, StyleSheet,Button,View,Image,ImageBackground} from "react-native";
// import {axiosWithAuth} from '../helpers/AxiosWithAuth'
import axios from "axios";
import NavBar from '../components/NavBar'
// import {AsyncStorage} from 'react-native';
// import {AsyncStorage} from "react-native";
// import axios from 'axios';

const UserHome = (props) => {

    const [userInfo,setUserInfo]= useState({


    })


   useEffect(() => {
    // initUser()  
    axiosWithAuth()
       }, [])

       

        // const value =  AsyncStorage.getItem('token');
        // console.log(value)

        // async function  axiosWithAuth ()  {


    
        //     const value =  await AsyncStorage.getItem('token')
                 
        //       return  axios.create({
        //         headers: {
        //           'Content-Type': 'application/json',
        //            Authorization: `Token ${value}`
        //         }
        //       })
        
              
        
        // }

        axiosWithAuth = async () => {
            try {
              const value = await AsyncStorage.getItem('token')

              if(value !== null) {

                axios.get('http://192.168.68.103:8000/user/init/',
            {
                headers: {
                  'Content-Type': 'application/json',
                   Authorization: `Token ${value}`
                }
              })

              .then(res => {
                console.log('init', res)
                console.log(res.data)
                
                })
                .catch(err => {
                
                    console.log(err)
                });

              }
            
            } catch(e) {
              // read error
            }
          
            console.log('Done.')
          
          }
      
        // const initUser = ()=>{
            
        //     axiosWithAuth().get('http://192.168.68.103:8000/user/init/')
        //     .then(res => {
        //         console.log('init', res)
        //         console.log(res.data)
                
        //         })
        //         .catch(err => {
                
        //             console.log(err)
        //         });
            
            
        // }

        //    const initUser = async()=>{
        //     getMyValue = async () => {
        //         try {
        //           const value = await AsyncStorage.getItem('token')
        //           console.log(value,"valuye in axios")
        //           axios.get('http://192.168.68.103:8000/user/init/',{

        //             headers: {
        //                 'Content-Type': 'application/json',
        //                  Authorization: `Token ${value}`
        //               }

        //           })
        //           .then(res => {

        //               console.log(res.data)
                      
        //               })
        //               .catch(err => {
                      
        //                   console.log(err)
        //               });
        //         } catch(e) {
        //           // read error
        //         }
              
        //         console.log('Done.')
              
        //       }


           
            
            
        // }



  return (
<>

   <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
   <Text>Hello is anyone there</Text>
   
   <NavBar navigate={props.navigation.navigate}   props={props}/>
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

export default UserHome;
