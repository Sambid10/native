/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function EmplyoeeSection() {
  return (
    <View style={styles.emplyoeecontainer}>
      <View style={styles.emplyoeeinfo}>
        <View>
          <Image
            style={{
              borderRadius: 99,
              height: 50,
              width: 50,
              objectFit: 'cover',
            }}
            source={require('../../../assets/user1.jpg')}
          />
        </View>

        <View>
          <Text style={{ fontSize: 16, color: '#27548A', fontWeight: '600' }}>
            Mrs. Minju
          </Text>
          <Text style={{ fontSize: 14, color: '#333446' }}>
            Service Provider
          </Text>
        </View>
      </View>

      <View style={styles.emplyoeeicons}>
        <TouchableOpacity style={styles.iconbtns}>
          <Image
            style={{
              height: 40,
              width: 40,
            }}
            source={require('../../../assets/phone.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{
              height: 40,
              width: 40,
            }}
            source={require('../../../assets/msg.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emplyoeecontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emplyoeeinfo: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
  },
  emplyoeeicons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 18,
  },
  iconbtns: {
    borderRadius: 99,
    height: 40,
    width: 40,
    backgroundColor: '#27548A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
