import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './js/native/App';

class SimpleMaterialApp extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('SimpleMaterialApp', () => SimpleMaterialApp);
