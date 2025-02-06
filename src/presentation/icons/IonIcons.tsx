import { StyleProp, TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props {
    size?: number;
    color?: string;
    name: string;
    style?: StyleProp<TextStyle>;
}

export const Ionicon = ({
  name,
  size = 20,
  color = 'black',
  style
}:Props) => {
  return (
    <Icon
        name={ name }
        size={ size }
        color={ color }
        style={[
          style
        ]}
    />
  )
}
