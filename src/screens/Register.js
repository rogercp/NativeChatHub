import React,{useState} from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity,TextInput } from "react-native";


const Register = (props) => {
const [userInfo,setUserInfo] = useState({

email:'',
username:'',
password:'',
validatePassword:''


})


    return (
      <View>
  
        <TextInput 
        name = 'email'
        autoCapitalize = "none"
        autoCorrect= {false}
        style={styles.input} 
        value={userInfo.email}
        onChangeText={(newValue)=>setUserInfo({...userInfo,email:newValue})}
        />
        <Text> {userInfo.email}</Text>

        <TextInput 
        name = 'username'
        autoCapitalize = "none"
        autoCorrect= {false}
        style={styles.input} 
        value={userInfo.username}
        onChangeText={(newValue)=>setUserInfo({...userInfo,username:newValue})}
        />
        <Text> {userInfo.username}</Text>

        <TextInput 
        name = 'password'
        autoCapitalize = "none"
        autoCorrect= {false}
        style={styles.input} 
        value={userInfo.password}
        onChangeText={(newValue)=>setUserInfo({...userInfo,password:newValue})}
        />
        <Text> {userInfo.password}</Text>

        <TextInput 
        name = 'validatePassword'
        autoCapitalize = "none"
        autoCorrect= {false}
        style={styles.input} 
        value={userInfo.validatePassword}
        onChangeText={(newValue)=>setUserInfo({...userInfo,validatePassword:newValue})}
        />
        <Text> {userInfo.validatePassword}</Text>

        <View style={styles.buttonBox}>
   <Button
    style={styles.button}
        
        title="Enter"
      />
   </View>
        
      </View>
      
    )
  };
  
  const styles = StyleSheet.create({
    input: {
      margin:15,
      borderColor:'black',
      borderWidth:1
    }
});

export default Register;