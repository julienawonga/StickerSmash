import { View, Pressable, Text } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome'
import styles from "./button.style"



const Button = ({ label, theme }) => {
    return (
        theme === 'primary' ?
        (<View
                style={[styles.buttonContainer,
                    { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }
                ]}
        >
            <Pressable
                style={[styles.button, { backgroundColor: "#fff" }]}
                onPress={() => alert('You pressed a button.')}
            >
                <FontAwesome
                    name="picture-o"
                    size={18}
                    color="#25292e"
                    style={styles.buttonIcon}
                />
                <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
            </Pressable>
        </View>):
        (<View style = {styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
                <Text style={styles.buttonLabel}>{ label }</Text>
            </Pressable>
        </View>)
  )
}

export default Button