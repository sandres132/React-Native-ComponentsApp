import { View, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Card, CustomView, Title } from '../../components';
import { globalStyles } from '../../../config/theme/Theme';
import { useContext, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { ThemeContext } from '../../context/ThemeContext';

export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    })
    
    const { colors, currentTheme } = useContext( ThemeContext );

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined }>
            <ScrollView style={{ backgroundColor: colors.background }}>
                <CustomView margin>
                    <Title text='Text Inputs' safe/>

                    <Card>
                        <TextInput
                            style={[
                                globalStyles.input,
                                {color: colors.text},
                                currentTheme === 'dark' ? {borderColor: colors.text} : null
                            ]}
                            placeholder='Nombre Completo'
                            placeholderTextColor={colors.text}
                            autoCapitalize={ 'words'}
                            autoCorrect={ false }
                            onChangeText={ value => setForm({ ...form, name: value }) }
                        />
                        <TextInput
                            style={[
                                globalStyles.input,
                                {color: colors.text},
                                currentTheme === 'dark' ? {borderColor: colors.text} : null
                            ]}
                            placeholder='Correo Electronico'
                            placeholderTextColor={colors.text}
                            autoCapitalize={ 'none'}
                            autoCorrect={ false }
                            keyboardType='email-address'
                            onChangeText={ value => setForm({ ...form, email: value }) }
                        />
                        <TextInput
                            style={[
                                globalStyles.input,
                                {color: colors.text},
                                currentTheme === 'dark' ? {borderColor: colors.text} : null
                            ]}
                            placeholder='Telefono'
                            placeholderTextColor={colors.text}
                            keyboardType='phone-pad'
                            onChangeText={ value => setForm({ ...form, phone: value }) }
                        />
                    </Card>

                    <View style={{ height: 10 }} />

                    <Card>
                        <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
                        <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
                        <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
                        <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
                        <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
                        <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
                        <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
                        <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
                        <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
                        <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
                        <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
                        <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2 ) }</Text>
                    </Card>

                    <View style={{ height: 10 }} />

                    <Card>
                        <TextInput
                            style={[
                                globalStyles.input,
                                {color: colors.text},
                                currentTheme === 'dark' ? {borderColor: colors.text} : null
                            ]}
                            placeholder='Telefono'
                            placeholderTextColor={colors.text}
                            keyboardType='phone-pad'
                            onChangeText={ value => setForm({ ...form, phone: value }) }
                        />
                    </Card>
                </CustomView>

                <View style={{ height: 20 }} />

            </ScrollView>
        </KeyboardAvoidingView>
    )
}