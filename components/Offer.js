import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

function OfferComponent() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/image 8.png')}
        style={styles.imageContainer}
      />
      <View style={styles.imageContentContainer}>
        <View style={styles.promoContainer}>
          <Text style={styles.promoText}>Promo</Text>
        </View>

        <View style={styles.butOneGetTextContainer}>
          <Text style={styles.butOneGetText}>Buy one get</Text>
        </View>

        <View style={styles.emptyContainer}></View>

        <View style={styles.oneFreeContainer}>
          <Text style={styles.oneFreeText}>one FREE</Text>
        </View>

        <View style={[styles.emptyContainer2]}></View>
      </View>
    </View>
  );
}

export default OfferComponent;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  imageContainer: {
    borderRadius: 16,
    resizeMode: 'cover',
    marginTop: 32,
  },
  imageContentContainer: {
    // backgroundColor: 'red',
    flexDirection: 'column',

    paddingTop: 10,
    height: 130,
    width: 300,
    position: 'absolute',
    top: 35,
    left: 20,
  },

  promoContainer: {
    backgroundColor: '#ED5151',
    justifyContent: 'center',
    alignItems: 'center',
    height: 26,
    width: 60,
    borderRadius: 12,
  },

  promoText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
  },

  emptyContainer: {
    backgroundColor: 'black',
    height: 30,
    width: 195,
    marginTop: 15,
  },
  emptyContainer2: {
    backgroundColor: 'black',
    height: 30,
    width: 153,
    marginTop: 15,
  },

  butOneGetText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    letterSpacing: 1,
  },

  butOneGetTextContainer: {
    position: 'absolute',
    top: 35,
    height: 40,
    width: 300,
    // backgroundColor: 'blue',
    zIndex: 1,
  },

  oneFreeContainer: {
    position: 'absolute',
    top: 82,
    zIndex: 1,
  },

  oneFreeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    letterSpacing: 1,
  },
});
