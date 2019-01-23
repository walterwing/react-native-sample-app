import React from 'react';
import {
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import {
  Icon,
  ListItem,
  Button,
} from 'react-native-elements';
import NumericInput from 'react-native-numeric-input';

import { products } from './CommonConstants';

const SCREEN_WIDTH = Dimensions.get('window').width;

class ProductDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Product Details',
    headerRight: (
      <Icon
        name="cart"
        size={35}
        type="evilicon"
        iconStyle={{ paddingRight: 10 }}
        onPress={() => {
          navigation.navigate('Orders');
        }}
      />
    ),
  });

  render() {
    const { navigation, screenProps } = this.props;
    const productId = navigation.getParam('productId', 'Invalid');

    const product = products.find(p => p.id === productId);

    return (
      <ScrollView>
        <ListItem key={1} title="ID" rightTitle={product.id.toString()} />
        <ListItem key={2} title="Product code" rightTitle={product.code} />
        <ListItem
          key={3}
          title="Description"
          rightTitle={product.name}
        />
        <ListItem key={4} title="Categories" rightTitle="Books" />
        <ListItem key={5} title="Unit Price" rightTitle="9.99" />
        <ListItem key={6} title="Availability" rightTitle="In stock" />
        <ListItem
          key={7}
          title="Quantity"
          rightTitle={(
            <NumericInput
              // onChange={value => this.setState({ value })}
              onChange={() => {
                Alert.alert(
                  'TODO',
                  'Numeric input not implemented yet.',
                  [{ text: 'OK' }],
                  { cancelable: true },
                );
              }}
              totalWidth={100}
              totalHeight={30}
              iconSize={20}
              step={1}
              valueType="integer"
              rounded
              textColor="#B0228C"
              iconStyle={{ color: 'white' }}
              rightButtonBackgroundColor="#EA3788"
              leftButtonBackgroundColor="#E56B70"
            />
          )}
        />

        <Button
          title="Add to Cart"
          titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
          linearGradientProps={{
            colors: ['#FF9800', '#F44336'],
            start: [1, 0],
            end: [0.2, 0],
          }}
          buttonStyle={{
            borderWidth: 0,
            borderColor: 'transparent',
            borderRadius: 20,
          }}
          containerStyle={{ marginTop: 20, height: 60, width: SCREEN_WIDTH }}
          iconRight
          iconContainerStyle={{ marginLeft: 5 }}
          // onPress={() => console.log('hello add to cart')}
          onPress={() => {
            screenProps.cart.onAddOrderItem({ id: product.id, qty: 1 });
            Alert.alert(
              'Success',
              `Successfully added ${product.code} to the cart.`,
              [{ text: 'OK' }],
              { cancelable: true },
            );
          }}
        />
      </ScrollView>
    );
  }
}

export default ProductDetailsScreen;
