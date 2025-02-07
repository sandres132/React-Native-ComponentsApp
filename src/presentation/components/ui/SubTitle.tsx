import { Text } from 'react-native';
import { colors, globalStyles } from '../../../config/theme/Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    text: string;
    safe?: boolean;
    backgroundColor?: string;
}

export const SubTitle = ( { text, safe = false, backgroundColor = colors.background }:Props ) => {

    const { top } = useSafeAreaInsets();

    return (
        <Text
            style={{
                ...globalStyles.subTitle,
                marginTop: safe ? top : 0,
                marginVertical: 10,
                backgroundColor: backgroundColor
            }}
        >{ text }</Text>
    )
}