import React from 'react';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

import products from './CommonConstants';

class OrderItemDetailsScreen extends React.Component {
  static navigationOptions = () => ({
    headerTitle: 'Order Item Details',
  });

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', 'Invalid');
    const product = products.find(p => p.id === id);

    return (
      <ScrollView>
        <ListItem key={1} title="ID" rightTitle={product.id.toString()} />
        <ListItem key={2} title="Product Code" rightTitle={product.code} />
        <ListItem
          key={3}
          title="Description"
          rightTitle={product.name}
        />
        <ListItem key={4} title="Categories" rightTitle="Books" />
        <ListItem key={5} title="Unit Price" rightTitle="$9.9" />
        <ListItem key={6} title="Unit of Measure" rightTitle="EA" />
        <ListItem key={7} title="Quantity" rightTitle="1.0" />
      </ScrollView>
    );
  }
}

export default OrderItemDetailsScreen;
