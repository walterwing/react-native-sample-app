import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { Icon } from 'react-native-elements';

import ProfileScreen from '../screens/ProfileScreen';
import AccountNotificationScreen from '../screens/AccountNotificationScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import OrderItemDetailsScreen from '../screens/OrderItemDetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import AccountsScreen from '../screens/AccountsScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import OrderManagementScreen from '../screens/OrderManagementScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
  AccountNotification: AccountNotificationScreen,
});

const ProductsStack = createStackNavigator({
  ProductsList: ProductsScreen,
  ProductDetails: ProductDetailsScreen,
});

const OrdersStack = createStackNavigator({
  OrderDetails: OrderDetailsScreen,
  OrderItemDetails: OrderItemDetailsScreen,
  OrderManagement: OrderManagementScreen,
});

const AccountsStack = createStackNavigator({
  AccountDetails: AccountsScreen,
});

const PaymentsStack = createStackNavigator({
  PaymentDetails: PaymentsScreen,
});

const AppBottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Products: ProductsStack,
    Orders: OrdersStack,
    Accounts: AccountsStack,
    Payments: PaymentsStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Products') {
          iconName = `barcode${!focused ? '' : '-scan'}`;
        } else if (routeName === 'Orders') {
          iconName = `cart${focused ? '' : '-outline'}`;
        } else if (routeName === 'Accounts') {
          iconName = `account-box${focused ? '' : '-outline'}`;
        } else if (routeName === 'Payments') {
          iconName = `credit-card${!focused ? '' : '-scan'}`;
        }

        return <Icon type="material-community" name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#F3182E',
      inactiveTintColor: '#05A255',
    },
    initialRouteName: 'Home',
  },
);

export default AppBottomTabNavigator;
