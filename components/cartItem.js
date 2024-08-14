import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CartItem = ({ title, subtitle, image, price }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtext}>{subtitle}</Text>
      </View>
      <View style={styles.counterContainer}>
        <TouchableOpacity
          onPress={decrementQuantity}
          style={styles.counterButton}
        >
          <Text style={styles.counterButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity
          onPress={incrementQuantity}
          style={styles.counterButton}
        >
          <Text style={styles.counterButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    marginTop: 30,
    marginHorizontal: 8,
  },
  image: {
    width: 54,
    height: 54,
    borderRadius: 10,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  subtext: {
    fontSize: 12,
    color: '#9B9B9B',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#9B9B9B',

    borderRadius: 20,
  },
  counterButtonText: {
    fontSize: 20,
    color: '#444',
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default CartItem;
