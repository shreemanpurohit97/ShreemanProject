import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultShow from './src/screens/ResultShow';
import LoginScreen from './src/screens/LoginScreen';
const navigator = createStackNavigator(
  {
  Login:LoginScreen,
  Search:SearchScreen,
  ResultShow:ResultShow,
  },
  { 
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Login"
    }
  }
);


 




export default createAppContainer(navigator);
