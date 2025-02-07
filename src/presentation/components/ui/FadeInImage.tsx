import { useState } from 'react';
import { View, Text, StyleProp, Image, ImageStyle, Animated, ActivityIndicator } from 'react-native';
import { UseAnimation } from '../../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ( { uri, style }:Props ) => {

    const { animatedOpacity, fadeIn } = UseAnimation();
    const [isLoading, setIsLoading] = useState(true);

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

            <ActivityIndicator
                style={{ position: 'absolute' }}
                color='grey'
                size={ 30 }
            />

            <Animated.Image
                source={{ uri }}
                onLoadEnd={ () => {
                    fadeIn({ duration: 500 });
                    setIsLoading(false);
                }}
                style={[ style, { opacity: animatedOpacity } ]}
            />
            
        </View>
    )
}