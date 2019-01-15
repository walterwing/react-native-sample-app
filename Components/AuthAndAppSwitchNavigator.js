import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingScreen from './AuthLoadingScreen';
import LoginScreen from './LoginScreen';
import AppDrawerNavigator from './AppDrawerNavigator';

const AuthStack = createStackNavigator(
  {
    SignIn: LoginScreen,
  },
  {
    headerMode: 'none',
  },
);

const AuthAndAppSwitch = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppDrawerNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const AppContainer = createAppContainer(AuthAndAppSwitch);

export default AppContainer;
