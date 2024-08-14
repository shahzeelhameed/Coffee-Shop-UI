import { useState } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Text,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function TextInputComponent() {
  const [text, onChangeText] = useState('');
  const [value, setIsPressed] = useState(false);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icons/search-normal.png')}
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        inputMode='text'
        maxLength={20}
        placeholder='Search coffee'
        placeholderTextColor='#989898'
      />

      <Pressable
        onPress={() => {}}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        style={styles.button}
      >
        <Image
          source={require('../assets/icons/setting-4.png')}
          style={styles.image}
        />
      </Pressable>
    </View>
  );
}

export default TextInputComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    height: 52,
    width: 324,
    backgroundColor: '#313131',
    // marginLeft: 33.5,
    marginTop: 13,
    borderRadius: 16,
  },

  image: {
    margin: 10,
  },

  input: {
    fontSize: 14,
    color: 'white',
    flex: 1,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: 44,
    margin: 3,

    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#C67C4E',
    borderRadius: 16,
  },
});
