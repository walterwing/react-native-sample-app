import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingScreen from './AuthLoadingScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const AuthStack = createStackNavigator(
  {
    SignIn: LoginScreen,
  },
  {
    headerMode: 'none',
  },
);

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

const AuthAndAppSwitch = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: HomeStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const AppContainer = createAppContainer(AuthAndAppSwitch);

export default AppContainer;
