import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/theme/Theme';
import { ReactNode } from 'react';

interface Props {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
}

export const CustomView = ( { style, children }:Props ) => {
    return (
        <View style={[
            globalStyles.mainContainer,
            style
        ]}>
            { children }
        </View>
    )
}