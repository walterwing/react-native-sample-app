import React from 'react';
import {
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  Icon,
  Card,
  Text,
  ListItem,
  Divider,
  Button,
} from 'react-native-elements';
import NumericInput from 'react-native-numeric-input';
import products from './CommonConstants';

const SCREEN_WIDTH = Dimensions.get('window').width;

const OrderItemTitle = (props) => {
  const { navigation, item } = props;
  const product = products.find(p => p.id === item.id);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('OrderItemDetails', {
          id: item.id,
        });
      }}
    >
      <Text style={{ flexWrap: 'wrap', fontSize: 16 }}>
        {product.name}
      </Text>
    </TouchableOpacity>
  );
};

const OrderItemSubTitle = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Text style={{ fontSize: 14, color: 'grey' }}>
      Total: 1
    </Text>
  </View>
);

const OrderItem = (props) => {
  const { navigation, item, handleDeleteOrderItem } = props;

  return (
    <TouchableOpacity
      onLongPress={() => Alert.alert(
        'Delete Item',
        'You are about to delete a product line item. Do you want to proceed?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          { text: 'OK', onPress: handleDeleteOrderItem },
        ],
        { cancelable: false },
      )}
    >
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
            <OrderItemTitle
              navigation={navigation}
              item={item}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                flexWrap: 'wrap',
                fontSize: 16,
                color: 'rgba(0, 0, 0, 0.54)',
              }}
            >
              $109.00
            </Text>
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
            <OrderItemSubTitle />
          </View>
          <View style={{ flex: 1, alignItems: 'center', marginLeft: 5 }}>
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
    </TouchableOpacity>
  );
};

class OrderDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Order Details',
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
        name="file-document-box-multiple-outline"
        size={30}
        type="material-community"
        iconStyle={{ paddingRight: 10 }}
        onPress={() => {
          navigation.navigate('OrderManagement');
        }}
      />
    ),
  });

  render() {
    const { screenProps, navigation } = this.props;

    return (
      <ScrollView>
        <View>
          <Card
            title="Order # 666"
            titleStyle={{ color: '#05A255', fontSize: 18 }}
            containerStyle={{
              marginTop: 15,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: 'white',
            }}
          >
            <ListItem
              key={1}
              title="Order Reference"
              rightTitle="666"
              rightTitleStyle={{
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            />
            <ListItem
              key={2}
              title="Customer Reference"
              rightTitle="9527"
              rightTitleStyle={{
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            />
            <View
              style={{
                padding: 16,
              }}
            >
              <View
                style={{
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                  }}
                >
                  Delivery Location
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: 'rgba(0, 0, 0, 0.54)',
                  }}
                >
                  Metro Building, 291-297 Queen St, Auckland, NZ
                </Text>
              </View>
            </View>
          </Card>
          <Card
            title="Order Items"
            titleStyle={{ color: '#05A255', fontSize: 18 }}
            containerStyle={{
              marginTop: 15,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: 'white',
            }}
          >
            {/* <OrderItem navigation={this.props.navigation} /> */}
            {screenProps.cart.items.map(item => (
              <OrderItem
                key={item.id.toString()}
                navigation={navigation}
                item={item}
                handleDeleteOrderItem={() => screenProps.cart.onDeleteOrderItem(item.id)
                }
              />
            ))}
          </Card>
        </View>
        <Button
          title="Submit Order"
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
          onPress={() => {
            Alert.alert(
              'TODO',
              'Submit order not implemented yet.',
              [{ text: 'OK' }],
              { cancelable: true },
            );
          }}
        />
      </ScrollView>
    );
  }
}

export default OrderDetailsScreen;
