import '../gesture-handler.native'; // or ./gesture-handler.native.js depends on the platform you are working with

import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { StackNavigator } from './presentation/navigator/StackNavigator';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from './presentation/context/ThemeContext';

const AppState = ({ children }: PropsWithChildren ) => {
    return (
        <NavigationContainer>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </NavigationContainer>
    )
}

export const ComponentsApp = () => {
    return (
        <AppState>
            <StackNavigator/>
        </AppState>
    )
}