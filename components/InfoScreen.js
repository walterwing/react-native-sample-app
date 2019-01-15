import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

class InfoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Information',
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
        {/* <Text>Reports</Text> */}
      </View>
    );
  }
}

export default InfoScreen;
