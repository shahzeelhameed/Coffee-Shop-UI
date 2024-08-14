import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const Size = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 96,
    height: 43,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 12,
    margin: 7,
  },
  buttonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
  },
});

export default Size;
