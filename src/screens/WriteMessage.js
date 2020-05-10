import React, {useEffect,useState} from "react";
import { Text, StyleSheet,Button,View,ScrollView,ImageBackground} from "react-native";
import AxiosWithAuth from '../helpers/AxiosWithAuth'
import Axios from "axios";
import NavBar from '../components/NavBar'
import { GiftedChat } from 'react-native-gifted-chat'
import { Icon } from 'react-native-elements'


const WriteMessage = (props) => {

const [messages,setMessages] = useState({

    messages:[]
})

   useEffect(() => {
    setMessages({
        messages: [
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ],
      })
    

       }, [])


     function onSend (messages = []){
        setMessages(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }

  return (

<>
{/* <ScrollView > */}
<Icon
  raised
  name='chevron-left'
  type='font-awesome'
  color='#003d99'
  onPress={() => props.navigation.navigate('Messages')}/>

   <GiftedChat
        messages={messages.messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />


{/* </ScrollView> */}
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

export default WriteMessage;
