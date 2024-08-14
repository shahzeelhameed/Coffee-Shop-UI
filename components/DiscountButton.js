import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const DiscountButtonComponent = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={require('../assets/icons/Discount.png')}
        style={styles.icon}
      />

      <Text style={styles.buttonText}>1 Discount is applied</Text>

      <Image
        source={require('../assets/icons/arrow-right.png')}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default DiscountButtonComponent;

const styles = StyleSheet.create({
  button: {
    height: 56,
    width: 320,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#9B9B9B',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 16,
    margin: 20,
  },
  buttonText: {
    fontSize: 16,
    marginRight: 70,
    fontWeight: '600',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain', // Adjust the image resize mode as needed
  },
});
