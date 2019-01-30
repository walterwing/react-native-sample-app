import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Settings',
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
  });

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Text>Reports</Text>
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Open Drawer"
        /> */}
      </View>
    );
  }
}

export default SettingsScreen;
