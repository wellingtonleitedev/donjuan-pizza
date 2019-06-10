import { createStackNavigator } from 'react-navigation';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

export const AuthStack = createStackNavigator({
  Signin: {
    screen: Signin,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Signup: {
    screen: Signup,
    navigationOptions: () => ({
      header: null,
    }),
  },
});
