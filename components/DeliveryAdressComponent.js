import {
  View,
  StyleSheet,
  Text,
  Button,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import DividerComponent from './Divider';

function DeliveryAddressComponent() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'black',
          fontSize: 16,
          fontWeight: '600',

          marginTop: 10,
        }}
      >
        Delivery Address
      </Text>

      <Text
        style={{
          color: '#303336',
          fontSize: 14,
          fontWeight: '600',
          letterSpacing: 1,

          marginTop: 15,
        }}
      >
        Jl. Kpg Sutoyo
      </Text>

      <Text
        style={{
          color: '#808080',
          fontSize: 14,
          fontWeight: '400',
        }}
      >
        Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.buttonStyle}>
            <Image source={require('../assets/icons/edit.png')} />
            <Text
              style={{
                color: '#303336',
                fontSize: 12,
                fontWeight: '400',
                marginRight: 10,
              }}
            >
              Edit Address
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <View
            style={[
              styles.buttonStyle,
              { marginLeft: 10, width: 101, height: 27 },
            ]}
          >
            <Image source={require('../assets/icons/edit.png')} />
            <Text
              style={{
                color: '#303336',
                fontSize: 12,
                fontWeight: '400',
                marginRight: 10,
              }}
            >
              Add Note
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DeliveryAddressComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 23,
  },

  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingTop: 5,

    height: 27,
    width: 120,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    marginTop: 20,
  },

  buttonRow: {
    flexDirection: 'row',
  },
});
