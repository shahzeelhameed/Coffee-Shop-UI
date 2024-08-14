import { View, StyleSheet, Text, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

function PaymentSummaryComponent({ price, DeliveryFee }) {
  return (
    <>
      <View style={styles.container}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: '600',

            marginLeft: 25,
          }}
        >
          Payment Summary
        </Text>

        <View style={styles.row}>
          <Text
            style={{
              color: '#2F2D2C',
              fontSize: 14,
              fontWeight: '400',

              marginLeft: 25,
              marginTop: 10,
            }}
          >
            Price
          </Text>
          <Text
            style={{
              color: '#2F2D2C',
              fontSize: 14,
              fontWeight: '600',

              marginLeft: 25,
              marginTop: 10,
            }}
          >
            ${price}
          </Text>
        </View>
        <View style={styles.row}>
          <Text
            style={{
              color: '#2F2D2C',
              fontSize: 14,
              fontWeight: '400',

              marginLeft: 25,
              marginTop: 10,
            }}
          >
            Delivery Fee
          </Text>
          <Text
            style={{
              color: '#2F2D2C',
              fontSize: 14,
              fontWeight: '600',

              marginLeft: 25,
              marginTop: 10,
            }}
          >
            $ {DeliveryFee}
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text
          style={{
            color: '#2F2D2C',
            fontSize: 14,
            fontWeight: '400',

            marginLeft: 25,
            marginTop: 10,
          }}
        >
          Total Payment
        </Text>
        <Text
          style={{
            color: '#2F2D2C',
            fontSize: 14,
            fontWeight: '600',

            marginLeft: 25,
            marginTop: 10,
          }}
        >
          $ {price + DeliveryFee}
        </Text>
      </View>
    </>
  );
}

export default PaymentSummaryComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    marginLeft: 5,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: windowWidth - 50,
    marginTop: 5,
  },
});
