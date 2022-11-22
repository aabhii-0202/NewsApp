/* eslint-disable prettier/prettier */
import React, {useLayoutEffect, useEffect, useState} from 'react';
import HomeScreen from './HomeScreen';

import { store } from './redux/store';
import { Provider } from 'react-redux';


const App = ({navigation}) => {

  return (
    <Provider store = {store}>
        <HomeScreen/>
    </Provider>
  );
};


export default App;
