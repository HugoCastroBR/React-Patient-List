import React from 'react';

import { Provider } from 'react-redux';
import store from 'store/index';
import Routes from 'routes';
import 'antd/dist/antd.css';

function App() {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}

export default App;
