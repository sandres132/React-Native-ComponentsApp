import { useState } from 'react';
import { CustomView, Card, CustomSwitch, Separator } from '../../components';

export const SwitchScreen = () => {

    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [ state, setState ] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    })

    return (
        <CustomView style={{ marginTop: 100, paddingHorizontal: 10 }}>
            <Card>
                <CustomSwitch
                    isOn={ state.isActive }
                    onChange={ (value) => setState({ ...state, isActive: value}) }
                    text='Esta activo?'
                />

                <Separator/>

                <CustomSwitch
                    isOn={ state.isHungry }
                    onChange={ (value) => setState({ ...state, isHungry: value}) }
                    text='Tiene hambre?'
                />

                <Separator/>

                <CustomSwitch
                    isOn={ state.isHappy }
                    onChange={ (value) => setState({ ...state, isHappy: value}) }
                    text='Es feliz?'
                />
            </Card>
        </CustomView>
    )
}