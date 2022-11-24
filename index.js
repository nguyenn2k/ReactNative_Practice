/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//Import
import EmojiState from './src/screens/EmojiState';
import Login from './src/screens/Login';
import Contact from './src/screens/Contact';
import SectionList_Color from './src/screens/SectionList_Color';
import SectionList_Menu from './src/screens/SectionList_Menu';

AppRegistry.registerComponent(appName, () => EmojiState);
