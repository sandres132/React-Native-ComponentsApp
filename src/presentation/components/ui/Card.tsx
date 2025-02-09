import { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import { PropsWithChildren, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

// Es otra forma de hacer lo mismo que en CustomView
interface Props extends PropsWithChildren {
    style?: StyleProp<ViewStyle>;
}

export const Card = ( { style, children }:Props ) => {

    const { colors } = useContext( ThemeContext );

    return (
        <View style={[
            {
                backgroundColor: colors.cardBackground,
                borderRadius: 10,
                padding: 10,
            },
            style,
        ]}>
            { children }
        </View>
    )
}