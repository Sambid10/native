/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

const itemData = [
  {
    title: 'Cleaning',
    icon: (
      <Image
        style={{ width: 35, height: 35 }}
        source={require('../../../assets/clean.png')}
      />
    ),
    color: '#f0fdf4',
  },
  {
    title: 'Painting',
    icon: (
      <Image
        style={{ width: 35, height: 35 }}
        source={require('../../../assets/paint.png')}
      />
    ),
    color: '#eff6ff',
  },
  {
    title: 'Heating',
    icon: (
      <Image
        style={{ width: 35, height: 35 }}
        source={require('../../../assets/therm.png')}
      />
    ),
    color: '#faf5ff',
  },
  {
    title: 'Pumbling',
    icon: (
      <Image
        style={{ width: 35, height: 35 }}
        source={require('../../../assets/tap.png')}
      />
    ),
    color: '#fff7ed',
  },
];
export default function PictureSection() {
  return (
    <View style={styles.choosecontainer}>
      <FlatList
        data={itemData}
        renderItem={({ item }) => (
          <>
            <View style={[styles.gridstyle, { backgroundColor: item.color }]}>
              {item.icon}
              <Text style={{ fontSize: 12, fontWeight: '200' }}>
                {item.title}
              </Text>
            </View>
            <View style={{ width: 6 }} />
          </>
        )}
        keyExtractor={item => item.title}
        numColumns={4}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  choosecontainer: {
    marginTop: 60,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#c9cbcc',
    padding: 8,
  },
  gridstyle: {
    flex: 1,
    maxWidth: '25%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
    gap: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#c9cbcc',
  },
});
