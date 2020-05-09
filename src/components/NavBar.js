import React from "react";
import { Button, StyleSheet,View,FlatList } from "react-native";
import { Icon } from 'react-native-elements'

const NavBar = (props) => {

// in order to map over a list we use the flatList here in native
const friends=[
{name:"roger"},
{name:"John"},
{name:"Kyle"},
{name:"Carlos"},

];
  return (

<View  style={{position: 'absolute', flexDirection:"row", bottom: 0, justifyContent: 'space-evenly', alignItems: 'center',backgroundColor:"lightgrey",width:"100%"}}>

<Icon
  raised
  name='home'
  type='font-awesome'
  color='#003d99'
  onPress={() => props.navigate('UserHome')}/>

<Icon
  raised
  name='search'
  type='font-awesome'
  color='#003d99'
  onPress={() => props.navigate('Search')}/>
<Icon
  raised
  name='comments'
  type='font-awesome'
  color='#003d99'
  onPress={() => props.navigate('Messages')}/>

<Icon
  raised
  name='cogs'
  type='font-awesome'
  color='#003d99'
  onPress={() => props.navigate('Settings')}/>

  </View>
  )
};

const styles = StyleSheet.create({
  buttonBox:{
    width: "25%",
    backgroundColor:'white'
   },
  text: {
    marginHorizontal:50
  }
});

export default NavBar;

