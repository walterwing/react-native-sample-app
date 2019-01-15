import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';
import WingApp from './AppWrapper';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <WingApp />
  </Provider>
);

export default App;
