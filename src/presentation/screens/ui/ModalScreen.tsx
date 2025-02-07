import { View, Text, Modal, Platform } from 'react-native';
import { Button, CustomView, Title } from '../../components';
import { useState } from 'react';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <CustomView>
            <Title text='Modal' safe />

            <Button
                text='Abrir Modal'
                onPress={ () => setIsVisible(true) }
            />

            <Modal
                visible={ isVisible }
                animationType='slide'

            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.1)'
                }}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Title text='Modal Content' safe/>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eum animi beatae temporibus! Eveniet amet libero exercitationem, quibusdam quos quam vitae nulla ut, maxime minus voluptas ducimus necessitatibus, rem placeat.</Text>
                    </View>

                    <View style={{ flex: 1 }} />

                    <Button
                        text='Cerrar Modal'
                        onPress={ () => setIsVisible(false) }
                        style={{
                            height: Platform.OS === 'android' ? 40 : 60,
                            borderRadius: 0
                        }}
                    />

                </View>
            </Modal>

        </CustomView>
    )
}