import { createStackNavigator } from 'react-navigation';
import Register from '.src/pages/Register';

const AppNavigator = createStackNavigator({
  Register: { screen: Register },
});

export default AppNavigator;