import {AsyncStorage} from 'react-native';
import axios from 'axios';


// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";


const AxiosWithAuth = () => {

  const token = AsyncStorage.getItem("token")

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
       Authorization: `Token ${token}`
    }
  })



//   AsyncStorage.getItem('token', (error, result) => {
//     if(result !== null){
//         return axios.create({
//             headers: {
//               'Content-Type': 'application/json',
//                Authorization: `Token ${result}`
//             }
//           })
//     }
// })
}



export default AxiosWithAuth;