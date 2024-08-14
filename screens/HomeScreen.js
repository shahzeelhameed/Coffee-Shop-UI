import { View, StyleSheet, FlatList, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ListTileComponent from '../components/ListTile';
import TextInputComponent from '../components/TextInput';
import OfferComponent from '../components/Offer';
import CategoryComponent from '../components/CategoryComponent';
import listOfCoffee from '../data/data';
import GridTileComponent from '../components/GridtileComponent';

export const categories = ['Cappuccino', 'Machiato', 'Latte', 'Tea'];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.rootContainer}>
      <LinearGradient
        colors={['#131313', '#313131']}
        style={styles.Gradientcontainer}
      />

      <View style={styles.contentContainer}>
        <ListTileComponent />
        <TextInputComponent />
        <OfferComponent />

        <View style={styles.flatListContainer}>
          <FlatList
            data={categories}
            horizontal={true}
            renderItem={({ item }) => <CategoryComponent name={item} />}
          />
        </View>

        {/* <View style={styles.GridTitleContainer}> */}
        <FlatList
          data={listOfCoffee}
          // keyExtractor={(item, index) => item.id}
          numColumns={2}
          contentContainerStyle={styles.GridListStyle}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                navigation.navigate('CoffeeDetailsScreen', {
                  id: item.id,
                  title: item.title,
                  subtile: item.subtitle,
                  rating: item.rating,
                  description: item.description,
                  image: item.image,
                  price: item.price,
                });
              }}
            >
              <GridTileComponent
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            </Pressable>
          )}
        />
        {/* </View> */}
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  Gradientcontainer: {
    height: 280,
  },

  contentContainer: {
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: 'red',
    top: 50,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
  },

  flatListContainer: {
    marginLeft: 30,
    height: 70,
  },

  Text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 50,
  },

  GridListStyle: {
    marginLeft: 20,
  },
});
