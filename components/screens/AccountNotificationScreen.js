import React, { Component } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Switch,
} from 'react-native';
import { ListItem } from 'react-native-elements';

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: 'white',
    backgroundColor: '#fff',
  },
});

export default class AccountNotificationScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('accountId', 'Update Account Notification'),
  });

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView>
        <View style={styles.list}>
          <ListItem
            key={1}
            title="Payment Due SMS"
            bottomDivider
            rightElement={(
              <Switch
                value={navigation.getParam('paymentSMS', false)}
              />
            )}
          />
          <ListItem
            key={2}
            title="Payment Due Email"
            bottomDivider
            rightElement={(
              <Switch
                value={navigation.getParam('paymentEmail', false)}
              />
            )}
          />
        </View>
        <View style={styles.list}>
          <ListItem
            key={3}
            title="New Invoice SMS"
            bottomDivider
            rightElement={(
              <Switch
                value={navigation.getParam('invoiceSMS', false)}
              />
            )}
          />
          <ListItem
            key={4}
            title="New Invoice Email"
            bottomDivider
            rightElement={(
              <Switch
                value={navigation.getParam('invoiceEmail', false)}
              />
            )}
          />
        </View>
        <View style={styles.list}>
          <ListItem
            key={5}
            title="Order SMS"
            bottomDivider
            rightElement={(
              <Switch
                value={navigation.getParam('orderSMS', false)}
              />
            )}
          />
          <ListItem
            key={6}
            title="Order Email"
            bottomDivider
            rightElement={(
              <Switch
                value={navigation.getParam('orderEmail', false)}
              />
            )}
          />
        </View>
      </ScrollView>
    );
  }
}
