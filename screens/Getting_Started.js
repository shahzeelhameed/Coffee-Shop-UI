import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  Pressable,
} from 'react-native';

import { useState } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function GettingStartedScreen({ navigation }) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={[
            styles.image,
            { width: windowWidth, height: windowHeight * 0.7 },
          ]}
          source={require('../assets/image/image 3.png')}
        />
      </View>

      <View style={styles.overlayContainer}>
        <Text style={styles.overlayText}>
          Coffee so good, your Taste buds will love it.
        </Text>
        <Text style={styles.subText}>
          The best grain, the finest roast, the powerful flavor
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          style={[styles.button, isPressed && styles.pressed]}
        >
          <Text style={styles.buttonText}>Getting Started</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default GettingStartedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  imageContainer: {
    height: windowHeight,
    marginBottom: 100,
  },

  image: {
    resizeMode: 'cover', // Ensure the image fits within the specified dimensions without distortion
  },

  overlayContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: windowHeight / 2 + 50,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black', // Example background color with opacity
    height: windowHeight / 2, // Height of the overlapping container
    paddingHorizontal: 30,
  },

  overlayText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 50,
  },

  subText: {
    color: '#A9A9A9',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 21.56,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 315,

    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#C67C4E',
    borderRadius: 16,
    marginTop: 30,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
  },

  pressed: {
    opacity: 0.5,
  },
});
