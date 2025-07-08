/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoPage from './src/screens/TodoPage';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginPage';
import { RootStackParamList } from './src/navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();



function RootStack(){
  return(
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={LoginScreen}/>
       <Stack.Screen name='Todo' component={TodoPage}/>
    </Stack.Navigator>
  )
}

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    // <View style={styles.container}>
    //     <TodoPage/>
    // </View>
    <NavigationContainer>
        <RootStack/>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor:"#FAF7F3",
//     padding:12
//   },
// });

export default App;
