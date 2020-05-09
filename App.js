import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import UserHome from "./src/screens/UserHome";
import Settings from './src/screens/Settings'
import Messages from './src/screens/Messages'
import Search from './src/screens/Search'


const navigator = createStackNavigator(
  {
    Home:{
      screen:HomeScreen
    },
    Login:{
      screen:Login
    },
    Register:{
      screen:Register
    } ,
    UserHome:{
      screen:UserHome
    },
    Settings:{
      screen:Settings
    },
    Messages:{
      screen :Messages
    },
    Search:{
      screen:Search
    }
  },
  {
    index: 0,
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default createAppContainer(navigator);
