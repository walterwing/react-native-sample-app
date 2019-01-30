import React from 'react';
import {
  View,
  Image,
  Dimensions,
  AsyncStorage,
} from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
} from 'react-navigation';
import { Icon, Button } from 'react-native-elements';

import AppBottomTabNavigator from './AppBottomTabNavigator';
import ReportsScreen from '../screens/ReportsScreen';
import UserSetupScreen from '../screens/UserSetupScreen';
import InfoScreen from '../screens/InfoScreen';
import SettingsScreen from '../screens/SettingsScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;
const LOGO_IMAGE = require('../../assets/images/logo47.png');

const ProxyBottomTabNavigator = createStackNavigator(
  {
    Proxy: {
      screen: AppBottomTabNavigator,
    },
  },
  {
    headerMode: 'none',
  },
);

ProxyBottomTabNavigator.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="home"
      size={30}
      iconStyle={{
        width: 30,
        height: 30,
      }}
      type="material"
      color={tintColor}
    />
  ),
};

const ProxyReports = createStackNavigator({
  PReports: {
    screen: ReportsScreen,
  },
});

ProxyReports.navigationOptions = {
  drawerLabel: 'Reports',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="google-analytics"
      size={30}
      iconStyle={{
        width: 30,
        height: 30,
      }}
      type="material-community"
      color={tintColor}
    />
  ),
};

const ProxyUserSetup = createStackNavigator({
  PReports: {
    screen: UserSetupScreen,
  },
});

ProxyUserSetup.navigationOptions = {
  drawerLabel: 'User Setup',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="supervisor-account"
      size={30}
      iconStyle={{
        width: 30,
        height: 30,
      }}
      type="material"
      color={tintColor}
    />
  ),
};

const ProxyInfo = createStackNavigator({
  PInfo: {
    screen: InfoScreen,
  },
});

ProxyInfo.navigationOptions = {
  drawerLabel: 'Information',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="forum"
      size={30}
      iconStyle={{
        width: 30,
        height: 30,
      }}
      type="material"
      color={tintColor}
    />
  ),
};

const ProxySettings = createStackNavigator({
  PInfo: {
    screen: SettingsScreen,
  },
});

ProxySettings.navigationOptions = {
  drawerLabel: 'Settings',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="settings"
      size={30}
      iconStyle={{
        width: 30,
        height: 30,
      }}
      type="material"
      color={tintColor}
    />
  ),
};

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      // Note: must use a proxy layer, otherwise the navigation will get lost
      screen: ProxyBottomTabNavigator,
    },
    Reports: {
      screen: ProxyReports,
    },
    UserSetup: {
      screen: ProxyUserSetup,
    },
    Info: {
      screen: ProxyInfo, // Note: must use a proxy layer, otherwise the header will be missing
    },
    Settings: {
      screen: ProxySettings,
    },
  },
  {
    drawerWidth: SCREEN_WIDTH * 0.6,
    initialRouteName: 'Home',
    contentComponent: props => (
      <View style={{ flex: 1, backgroundColor: '#F7ECE8' }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              marginVertical: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              style={{ width: SCREEN_WIDTH * 0.57, height: 100, marginTop: 30 }}
              source={LOGO_IMAGE}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <DrawerItems {...props} />
          </View>
        </View>
        <View style={{ height: 100 }}>
          <Button
            title="Log Out"
            icon={(
              <Icon
                type="material-community"
                name="logout"
                size={23}
                color="white"
              />
            )}
            iconRight
            buttonStyle={{
              backgroundColor: 'rgba(90, 154, 230, 1)',
              borderColor: 'transparent',
              borderWidth: 0,
            }}
            iconContainerStyle={{ marginLeft: 10 }}
            onPress={async () => {
              await AsyncStorage.clear();
              props.navigation.navigate('Auth');
            }}
          />
        </View>
      </View>
    ),
  },
);

export default AppDrawerNavigator;
