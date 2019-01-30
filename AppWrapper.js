import React from 'react';
import { connect } from 'react-redux';

import AppContainer from './components/navigators/AuthAndAppSwitchNavigator';
import { cartActionCreators } from './reducers/cartReducer';

const mapStateToProps = state => ({
  items: state.cartReducer.items,
});

const mapDispatchToProps = dispatch => ({
  onAddOrderItem: (orderItem) => {
    dispatch(cartActionCreators.add(orderItem));
  },
  onDeleteOrderItem: (index) => {
    dispatch(cartActionCreators.delete(index));
  },
});

const WingApp = (props) => {
  const { items, onAddOrderItem, onDeleteOrderItem } = props;

  const screenProps = {
    cart: {
      items,
      onAddOrderItem,
      onDeleteOrderItem,
    },
  };

  return <AppContainer screenProps={screenProps} />;
};

// export default WingApp;
module.exports = connect(mapStateToProps, mapDispatchToProps)(WingApp);
