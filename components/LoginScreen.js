import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  AsyncStorage,
} from 'react-native';
import {
  Input, Button, CheckBox, Icon,
} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../assets/images/bg_screen.jpg');
const LOGO_IMAGE = require('../assets/images/logo47.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginView: {
    flex: 1,
    marginVertical: 50,
    marginHorizontal: 50,
  },
  loginHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBody: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginFooter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class LoginScreen extends Component {
  static validateEmail(email) {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailPattern.test(email);
  }

  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      appResourceLoaded: false,
      email: '',
      emailValid: true,
      password: '',
      showLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({ appResourceLoaded: true });
  }

  signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    const { navigation } = this.props;
    navigation.navigate('App');
  };

  submitLoginCrendentials() {
    const { showLoading } = this.state;

    this.setState({
      showLoading: !showLoading,
    });
  }

  render() {
    const {
      email, password, emailValid, showLoading, appResourceLoaded, checked,
    } = this.state;

    return (
      <View style={styles.container}>
        <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
          {appResourceLoaded ? (
            <View style={styles.loginView}>
              <View style={styles.loginHeader}>
                <Image style={{ width: 200, height: 200, marginTop: 30 }} source={LOGO_IMAGE} />
              </View>
              <View style={styles.loginBody}>
                <Input
                  leftIcon={(
                    <Icon
                      name="person"
                      color="rgba(171, 189, 219, 1)"
                      size={25}
                    />
                  )}
                  containerStyle={{ marginVertical: 10 }}
                  onChangeText={inputEmail => this.setState({ email: inputEmail })}
                  value={email}
                  inputStyle={{ marginLeft: 10, color: 'white' }}
                  keyboardAppearance="light"
                  placeholder="User Name"
                  autoFocus={false}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  returnKeyType="next"
                  ref={(input) => { this.emailInput = input; }}
                  onSubmitEditing={() => {
                    this.setState({ emailValid: LoginScreen.validateEmail(email) });
                    this.passwordInput.focus();
                  }}
                  blurOnSubmit={false}
                  placeholderTextColor="white"
                  errorStyle={{ textAlign: 'center', fontSize: 12 }}
                  errorMessage={
                    emailValid ? null : 'Please enter a valid email address'
                  }
                />
                <Input
                  leftIcon={(
                    <Icon
                      name="lock"
                      color="rgba(171, 189, 219, 1)"
                      size={25}
                    />
                  )}
                  containerStyle={{ marginVertical: 10 }}
                  onChangeText={inputPassword => this.setState({ password: inputPassword })}
                  value={password}
                  inputStyle={{ marginLeft: 10, color: 'white' }}
                  secureTextEntry
                  keyboardAppearance="light"
                  placeholder="Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="default"
                  returnKeyType="done"
                  ref={(input) => { this.passwordInput = input; }}
                  blurOnSubmit
                  placeholderTextColor="white"
                />
                <CheckBox
                  title="I have read and agree to the Terms and Conditions."
                  // checkedIcon='dot-circle-o'
                  // uncheckedIcon='circle-o'
                  checked={checked}
                  // onPress={() => this.setState({ checked: !this.state.checked })}
                  onPress={() => this.setState(prevState => ({ checked: !prevState.checked }))}
                  containerStyle={{
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                  }}
                  textStyle={{
                    color: 'white',
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}
                />
              </View>
              <View style={styles.loginFooter}>
                <Button
                  title="LOG IN"
                  activeOpacity={1}
                  underlayColor="transparent"
                  onPress={this.signInAsync}
                  loading={showLoading}
                  loadingProps={{ size: 'small', color: 'white' }}
                  disabled={!emailValid || password.length < 1 || !checked}
                  buttonStyle={{
                    height: 50,
                    width: 250,
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 30,
                  }}
                  disabledStyle={{
                    height: 50,
                    width: 250,
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    borderColor: 'grey',
                    borderRadius: 30,
                  }}
                  containerStyle={{ marginVertical: 10 }}
                  titleStyle={{ fontWeight: 'bold', color: 'white' }}
                  disabledTitleStyle={{ fontWeight: 'bold', color: 'grey' }}
                />
              </View>
            </View>
          ) : (
            <Text>Loading...</Text>
          )}
        </ImageBackground>
      </View>
    );
  }
}
