import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AppBar from '../components/Appbar';

import Size from '../components/Size';
import DividerComponent from '../components/Divider';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const size = ['S', 'M', 'L'];

function CoffeeDetailsScreen({ route, navigation }) {
  let price = route.params.price;
  let title = route.params.title;
  let subtile = route.params.subtile;
  let description = route.params.description;
  let image = route.params.image;
  let rating = route.params.rating;
  return (
    <View style={styles.container}>
      <AppBar name={'Detail'} />
      <Image source={image} style={styles.image} />
      <View style={styles.mainContentContainer}>
        <Text style={styles.Title}>{title}</Text>
        <Text style={styles.subtitle}>{subtile}</Text>

        <View style={styles.listTileContainer}>
          <View style={styles.SubRow}>
            <Image
              source={require('../assets/icons/star.png')}
              style={styles.ratingIcon}
            />
            <Text style={{ fontSize: 17, fontWeight: '600', marginLeft: 4 }}>
              {rating}
            </Text>

            <Text style={{ fontSize: 12, fontWeight: '400', marginLeft: 4 }}>
              (230)
            </Text>
          </View>

          <View style={[styles.SubRow, { marginBottom: 15 }]}>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Image source={require('../assets/image/bean.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Image source={require('../assets/image/milk.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <DividerComponent />

        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: '600',
            letterSpacing: 1,
            marginTop: 10,
          }}
        >
          Description
        </Text>

        <Text
          style={{
            color: '#9B9B9B',
            fontSize: 14,
            fontWeight: '600',
            lineHeight: 22.5,

            marginTop: 10,
          }}
        >
          {description}
        </Text>

        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: '600',
            letterSpacing: 1,
            marginTop: 20,
          }}
        >
          Size
        </Text>

        <FlatList
          data={size}
          keyExtractor={(index) => index.toString()}
          horizontal={true}
          renderItem={({ item }) => <Size title={item} onPress={() => {}} />}
        />
      </View>

      <View style={styles.bottomContainer}>
        <Text
          style={{
            color: '#9B9B9B',
            fontSize: 14,
            fontWeight: '400',
            letterSpacing: 1,
            marginTop: 20,
          }}
        >
          Price
        </Text>

        <View style={styles.BottomCRow}>
          <Text
            style={{
              color: '#C67C4E',
              fontSize: 20,
              fontWeight: '700',
              letterSpacing: 1,
              marginTop: 5,
            }}
          >
            ${price}
          </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('OrderScreen', {
                title: title,
                subtile: subtile,
                image: image,
                price: price,
              });
            }}
            style={styles.Buynow}
          >
            <Text style={{ fontWeight: '600', color: 'white', fontSize: 16 }}>
              Buy now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CoffeeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    // backgroundColor: 'red',
    marginHorizontal: 10,

    marginTop: 40,
    paddingTop: 20,
    paddingLeft: 5,
    paddingRight: 10,
  },

  mainContentContainer: {
    // backgroundColor: 'red',
    marginLeft: 13,
    flexDirection: 'column',
    alignContent: 'flex-start',
    // backgroundColor: 'red',
    flex: 1,
  },

  listTileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,

    height: 50,
    width: windowWidth - 60,

    // backgroundColor: 'red',
  },

  SubRow: {
    flexDirection: 'row',
    alignItems: 'center',

    // backgroundColor: 'red',
  },

  image: {
    width: windowWidth - 50,
    height: windowHeight / 2 - 200,
    borderRadius: 16,
    margin: 10,
  },

  Title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1,
  },

  subtitle: {
    color: '#9B9B9B',
    fontSize: 13,
    fontWeight: '400',
    marginTop: 10,
  },

  ratingIcon: {
    height: 20,
    width: 20,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: 44,
    borderRadius: 10,
    marginRight: 10,
    marginTop: -3,

    backgroundColor: '#F9F9F9',
  },

  bottomContainer: {
    backgroundColor: 'white',
    height: windowHeight / 6,
    width: windowWidth - 20,
    borderRadius: 16,
    paddingLeft: 20,
  },

  BottomCRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },

  Buynow: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 62,
    width: 217,
    borderRadius: 10,
    backgroundColor: '#C67C4E',
    marginVertical: -23,
    marginHorizontal: 20,
  },
});
