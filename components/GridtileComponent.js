import { View, StyleSheet, Image, Text, Pressable } from 'react-native';

function GridTileComponent({ image, title, subtitle, price, rating }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.Title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      <View style={styles.row}>
        <Text style={styles.price}>${price}</Text>

        <Pressable onPress={() => {}} style={styles.button}>
          <Image
            source={require('../assets/icons/plus.png')}
            style={styles.image}
          />
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/icons/star.png')} />
        <Text style={styles.Text}>{rating}</Text>
      </View>
    </View>
  );
}

export default GridTileComponent;

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 145,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: 14,
    justifyContent: 'space-between',
    margin: 10,
  },

  row: {
    height: 34,
    width: 150,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  image: {
    resizeMode: 'cover',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    width: 32,
    borderRadius: 10,
    marginRight: 10,
    marginTop: -3,

    backgroundColor: '#C67C4E',
  },

  Title: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    marginTop: -15,
    marginLeft: 7,
    letterSpacing: 1,
  },

  subtitle: {
    color: '#9B9B9B',
    fontSize: 12,
    fontWeight: '400',
    marginTop: -25,
    marginLeft: 7,
  },

  price: {
    color: '#2F4B4E',
    fontSize: 18,
    fontWeight: '800',
    margin: 4,
    marginLeft: 7,
  },

  imageContainer: {
    position: 'absolute',
    flexDirection: 'row',
    zIndex: 1,
    top: 5,
    left: 7,
  },

  Text: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 10,
    marginLeft: 2,
  },
});
