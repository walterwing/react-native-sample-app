import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { Icon } from 'react-native-elements';

import ProfileScreen from './ProfileScreen';
import AccountNotificationScreen from './AccountNotificationScreen';
import ProductsScreen from './ProductsScreen';
import ProductDetailsScreen from './ProductDetailsScreen';
import OrderDetailsScreen from './OrderDetailsScreen';
import OrderItemDetailsScreen from './OrderItemDetailsScreen';
import HomeScreen from './HomeScreen';
import AccountsScreen from './AccountsScreen';
import PaymentsScreen from './PaymentsScreen';
import OrderManagementScreen from './OrderManagementScreen';

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
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Products') {
          iconName = `ios-barcode${focused ? '' : '-outline'}`;
        } else if (routeName === 'Orders') {
          iconName = `ios-cart${focused ? '' : '-outline'}`;
        } else if (routeName === 'Accounts') {
          iconName = `ios-ionitron${focused ? '' : '-outline'}`;
        } else if (routeName === 'Payments') {
          iconName = `ios-card${focused ? '' : '-outline'}`;
        }

        return <Icon type="ionicon" name={iconName} size={25} color={tintColor} />;
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