import React from 'react';
import { View } from 'react-native';

class OrderItemDetailsScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Order Item Details',
  });

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text></Text> */}
      </View>
    );
  }
}

export default OrderItemDetailsScreen;
