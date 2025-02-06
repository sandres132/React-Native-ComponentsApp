import { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import { colors } from '../../../config/theme/Theme';
import { PropsWithChildren } from 'react';

// Es otra forma de hacer lo mismo que en CustomView
interface Props extends PropsWithChildren {
    style?: StyleProp<ViewStyle>;
}

export const Card = ( { style, children }:Props ) => {
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