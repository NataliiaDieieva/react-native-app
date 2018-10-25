// outsource dependencies
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// local dependencies
import App from './App';

AppRegistry.registerComponent(appName, () => App);
