import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

function AppBarComponent({ name }) {
  const navigation = useNavigation();

  const handlePop = () => {
    navigation.goBack(); // This will pop the current screen and navigate to the previous screen in the stack
  };
  return (
    <View style={styles.listTileContainer}>
      <Pressable onPress={handlePop}>
        <Image
          style={styles.image}
          source={require('../assets/icons/arrow-left.png')}
        />
      </Pressable>

      <Text style={styles.Name}>{name}</Text>

      <Pressable onPress={() => {}}>
        <Image
          style={styles.image}
          source={require('../assets/icons/Heart.png')}
        />
      </Pressable>
    </View>
  );
}

export default AppBarComponent;

const styles = StyleSheet.create({
  listTileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,

    height: 50,
    width: windowWidth - 60,

    // backgroundColor: 'red',
  },

  Name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2F2D2C',
  },

  image: {
    resizeMode: 'cover',
  },
});
