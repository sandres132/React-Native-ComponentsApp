import { View, Text, StyleSheet, Pressable, Animated, Easing } from 'react-native';
import { colors } from '../../../config/theme/Theme';
import { UseAnimation } from '../../hooks/useAnimation';
import { useCounter } from '../../hooks/useCounter';

export const Animation101Screen = () => {

    const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = UseAnimation();
    const { counter, decrement, increment } = useCounter();

    return (
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
                <Text style={{ fontSize: 100, fontWeight: 'bold'}}>{ counter }</Text>
            </Animated.View>

            <Pressable onPress={ () => {
                fadeIn({});
                startMovingTopPosition({
                    initialPosition: -140,
                    easing: Easing.elastic(2),
                    duration: 750
                });
            }} style={{ marginTop: 10 }}>
                <Text>FadeIn</Text>
            </Pressable>

            <Pressable onPress={ () => {
                startMovingTopPosition({
                    easing: Easing.elastic(2),
                    duration: 750,
                    toValue: 140
                });
                fadeOut({})
            }} style={{ marginTop: 10 }}>
                <Text>FadeOut</Text>
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
                <Text>Increment</Text>
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
                <Text>Decrement</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150,
    }
})