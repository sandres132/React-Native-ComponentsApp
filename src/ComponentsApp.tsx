import '../gesture-handler.native'; // or ./gesture-handler.native.js depends on the platform you are working with

import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { StackNavigator } from './presentation/navigator/StackNavigator';

export const ComponentsApp = () => {
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    )
}