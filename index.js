import { AppRegistry } from 'react-native';
import App from './App';
import NavigationNest from './src/components/navigationNest'
import NavigationTab from './src/components/navigationTab'
import NavigationEachTab from './src/components/navigationEachTab'

AppRegistry.registerComponent('copyNative', () => NavigationEachTab);
