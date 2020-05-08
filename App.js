import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import UserHome from "./src/screens/UserHome";



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: Login,
    Register: Register,
    UserHome:UserHome
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "ChatHub"
    }
  }
);

export default createAppContainer(navigator);
