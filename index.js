/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import app from './app/app';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => app);
