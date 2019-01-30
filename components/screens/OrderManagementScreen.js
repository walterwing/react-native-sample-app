import React from 'react';
import { View } from 'react-native';

class OrderManagementScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Order Management',
  });

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text></Text> */}
      </View>
    );
  }
}

export default OrderManagementScreen;
