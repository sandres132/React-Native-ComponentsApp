import { useEffect, useRef, useState } from 'react';
import { Animated, PanResponder, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

export const Animation102Screen = () => {

    // TODO: hacer que se renderice en el Animated.view la localizacion del box

    const pan = useRef(new Animated.ValueXY()).current;
    // const [panCoords, setPanCoords] = useState(pan.getLayout())

    // useEffect(() => {
    //   setPanCoords( pan.getLayout() )
    //   console.log(pan.getLayout());
      
    
    // }, [pan])
    

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x, // x,y are Animated.Value
                dy: pan.y,
            },
        ]),
        onPanResponderRelease: () => {
            Animated.spring(
                pan, // Auto-multiplexed
                {
                    toValue: {
                        x: 0, 
                        y: 0
                    },
                    useNativeDriver: false
                }, // Back to zero
            ).start();
        },
    });

    return (
        <View style={ styles.container }>
            <Animated.View
                {
                    ...panResponder.panHandlers
                }
                style={[
                    pan.getLayout(), 
                    styles.box
                ]}
            >
                {/* <Text>{ JSON.stringify( panCoords ) }</Text> */}
                <Text>hola</Text>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      backgroundColor: '#61dafb',
      width: 80,
      height: 80,
      borderRadius: 4,
    },
  });