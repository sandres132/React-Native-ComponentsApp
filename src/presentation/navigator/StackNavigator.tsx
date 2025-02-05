import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/home/HomeScreen';
import { Animation101Screen } from '../screens/animations/Animation101Screen';


export type RootStackParams = {
    Home: undefined,
    Animation101Screen: undefined
    // Product: { id: number, name: string },
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{
          headerShown: false,
        //   headerStyle: {
        //       elevation: 0,
        //       shadowColor: 'transparent',
        //   }
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
        {/* <Stack.Screen name="Product" component={ProductScreen} /> */}
      </Stack.Navigator>
  );
}