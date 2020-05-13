import {AsyncStorage} from "react-native";
import React from "react";
import axios from 'axios';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";



export default async function  axiosWithAuth ()  {


    
    const value =  await AsyncStorage.getItem('token')
         
      return  axios.create({
        headers: {
          'Content-Type': 'application/json',
           Authorization: `Token ${value}`
        }
      })

      

}

