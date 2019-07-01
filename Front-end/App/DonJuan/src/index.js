import React from 'react';
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import './config/DevToolsConfig';
import { store } from './store';
import { Routes } from './routes';
import { setNavigator } from './services/navigation';
import { colors } from './style';

const App = () => (
  <Provider store={store}>
    <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
    <Routes ref={setNavigator} />
  </Provider>
);
export default App;
