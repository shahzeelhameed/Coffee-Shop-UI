import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function TrackingScreen({ navigation }) {
  return (
    <>
      <Image source={require('../assets/icons/maps.png')} />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.button}
        >
          <Image source={require('../assets/icons/arrow-left.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Image source={require('../assets/icons/gps.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainerView}>
        <Image
          source={require('../assets/icons/Indicator.png')}
          style={{ marginBottom: 10 }}
        />
        <Text style={styles.text}>10 minutes left</Text>
        <View style={styles.row}>
          <Text style={[styles.text, { color: '#808080', fontSize: 12 }]}>
            Delivery to
          </Text>
          <Text style={[styles.text, { fontSize: 12, marginBottom: -4 }]}>
            Jl.Kpg Sutoyo
          </Text>
        </View>

        <View style={[styles.row, { marginTop: 15, marginBottom: 15 }]}>
          <Image
            source={require('../assets/icons/Rectangle 1717.png')}
            style={styles.indicators}
          />
          <Image
            source={require('../assets/icons/Rectangle 1717.png')}
            style={styles.indicators}
          />
          <Image
            source={require('../assets/icons/Rectangle 1717.png')}
            style={styles.indicators}
          />
          <Image
            source={require('../assets/icons/Rectangle 1720.png')}
            style={styles.indicators}
          />
        </View>

        <View
          style={[styles.deliveredYourOrderContainer, { marginBottom: 20 }]}
        >
          <View style={styles.row}>
            <View
              style={[
                styles.deliveredYourOrderContainer,
                {
                  height: 62,
                  width: 62,
                  borderRadius: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}
            >
              <Image source={require('../assets/icons/bike.png')} />
            </View>
            <View style={styles.column}>
              <Text style={[styles.text, { fontSize: 14 }]}>
                Delivered your order
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 12,
                    color: '#808080',
                    fontWeight: '400',
                  },
                ]}
              >
                We deliver your goods to you in {'\n'}the shortes possible time.
              </Text>
            </View>
          </View>
        </View>

        <View
          style={[
            styles.row,
            { justifyContent: 'space-between', width: windowWidth - 50 },
          ]}
        >
          <Image source={require('../assets/icons/Group 3147.png')} />

          <View
            style={[
              styles.column,
              { justifyContent: 'space-evenly', marginRight: 70 },
            ]}
          >
            <Text style={[styles.text, { fontSize: 14, letterSpacing: 1 }]}>
              Johan Hawn
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 14,
                  color: '#808080',
                  fontWeight: '400',
                },
              ]}
            >
              Personal Courier
            </Text>
          </View>

          <View
            style={[
              styles.deliveredYourOrderContainer,
              {
                height: 62,
                width: 62,
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}
          >
            <Image source={require('../assets/icons/bike.png')} />
          </View>
        </View>
      </View>
    </>
  );
}

export default TrackingScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    width: windowWidth - 40,
    // backgroundColor: 'red',
    position: 'absolute',
    zIndex: 1,
    top: 65,
    left: 30,
  },
  bottomContainerView: {
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    height: windowHeight / 2.5,
    width: windowWidth,
    borderRadius: 20,
    position: 'absolute',
    top: windowHeight / 2 + 90,
    padding: 5,
    paddingBottom: 5,
  },

  row: {
    flexDirection: 'row',
    // backgroundColor: 'red',
  },

  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: 44,
    borderRadius: 10,
    marginRight: 10,
    marginTop: -3,

    backgroundColor: '#FFFFFF',
  },

  text: {
    color: '#303336',
    fontSize: 16,
    fontWeight: '600',
  },

  indicators: {
    marginLeft: 10,
  },

  deliveredYourOrderContainer: {
    height: 90,
    width: 315,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 16,
    padding: 10,
  },
});
