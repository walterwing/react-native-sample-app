import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Icon, Button } from 'react-native-elements';

import LoginScreen from './LoginScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class AuthLoadingScreen extends Component {
  constructor() {
    super();
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    // get token from async storage
    const userToken = await AsyncStorage.getItem('userToken');

    // switch between Auth and App stacks based on the token
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

// TODO: this is just a temparory home for testing purpose only
class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.navigation = props.navigation;
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={{ height: 100 }}>
          <Button
            title="Log Out"
            icon={
              <Icon
                type="material-community"
                name="logout"
                size={23}
                color="white"
              />
            }
            iconRight
            buttonStyle={{
              backgroundColor: 'rgba(90, 154, 230, 1)',
              borderColor: 'transparent',
              borderWidth: 0,
            }}
            iconContainerStyle={{ marginLeft: 10 }}
            onPress={async () => {
              await AsyncStorage.clear();
              this.navigation.navigate('Auth');
            }}
          />
        </View>
      </View>
    );
  }
}

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
    App: HomeScreen,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const AppContainer = createAppContainer(AuthAndAppSwitch);

export default AppContainer;
