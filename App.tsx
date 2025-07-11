/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoPage from './src/screens/TodoPage';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './src/navigation/types';
import RepairUi from './src/screens/RepairUi';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={RepairUi} />
      <Stack.Screen name="Todo" component={TodoPage} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
