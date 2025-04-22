import { TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const AnimatedButton = ({ onPress}:{onPress:any}) => {
  return (
    <Animatable.View
      animation="bounceIn"
      duration={1500}
      style={styles.buttonContainer}
    >
      <TouchableOpacity onPress={onPress} style={styles.button}>
      <MaterialIcons name="add" size={28} color="white" />     
       </TouchableOpacity>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  button: {
    backgroundColor: 'blue',
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default AnimatedButton;
