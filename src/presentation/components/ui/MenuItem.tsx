import { View, Text, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../config/theme/Theme';
import { Ionicon } from '../../icons/IonIcons';
import { useNavigation } from '@react-navigation/native';

interface Props {
    name: string;
    icon: string;
    component: string;
    isFirst?: boolean;
    isLast?: boolean;
}

export const MenuItem = ( { name, icon, component, isFirst = false, isLast = false }:Props ) => {

    const navigation = useNavigation<any>();

    return (
        <Pressable
            onPress={ () => navigation.navigate( component ) }
        >
            <View style={{
                ...styles.container,
                backgroundColor: colors.cardBackground,
                ...( isFirst && { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10 }),
                ...( isLast && { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingBottom: 10 }),
            }}>
                <Ionicon name={ icon } size={25} color={ colors.primary } marginRight={10}/>
                <Text style={{ color: colors.text }}>{ name }</Text>
                <Ionicon name='chevron-forward-outline' size={25} color={ colors.primary } marginRight={10} marginLeft={'auto'}/>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    }
})