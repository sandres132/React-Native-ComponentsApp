import { View, Text, StyleSheet, Pressable, Animated, Easing } from 'react-native';
import { UseAnimation } from '../../hooks/useAnimation';
import { useCounter } from '../../hooks/useCounter';
import { CustomView } from '../../components';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const Animation101Screen = () => {

    const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = UseAnimation();
    const { counter, decrement, increment } = useCounter();
    const { colors } = useContext( ThemeContext );
    
    return (
        <CustomView>
            <View style={ styles.container }>
                <Animated.View style={[
                    // styles.purpleBox,
                    {
                        opacity: animatedOpacity,
                        transform: [{
                            translateY: animatedTop,
                        }],
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }
                ]}>
                    <Text style={{ fontSize: 100, fontWeight: 'bold', color: colors.text }}>{ counter }</Text>
                </Animated.View>

                <Pressable onPress={ () => {
                    fadeIn({});
                    startMovingTopPosition({
                        initialPosition: -140,
                        easing: Easing.elastic(2),
                        duration: 750
                    });
                }} style={{ marginTop: 10 }}>
                    <Text style={{ color: colors.text }}>FadeIn</Text>
                </Pressable>

                <Pressable onPress={ () => {
                    startMovingTopPosition({
                        easing: Easing.elastic(2),
                        duration: 750,
                        toValue: 140
                    });
                    fadeOut({})
                }} style={{ marginTop: 10 }}>
                    <Text style={{ color: colors.text }}>FadeOut</Text>
                </Pressable>
                

                <Pressable onPress={ () => {
                    fadeIn({});
                    startMovingTopPosition({
                        initialPosition: -140,
                        easing: Easing.elastic(2),
                        duration: 750
                    });
                    increment(1)
                }} style={{ marginTop: 10 }}>
                    <Text style={{ color: colors.text }}>Increment</Text>
                </Pressable>

                <Pressable onPress={ () => {
                    // startMovingTopPosition({
                    //     easing: Easing.elastic(2),
                    //     duration: 450,
                    //     toValue: 140
                    // });
                    // fadeOut({});
                    // decrement(1)
                    // startMovingTopPosition({
                    //     initialPosition: 140,
                    //     easing: Easing.elastic(2),
                    //     duration: 450,
                    //     callback: () => fadeIn({ duration: 50 })
                    // });
                    fadeIn({});
                    startMovingTopPosition({
                        initialPosition: 140,
                        easing: Easing.elastic(2),
                        duration: 750
                    });
                    decrement(1)
                }} style={{ marginTop: 10 }}>
                    <Text style={{ color: colors.text }}>Decrement</Text>
                </Pressable>
            </View>
        </CustomView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    purpleBox: {
        width: 150,
        height: 150,
    }
})