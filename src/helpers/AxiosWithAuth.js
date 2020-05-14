import {AsyncStorage} from "react-native";
import React from "react";
import axios from 'axios';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";


export default function  AxiosWithAuth()  {


    

    return AsyncStorage.getItem('token', (errToken, value) => {
        let token = null;
    

        token = value
        console.log(token ,"topkem before the ,then")
       return axios.create({
                    headers: {

                      'Content-Type': 'application/json',
                       Authorization: `Token ${token}`
                 }
        })
        .then((response)=> {

            console.log(response,"respose for getItem")
            return Promise.resolve(response)
        })
        .catch(error=>{

            console.log(error)
        })

    
})
}

