import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { darkColors, lightColors, ThemeColors, colors } from '../../config/theme/Theme';
import { Appearance, AppState, useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';


type ThemeColor = 'light' | 'dark' | 'custom';

interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors: ThemeColors;
    isDark: boolean;
    setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext( {} as ThemeContextProps );

export const ThemeProvider = ({ children }: PropsWithChildren ) => {

    const colorScheme = useColorScheme();
    const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');
    
    const customTheme: ThemeColors = {  
        primary: "rgb(69, 47, 121)",
        text: "green",
        
        background: "rgb(31, 82, 58)",
        cardBackground:'rgb(82, 31, 31)',
        buttonTextColor: "green",
    }

    const isDark = currentTheme === 'dark';
    const colors = currentTheme === 'light' ? lightColors : currentTheme === 'dark' ? darkColors : customTheme

    // forma de traer el theme del dispositivo a la app
    // useEffect(() => {
    //   if ( colorScheme === 'dark') {
    //     setCurrentTheme('dark');
    //   } else {
    //     setCurrentTheme('light');
    //   }
    // }, [colorScheme]);

    // otra forma de traer el theme del dispositivo a la app basado en el estado de la aplicacion y ademas el nextAppState contiene si esta la aplicacion abierta o en background etc
    useEffect(() => {
        const subscription = AppState.addEventListener('change', nextAppState => {
            const colorScheme = Appearance.getColorScheme();
            setCurrentTheme( colorScheme === 'dark' ? 'dark' : 'light')
        });
    
        return () => {
          subscription.remove();
        };
    }, []);

    const setTheme = (theme: ThemeColor) => {
        setCurrentTheme( theme );
    }



    return (
        // esta era la forma anterior a la simplificacion
        // <ThemeContext.Provider
        //     value={{
        //         currentTheme: currentTheme,
        //         isDark: (currentTheme === 'dark'),
        //         colors: ( currentTheme === 'light' ? lightColors : currentTheme === 'dark' ? darkColors : customTheme ),
        //         setTheme: setTheme
        //     }}
        // >
        //     {children}
        // </ThemeContext.Provider>

        
        // forma simplificada de hacer lo de ComponentsApp pero agrupado
        <NavigationContainer theme={ isDark ? DarkTheme : DefaultTheme }>
            <ThemeContext.Provider
                value={{
                    currentTheme: currentTheme,
                    isDark: isDark,
                    colors: colors,
                    setTheme: setTheme
                }}
            >
                {children}
            </ThemeContext.Provider>
        </NavigationContainer>
    )
}