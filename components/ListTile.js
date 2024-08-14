import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ListTileComponent() {
  return (
    <View style={styles.listTileContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.locationText}>Location</Text>
        <Text style={styles.cityText}>Bilzen,Tanjungbalai</Text>
      </View>

      <Image
        style={styles.image}
        source={require('../assets/image/Image.png')}
      />
    </View>
  );
}

export default ListTileComponent;

const styles = StyleSheet.create({
  listTileContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: 36,
    marginTop: 10,
    height: 50,
    width: windowWidth - 70,
    // backgroundColor: 'red',
  },

  textContainer: {
    flexDirection: 'column',
  },

  locationText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#B7B7B7',
  },

  cityText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#DDDDDD',
  },

  imageContainer: {
    height: 100,
    width: 100,
  },

  image: {
    resizeMode: 'cover',
    width: 40,
    height: 40,
  },
});
