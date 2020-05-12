import {AsyncStorage} from "react-native";
import axios from 'axios';


// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";


const AxiosWithAuth = (props) => {


const token = null

    getMyValue = async () => {
        try {
        const value = await AsyncStorage.getItem('token')
          if(value !== null) {
            token = JSON.parse(value)
            console.log(token , "tokerererererererere")
        }
        } catch(e) {
          // error reading value
        }
      }
      getMyValue()
      console.log(token , "token in Axios with auth")
      return axios.create({
                  headers: {
                    'Content-Type': 'application/json',
                     Authorization: `Token ${token}`
                  }
                })



// getData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('token')
//       if(value !== null) {
//        token = JSON.parse(value)
      
//         return
//          axios.create({
//             headers: {
//               'Content-Type': 'application/json',
//                Authorization: `Token ${token}`
//             }
//           })

       
       
//       }
//     } catch(e) {
//         console.log(e,"error")
//       // error reading value
//     }
//   }






// getData = async () => {
    
//       const value = await AsyncStorage.getItem('token')
//       .then(res=>{
//         console.log(res)
//         token = JSON.parse(value)
//         axios.create({
//            headers: {
//              'Content-Type': 'application/json',
//               Authorization: `Token ${token}`
//            }
//          })
//       }
              
//       )
//       .catch(err => {
          
//         console.log(err)
//     });
      
// } 
  
  
console.log(getData(),"function call")

}



export default AxiosWithAuth;