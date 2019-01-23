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

import { products, categories } from './CommonConstants';

const styles = StyleSheet.create({
  list: {
    borderTopWidth: 1,
    borderColor: 'white',
    backgroundColor: '#F9F1F6',
  },
});

const dummySearchBarProps = {
  showLoading: true,
  onBlur: () => {
    Alert.alert(
      'TODO',
      'Handle search input here.',
      [{ text: 'OK' }],
      { cancelable: true },
    );
  },
};

const ProductSearchIcon = () => (
  <Icon
    name="search"
    type="EvilIcons"
    onPress={() => {
      Alert.alert(
        'TODO',
        'Search function not implemented yet.',
        [{ text: 'OK' }],
        { cancelable: true },
      );
    }}
  />
);

const ProductSearchTitle = () => (
  <View>
    <SearchBar
      searchIcon={<ProductSearchIcon />}
      placeholder="Search products"
      platform="android"
      {...dummySearchBarProps}
    />
  </View>
);

const ProductTitle = ({ product, navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('ProductDetails', { productId: product.id })}
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

const ProductSubTitle = () => (
  <View style={{ flexDirection: 'row' }}>
    <Icon
      name="md-heart-empty"
      type="ionicon"
      size={25}
      onPress={() => {
        Alert.alert(
          'TODO',
          'Favorites not implemented yet.',
          [{ text: 'OK' }],
          { cancelable: true },
        );
      }}
    />
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ marginLeft: 10, fontSize: 14, color: 'grey' }}>
        Availability: In stock
      </Text>
    </View>
  </View>
);

const ProductItem = ({ product, navigation, handleAddOrderItem }) => (
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
            navigation={navigation}
            product={product}
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
            onPress={handleAddOrderItem}
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
        </View>
      </View>
    </View>
    <Divider style={{ height: 1 }} />
  </ScrollView>
);

export default class ProductsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <ProductSearchTitle />,
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

  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 'all',
    };
  }

  render() {
    const { navigation, screenProps } = this.props;
    const { selectedCategory } = this.state;

    return (
      <ScrollView>
        <View style={styles.list}>
          <Picker
            selectedValue={selectedCategory}
            style={{ marginLeft: 8, marginRight: 15 }}
            onValueChange={(itemValue) => {
              this.setState({ selectedCategory: itemValue });
            }}
          >
            {categories.map(category => (
              <Picker.Item
                key={category.id}
                label={category.label}
                value={category.value}
              />
            ))}
          </Picker>
        </View>
        <View style={{ marginTop: 10 }}>
          {products.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              navigation={navigation}
              handleAddOrderItem={() => {
                screenProps.cart.onAddOrderItem({ id: product.id, qty: 1 });
                Alert.alert(
                  'Success',
                  `Successfully added ${product.code} to the cart.`,
                  [{ text: 'OK' }],
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
