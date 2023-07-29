import { Text, Pressable } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from './iconbutton.style';

const IconButton = ({ icon, label, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.iconButton}>
        <MaterialIcons name={icon} size={24} color='#fff' />
        <Text style={ styles.iconButtonLabel }>{ label }</Text>
    </Pressable>
  )
}

export default IconButton;