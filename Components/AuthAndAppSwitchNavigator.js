import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingScreen from './AuthLoadingScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import AccountNotificationScreen from './AccountNotificationScreen';

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
  Profile: ProfileScreen,
  AccountNotification: AccountNotificationScreen,
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
