import { View, Alert } from 'react-native';
import { globalStyles } from '../../../config/theme/Theme';
import { showPromt } from '../../../config/adapters/prompt.adapter';
import { CustomView, Title, Button } from '../../components';


export const AlertScreen = () => {

    const createTwoButtonAlert = () =>{
        Alert.alert('Alert Title', 'My Alert Msg', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'destructive',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ], {
            cancelable: true, // Es para que se pueda cerrar al tocar fuera de la alerta
        });
    };
    
    const createThreeButtonAlert = () =>{
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
            text: 'Ask me later',
            onPress: () => console.log('Ask me later pressed'),
            },
            {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    };

    const onShowPromt = () => {

        showPromt({
            title: 'Lorem ipsum dolor sit amet?',
            message: 'et vitae incidunt culpa repellendus dolorem impedit, perferendis soluta possimus officiis id delectus corporis.',
            buttons: [
                {
                    text: 'ok',
                    onPress: () => console.log('Ok'),
                    style: 'default'
                }
            ],
            options: {
                type: 'default',
                cancelable: false,
                placeholder: 'Placeholder',
            }
        });



        // Este es el codigo nativo sin ebargo en android no funciona
        // Alert.prompt(
        //     'Correo electronico',
        //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ratione eligendi pariatur libero tempora, sequi ipsa? Eaque, veritatis iusto odit dolores, provident dignissimos corrupti deleniti, debitis asperiores animi in officia!',
        //     ( valor: string ) => console.log({ valor }),
        //     'secure-text',
        //     'Soy el valor por defecto',
        //     'number-pad'
        // );
    }

    return (
        <CustomView style={ globalStyles.globalMargin }>
            <Title safe text='Alertas'/>

            <Button
                text='Alerta - 2 Botones'
                onPress={ createTwoButtonAlert }
            />
            <View style={{ height: 10 }}/>

            <Button
                text='Alerta - 3 Botones'
                onPress={ createThreeButtonAlert }
            />
            <View style={{ height: 10 }}/>

            <Button
                text='Prompt - input'
                onPress={ onShowPromt }
            />
            <View style={{ height: 10 }}/>

        </CustomView>
    )
}