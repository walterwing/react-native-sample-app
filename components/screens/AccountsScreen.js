import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

class AccountsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Accounts',
    headerLeft: (
      <Icon
        name="navicon"
        size={30}
        type="evilicon"
        iconStyle={{ paddingLeft: 10 }}
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    ),
  });

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text>Accounts</Text> */}
      </View>
    );
  }
}

export default AccountsScreen;
