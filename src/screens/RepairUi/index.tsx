/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import CommentSection from './components/CommentSection';
import EmplyoeeSection from './components/EmplyoeeSection';
import PictureSection from './components/PictureSection';

export default function RepairUi() {
  const { width, height } = useWindowDimensions();
  const imageHeight = height * 0.38;

  return (
    <View style={styles.maincontainer}>
      <View style={styles.maincontainerwrapper}>
        <Image
          style={{
            width: width,
            height: imageHeight,
            resizeMode: 'cover',
            opacity: 0.9,
          }}
          source={require('../../assets/repair.jpg')}
        />
      </View>

      <View style={styles.bottomcontainer}>
        {/* absolute postion ko */}
        <View style={styles.absolutecontainer}>
          <Text style={{ color: 'white', fontSize: 19, fontWeight: '600' }}>
            Reliable Bathroom Repairs.
          </Text>
          <View style={{ gap: 1, paddingTop: 6 }}>
            <Text style={{ color: '#EEEFE0', fontSize: 13 }}>
              Object address: Moscow, St.. Petersburg 12
            </Text>
            <Text style={{ color: '#EEEFE0', fontSize: 13 }}>
              Work periods 4 days
            </Text>
          </View>
        </View>

        <View style={styles.maincontentcontainer}>
          {/* picture container ko */}
          <PictureSection />

          {/* comment container ko */}
          <CommentSection />

          {/* Emolyoee section */}
          <EmplyoeeSection />
        </View>
      </View>

      {/* absolute btn ko */}
      <View style={styles.absolutebottombtn}>
        <TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 18 }}>Reply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  maincontainerwrapper: {
    backgroundColor: 'black',
  },
  bottomcontainer: {
    marginTop: -50,
    backgroundColor: '#FAF7F3',
    flex: 1,
    position: 'relative',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000',
  },
  absolutecontainer: {
    position: 'absolute',
    top: -50,
    left: 20,
    right: 20,
    backgroundColor: '#27548A',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#c9cbcc',
  },
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
  absolutebottombtn: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#27548A',
    borderRadius: 99,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  maincontentcontainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    padding: 20,
  },
});
