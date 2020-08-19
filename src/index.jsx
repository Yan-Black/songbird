import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import View from './components/View';
import store from './store';

const Index = () => (
  <Provider store={store}>
    <View />
  </Provider>
);

render(<Index />, document.getElementById('root'));
