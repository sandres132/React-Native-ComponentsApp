import '../gesture-handler.native'; // or ./gesture-handler.native.js depends on the platform you are working with

import { StackNavigator } from './presentation/navigator/StackNavigator';
import { ThemeProvider } from './presentation/context/ThemeContext';

// Esta es una forma de poder acceder al theme creando diferentes constructores jerarquicamente estructurados
// const AppNavigationContainer = ({ children }: PropsWithChildren ) => {

//     const { isDark } = useContext(ThemeContext);

//     return (
//         <NavigationContainer theme={ isDark ? DarkTheme : DefaultTheme }>
//             {children}
//         </NavigationContainer>
//     )
// }

// const AppTheme = ( {children}:PropsWithChildren) => {
//     return (
//         <ThemeProvider>
//             <AppNavigationContainer>
//                 {children}
//             </AppNavigationContainer>
//         </ThemeProvider>
//     )
// }

// export const ComponentsApp = () => {
//     return (
//         <AppTheme>
//             <StackNavigator/>
//         </AppTheme>
//     )
// }

// forma simplificada de hacer lo de arriba pero agrupado
export const ComponentsApp = () => {
    return (
        <ThemeProvider>
            <StackNavigator/>
        </ThemeProvider>
    )
}