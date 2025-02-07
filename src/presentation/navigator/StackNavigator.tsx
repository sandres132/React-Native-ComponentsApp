import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen,
  Animation101Screen,
  Animation102Screen,
  SwitchScreen,
  AlertScreen,
  TextInputScreen,
  PullToRefreshScreen, 
  CustomSectionListScreen,
  ModalScreen,
  InfiniteScrollScreen} from '../screens';

export type RootStackParams = {
    Home: undefined,
    Animation101Screen: undefined,
    Animation102Screen: undefined,
    SwitchScreen: undefined,
    AlertScreen: undefined,
    TextInputScreen: undefined,
    PullToRefreshScreen: undefined,
    CustomSectionListScreen: undefined,
    ModalScreen: undefined,
    InfiniteScrollScreen: undefined,
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
        <Stack.Screen name="Animation102Screen" component={Animation102Screen} />

        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />

        <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
        <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
        {/* <Stack.Screen name="Product" component={ProductScreen} /> */}
      </Stack.Navigator>
  );
}