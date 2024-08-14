import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function BottomContainerComponent({ price, DeliveryFee, onPress }) {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.row}>
        <Image source={require('../assets/icons/moneys.png')} />
        <View style={styles.cash}>
          <Text style={{ fontSize: 12, fontWeight: '400', color: 'white' }}>
            Cash
          </Text>
        </View>
        <View
          style={[styles.cash, { backgroundColor: '#F6F6F6', marginLeft: 0 }]}
        >
          <Text style={{ fontSize: 12, fontWeight: '400' }}>
            $ {price + DeliveryFee}
          </Text>
        </View>
        <Image
          source={require('../assets/icons/Vector.png')}
          style={styles.image}
        />
      </View>

      <TouchableOpacity onPress={onPress} style={styles.orderButton}>
        <Text style={{ fontWeight: '600', color: 'white', fontSize: 16 }}>
          Buy now
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default BottomContainerComponent;

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    height: windowHeight / 4,
    width: windowWidth - 19,
    marginTop: 30,
    borderRadius: 16,
    padding: 15,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  cash: {
    height: 24,
    width: 50,
    borderRadius: 16,
    backgroundColor: '#C67C4E',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  image: {
    marginLeft: 170,
  },

  orderButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 62,
    width: windowWidth - 75,
    borderRadius: 10,
    backgroundColor: '#C67C4E',
    marginHorizontal: 10,
    marginTop: 20,
  },
});
