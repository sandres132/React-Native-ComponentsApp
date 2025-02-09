import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button, Card, CustomView, SubTitle, Title } from '../../components';
import { useContext, useRef } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const ChangeThemeScreen = () => {

    const { setTheme, currentTheme, colors } = useContext( ThemeContext );
    

    return (
        <CustomView margin>
            <Title text={`Cambiar tema: ${ currentTheme }`} safe />

            <Button
                text='Light'
                onPress={ () => setTheme('light') }
            />

            <View style={{ height: 10 }} />

            <Button
                text='Dark'
                onPress={ () => setTheme('dark') }
            />
            <View style={{ height: 10 }} />

            <Button
                text='custom'
                onPress={ () => setTheme('custom') }
            />

            <View style={{ height: 10 }} />

            <Text style={{ color: colors.text }}>
                { JSON.stringify( colors, null, 2) }
            </Text>

            <Text style={{ color: colors.text }}>isLight: { currentTheme === 'light' ? 'true' : 'false' }</Text>
            <Text style={{ color: colors.text }}>isDark: { currentTheme === 'dark' ? 'true' : 'false' }</Text>
            <Text style={{ color: colors.text }}>isCustom: { currentTheme === 'custom' ? 'true' : 'false' }</Text>

        </CustomView>
    )
}

const stylesPicker = StyleSheet.create({
    colorPicker: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginBottom: 20,
    },
    input: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
});