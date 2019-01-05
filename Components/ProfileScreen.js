import React, { Component } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  Picker,
  Switch,
} from 'react-native';
import {
  Card,
  Text,
  ListItem,
  Input,
} from 'react-native-elements';

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
  },
  list: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: 'white',
    backgroundColor: '#fff',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FD6B78',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subtitleView: {
    paddingLeft: 1,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: -15,
    color: 'grey',
  },
});

const SCREEN_WIDTH = Dimensions.get('window').width;

const userDetails = {
  contactName: 'Wing',
  userName: 'Wing',
  email: 'walterwing@hotmail.com',
  businessPhone: '9999999999999',
  mobilePhone: '',
};

const accountNotifications = [
  {
    id: 'Account 1',
    paymentSMS: true,
    paymentEmail: false,
    invoiceSMS: false,
    invoiceEmail: true,
    orderSMS: false,
    orderEmail: false,
  },
  {
    id: 'Account 2',
    paymentSMS: false,
    paymentEmail: true,
    invoiceSMS: false,
    invoiceEmail: false,
    orderSMS: false,
    orderEmail: false,
  },
  {
    id: 'Account 3',
    paymentSMS: false,
    paymentEmail: false,
    invoiceSMS: false,
    invoiceEmail: true,
    orderSMS: false,
    orderEmail: false,
  },
  {
    id: 'Account 4',
    paymentSMS: false,
    paymentEmail: true,
    invoiceSMS: false,
    invoiceEmail: false,
    orderSMS: false,
    orderEmail: false,
  },
  {
    id: 'Account 5',
    paymentSMS: false,
    paymentEmail: false,
    invoiceSMS: false,
    invoiceEmail: false,
    orderSMS: false,
    orderEmail: true,
  },
  {
    id: 'Account 6',
    paymentSMS: false,
    paymentEmail: false,
    invoiceSMS: true,
    invoiceEmail: false,
    orderSMS: false,
    orderEmail: false,
  },
];

export default class ProfileScreen extends Component {
  static navigationOptions = () => ({
    title: 'My Profile',
  });

  constructor(props) {
    super(props);
    this.state = {
      notifyOrder: false,
      currency: 'nzd',
    };
  }

  render() {
    const { navigation } = this.props;
    const { notifyOrder, currency } = this.state;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Card
            title="User Details"
            titleStyle={{ color: 'orange', fontSize: 18 }}
            containerStyle={{
              marginTop: 15,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: 'white',
            }}
          >
            <Input
              inputContainerStyle={{
                borderRadius: 40,
                borderWidth: 1,
                borderColor: 'rgba(110, 120, 170, 1)',
                height: 50,
                width: SCREEN_WIDTH - 70,
                marginVertical: 5,
              }}
              label="Contract Name"
              labelStyle={{ fontSize: 16, marginLeft: 5 }}
              value={userDetails.contactName}
            />
            <Input
              inputContainerStyle={{
                borderRadius: 40,
                borderWidth: 1,
                borderColor: 'rgba(110, 120, 170, 1)',
                height: 50,
                width: SCREEN_WIDTH - 70,
                marginVertical: 5,
              }}
              label="Username"
              labelStyle={{ fontSize: 16, marginLeft: 5 }}
              value={userDetails.userName}
            />
            <Input
              inputContainerStyle={{
                borderRadius: 40,
                borderWidth: 1,
                borderColor: 'rgba(110, 120, 170, 1)',
                height: 50,
                width: SCREEN_WIDTH - 70,
                marginVertical: 5,
              }}
              label="Email Address"
              labelStyle={{ fontSize: 16, marginLeft: 5 }}
              value={userDetails.email}
            />
            <Input
              inputContainerStyle={{
                borderRadius: 40,
                borderWidth: 1,
                borderColor: 'rgba(110, 120, 170, 1)',
                height: 50,
                width: SCREEN_WIDTH - 70,
                marginVertical: 5,
              }}
              label="Business Phone"
              labelStyle={{ fontSize: 16, marginLeft: 5 }}
              value={userDetails.businessPhone}
            />
            <Input
              inputContainerStyle={{
                borderRadius: 40,
                borderWidth: 1,
                borderColor: 'rgba(110, 120, 170, 1)',
                height: 50,
                width: SCREEN_WIDTH - 70,
                marginVertical: 5,
              }}
              label="Mobile Phone"
              labelStyle={{ fontSize: 16, marginLeft: 5 }}
              value={userDetails.mobilePhone}
            />
          </Card>
          <Card
            title="Account Notification"
            titleStyle={{ color: 'orange', fontSize: 18 }}
            containerStyle={{
              marginTop: 15,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: 'white',
            }}
          >
            <View style={styles.list}>
              {accountNotifications.map(note => (
                <ListItem
                  key={note.id}
                  onPress={() => navigation.navigate('AccountNotification',
                    {
                      accountId: note.id,
                      paymentSMS: note.paymentSMS,
                      paymentEmail: note.paymentEmail,
                      invoiceSMS: note.invoiceSMS,
                      invoiceEmail: note.invoiceEmail,
                      orderSMS: note.orderSMS,
                      orderEmail: note.orderEmail,
                    })
                  }
                  title={note.id}
                  subtitle={(
                    <View style={styles.subtitleView}>
                      <Text style={styles.ratingText}>
                        {
                          `Payment Due SMS: ${note.paymentSMS ? 'Yes' : 'No'}, Email: ${note.paymentEmail ? 'Yes' : 'No'}`
                        }
                      </Text>
                      <Text style={styles.ratingText}>
                        {
                          `New Invoice SMS: ${note.invoiceSMS ? 'Yes' : 'No'}, Email: ${note.invoiceEmail ? 'Yes' : 'No'}`
                        }
                      </Text>
                      <Text style={styles.ratingText}>
                        {
                          `Order SMS: ${note.orderSMS ? 'Yes' : 'No'}, Email: ${note.orderEmail ? 'Yes' : 'No'}`
                        }
                      </Text>
                    </View>
                  )}
                  chevron
                  bottomDivider
                />
              ))}
            </View>
          </Card>
          <Card
            title="Settings"
            titleStyle={{ color: 'orange', fontSize: 18 }}
            containerStyle={{
              marginTop: 15,
              marginBottom: 15,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: 'white',
            }}
          >
            <ListItem
              key={1}
              title="Enable order notification"
              bottomDivider
              rightElement={(
                <Switch
                  onValueChange={() => this.setState({
                    notifyOrder: !notifyOrder,
                  })
                  }
                  value={notifyOrder}
                />
              )}
            />
            <View style={{ marginVertical: 10, flex: 1 }}>
              <Text style={{ marginLeft: 15, fontSize: 17 }}>
                Currency
              </Text>
              <Picker
                selectedValue={currency}
                style={{ marginLeft: 8, marginRight: 15 }}
                onValueChange={(itemValue) => {
                  this.setState({ currency: itemValue });
                }
                }
              >
                <Picker.Item
                  label="AUD"
                  value="aud"
                />
                <Picker.Item
                  label="EUR"
                  value="eur"
                />
                <Picker.Item
                  label="GBP"
                  value="gbp"
                />
                <Picker.Item
                  label="NZD"
                  value="nzd"
                />
                <Picker.Item
                  label="USD"
                  value="usd"
                />
              </Picker>
            </View>
          </Card>
        </View>
      </ScrollView>
    );
  }
}
