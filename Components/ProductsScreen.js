import React, { Component } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Picker,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  Icon,
  Text,
  SearchBar,
  Divider,
  Button,
} from 'react-native-elements';
import NumericInput from 'react-native-numeric-input';

import { products } from './CommonConstants';

const styles = StyleSheet.create({
  list: {
    borderTopWidth: 1,
    borderColor: 'white',
    backgroundColor: '#F9F1F6',
  },
});

const dummySearchBarProps = {
  showLoading: true,
  onFocus: () => console.log('focus'),
  onBlur: () => console.log('blur'),
  onCancel: () => console.log('cancel'),
  onClearText: () => console.log('cleared'),
  onChangeText: (text) => console.log('text:', text),
};

const categories = [
  {
    label: 'All Categories',
    value: 'all',
  },
  {
    label: 'Clothing',
    value: 'clothing',
  },
  {
    label: 'Garden',
    value: 'garden',
  },
  {
    label: 'Electronics',
    value: 'electronics',
  },
  {
    label: 'Sports',
    value: 'sports',
  },
  {
    label: 'Books',
    value: 'books',
  },
  {
    label: 'Music',
    value: 'music',
  },
  {
    label: 'Movies',
    value: 'movies',
  },
  {
    label: 'Food',
    value: 'food',
  },
  {
    label: 'Specials',
    value: 'specials',
  },
];

class ProductSearchIcon extends Component {
  render() {
    return (
      <Icon
        name="search"
        type="EvilIcons"
        onPress={() => console.log('searching product...')}
      />
    );
  }
}

class ProductSearchTitle extends Component {
  render() {
    return (
      <View>
        <SearchBar
          searchIcon={<ProductSearchIcon />}
          placeholder="Search products"
          platform="android"
          {...dummySearchBarProps}
        />
      </View>
    );
  }
}

class ProductTitle extends Component {
  render() {
    const { product } = this.props;

    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('ProductDetails', {
            code: product.code,
          })
        }
      >
        <Text
          style={{
            flexWrap: 'wrap',
            fontSize: 16,
            color: 'rgba(0, 0, 0, 0.54)',
          }}
        >
          {product.code}
        </Text>
        <Text style={{ flexWrap: 'wrap', fontSize: 16, marginTop: 5 }}>
          {product.name}
        </Text>
      </TouchableOpacity>
    );
  }
}

class ProductSubTitle extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Icon
          name="md-heart-empty"
          type="ionicon"
          size={25}
          onPress={() => console.log('hello heart')}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginLeft: 10, fontSize: 14, color: 'grey' }}>
            Availability: In stock
          </Text>
        </View>
      </View>
    );
  }
}

class ProductItem extends Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            padding: 16,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              flex: 2,
              backgroundColor: 'transparent',
            }}
          >
            <View style={{ flex: 2, backgroundColor: 'transparent' }}>
              <ProductTitle
                navigation={this.props.navigation}
                product={this.props.product}
              />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Button
                title="Add"
                titleStyle={{ fontWeight: 'bold', fontSize: 16 }}
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
                containerStyle={{ marginBottom: 10, height: 30, width: 100 }}
                iconRight
                iconContainerStyle={{ marginLeft: 5 }}
                onPress={this.props.handleAddOrderItem}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
              marginTop: 10,
            }}
          >
            <View style={{ flex: 2, backgroundColor: 'transparent' }}>
              <ProductSubTitle />
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
            <NumericInput
              // onChange={value => this.setState({ value })}
              onChange={() => console.log('---todo: implement numric input')}
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
            </View>
          </View>
        </View>
        <Divider style={{ height: 1 }} />
      </ScrollView>
    );
  }
}

export default class ProductsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <ProductSearchTitle />,
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="MaterialCommunityIcons"
          iconStyle={{ paddingLeft: 10 }}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
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
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 'all',
    };
  }

  render() {
    const { navigation, screenProps } = this.props;

    return (
      <ScrollView>
        <View style={styles.list}>
          <Picker
            selectedValue={this.state.selectedCategory}
            style={{ marginLeft: 8, marginRight: 15 }}
            onValueChange={(itemValue) =>
              this.setState({
                selectedCategory: itemValue,
              })
            }
          >
            {categories.map((category, i) => (
              <Picker.Item
                key={i}
                label={category.label}
                value={category.value}
              />
            ))}
          </Picker>
        </View>
        <View style={{ marginTop: 10 }}>
          {products.map((product, i) => (
            <ProductItem
              key={i}
              product={product}
              navigation={navigation}
              handleAddOrderItem={() => {
                screenProps.cart.onAddOrderItem({ code: product.code, qty: 1 });
                Alert.alert(
                  'Success',
                  'Successfully added ' + product.code + ' to the cart',
                  [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                  { cancelable: true },
                );
              }}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}
