import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

class PaymentsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Payments',
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
        {/* <Text>Payments</Text> */}
      </View>
    );
  }
}

export default PaymentsScreen;
