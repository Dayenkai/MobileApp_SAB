import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Page1 from './Page1.js';
import Page2 from './Page2.js';

const MainNavigator = createStackNavigator({
  Home: {screen: Page1},
  SecondPage: {screen: Page2},
});

const App = createAppContainer(MainNavigator);

export default App;