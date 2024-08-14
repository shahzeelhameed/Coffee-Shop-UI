import { View, StyleSheet, Text, Pressable } from 'react-native';

function CategoryComponent({ name }) {
  return (
    <Pressable onPress={() => {}}>
      <View style={styles.container}>
        <Text style={styles.Text}>{name}</Text>
      </View>
    </Pressable>
  );
}

export default CategoryComponent;

const styles = StyleSheet.create({
  container: {
    height: 38,
    width: 120,
    backgroundColor: '#FFFFFF',
    margin: 8,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },

  Text: {
    color: 'white',
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: 1,
    color: 'black',
  },
});
