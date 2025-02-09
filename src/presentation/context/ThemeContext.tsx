import { createContext, PropsWithChildren, useState } from 'react';
import { darkColors, lightColors, ThemeColors } from '../../config/theme/Theme';


type ThemeColor = 'light' | 'dark' | 'custom';

interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors: ThemeColors;
    isDark: boolean;
    isCustom: boolean;
    isLight: boolean;
    setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext( {} as ThemeContextProps );

export const ThemeProvider = ({ children }: PropsWithChildren ) => {

    const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

    const customTheme = {  
        primary: "rgb(69, 47, 121)",
        text: "green",
        
        background: "rgb(31, 82, 58)",
        cardBackground:'rgb(82, 31, 31)',
        buttonTextColor: "green",
    }

    const setTheme = (theme: ThemeColor) => {
        setCurrentTheme( theme );
    }



    return (
        <ThemeContext.Provider
            value={{
                currentTheme: currentTheme,
                isCustom: (currentTheme === 'custom'),
                isDark: (currentTheme === 'dark'),
                isLight: (currentTheme === 'light'),
                colors: ( currentTheme === 'light' ? lightColors : currentTheme === 'dark' ? darkColors : customTheme ),
                setTheme: setTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}