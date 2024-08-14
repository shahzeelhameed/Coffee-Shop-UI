import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import DeliveryAddressComponent from '../components/DeliveryAdressComponent';
import DividerComponent from '../components/Divider';
import CartItem from '../components/cartItem';
import DiscountButtonComponent from '../components/DiscountButton';
import PaymentSummaryComponent from '../components/PaymentSummary';
import BottomContainerComponent from '../components/Bottomcontainer';

const windowWidth = Dimensions.get('window').width;

function OrderScreen({ navigation, route }) {
  let price = route.params.price;
  let title = route.params.title;
  let subtile = route.params.subtile;
  let image = route.params.image;

  const handlePop = () => {
    navigation.goBack(); // This will pop the current screen and navigate to the previous screen in the stack
  };

  const NavigateToTrackingScreen = () => {
    navigation.navigate('TrackingScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.listTileContainer}>
        <Pressable onPress={handlePop}>
          <Image
            style={styles.image}
            source={require('../assets/icons/arrow-left.png')}
          />
        </Pressable>

        <Text style={styles.Name}>Order</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => {}} style={styles.buttonStyle}>
          <Text style={{ fontWeight: '600', color: 'white', fontSize: 16 }}>
            Buy now
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          style={[styles.buttonStyle, { backgroundColor: '#F2F2F2' }]}
        >
          <Text style={{ fontWeight: '400', color: '#2F2D2C', fontSize: 16 }}>
            Pick Up
          </Text>
        </TouchableOpacity>
      </View>

      <DeliveryAddressComponent />
      {/* <DividerComponent /> */}
      <CartItem title={title} subtitle={subtile} image={image} price={price} />
      <DiscountButtonComponent />
      <PaymentSummaryComponent price={price} DeliveryFee={1.5} />
      <BottomContainerComponent
        price={price}
        DeliveryFee={1.5}
        onPress={NavigateToTrackingScreen}
      />
    </View>
  );
}

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    marginHorizontal: 10,
    marginTop: 40,
    paddingTop: 20,
    paddingLeft: 5,
    paddingRight: 10,
  },

  // App Bar Styling
  listTileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    height: 50,
    width: windowWidth - 60,

    // backgroundColor: 'red',
  },

  Name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2F2D2C',
    marginLeft: windowWidth / 4 + 20,
  },

  image: {
    resizeMode: 'cover',
  },
  // App Bar Styling End

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 35,
  },

  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 153,
    borderRadius: 10,
    backgroundColor: '#C67C4E',
    marginVertical: -23,
    marginHorizontal: 20,
  },
});
