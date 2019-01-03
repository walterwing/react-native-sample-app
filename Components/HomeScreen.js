import React, { Component } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import {
  Icon,
  Card,
  Text,
  ListItem,
} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
});

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
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
        name="user"
        size={40}
        type="evilicon"
        iconStyle={{ paddingRight: 10 }}
        // TODO: update this function
        onPress={async () => {
          await AsyncStorage.clear();
          navigation.navigate('Auth');
        }}
      />
    ),
  });

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Card
            title="Activity Summary"
            titleStyle={{ color: '#05A255', fontSize: 18 }}
            containerStyle={{
              marginTop: 15,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: 'white',
            }}
          >
            <ListItem
              title="Welcome Back!"
              subtitle="Wing"
              leftAvatar={{
                title: 'TW',
                rounded: true,
                size: 'small',
                activeOpacity: 0.7,
              }}
              titleStyle={{ fontWeight: 'bold' }}
              containerStyle={{
                marginLeft: -15,
              }}
            />
            <View style={{ flexDirection: 'row', marginLeft: 5 }}>
              <Text style={{ marginBottom: 8 }}>Last Login:</Text>
              <Text
                style={[
                  styles.fonts,
                  {
                    marginBottom: 8,
                    marginLeft: 5,
                    color: 'rgba(0, 0, 0, 0.54)',
                  },
                ]}
              >
                Jan. 03 2019 09:10PM
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 5 }}>
              <Text style={{ marginBottom: 8 }}>Last Order Placed:</Text>
              <Text
                style={[
                  styles.fonts,
                  {
                    marginBottom: 8,
                    marginLeft: 5,
                    color: 'rgba(0, 0, 0, 0.54)',
                  },
                ]}
              >
                Dec. 17 2018 09:00AM
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 5 }}>
              <Text style={{ marginBottom: 8 }}>Password Changed:</Text>
              <Text
                style={[
                  styles.fonts,
                  {
                    marginBottom: 8,
                    marginLeft: 5,
                    color: 'rgba(0, 0, 0, 0.54)',
                  },
                ]}
              >
                Oct. 26 2018 10:40AM
              </Text>
            </View>
          </Card>
          <Card
            title="Order Summary"
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
              title="Unfulfilled orders"
              badge={{
                value: 1,
                textStyle: { color: 'white' },
                containerStyle: { marginTop: 1 },
              }}
              rightIcon={{ name: 'chevron-right' }}
            />
            <ListItem
              key={2}
              title="Unsubmitted orders"
              badge={{
                value: 12,
                textStyle: { color: 'white' },
                containerStyle: { marginTop: 1 },
              }}
              rightIcon={{ name: 'chevron-right' }}
            />
          </Card>
          <Card
            title="Invoice Summary"
            titleStyle={{ color: '#05A255', fontSize: 18 }}
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
              title="Open invoices"
              badge={{
                value: 3,
                textStyle: { color: 'white' },
                containerStyle: { marginTop: 1 },
              }}
              rightIcon={{ name: 'chevron-right' }}
            />
            <ListItem
              key={2}
              title="Invoices due for payment in the next 7 days"
              badge={{
                value: 1,
                textStyle: { color: 'white' },
                containerStyle: { marginTop: 1 },
              }}
              rightIcon={{ name: 'chevron-right' }}
            />
            <ListItem
              key={3}
              title="Invoices due for payment in the next 30 days"
              badge={{
                value: 2,
                textStyle: { color: 'white' },
                containerStyle: { marginTop: 1 },
              }}
              rightIcon={{ name: 'chevron-right' }}
            />
          </Card>
        </View>
      </ScrollView>
    );
  }
}
