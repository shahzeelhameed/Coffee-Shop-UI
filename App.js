import { StatusBar } from 'react-native';
import GettingStartedScreen from './screens/Getting_Started';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CoffeeDetailsScreen from './screens/CoffeeDetails';
import OrderScreen from './screens/OrderScreen';
import TrackingScreen from './screens/TrackingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name='gettingStartedScreen'
            component={GettingStartedScreen}
          />

          <Stack.Screen name='HomeScreen' component={HomeScreen} />

          <Stack.Screen
            name='CoffeeDetailsScreen'
            component={CoffeeDetailsScreen}
          />

          <Stack.Screen name='OrderScreen' component={OrderScreen} />
          <Stack.Screen name='TrackingScreen' component={TrackingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
