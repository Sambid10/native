/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const itemData = [
  {
    title: 'Cleaning',
    icon: (
      <Image
        style={{ width: 35, height: 35 }}
        source={require('../../assets/clean.png')}
      />
    ),
    color: '#f0fdf4',
  },
  {
    title: 'Painting',
    icon: (
      <Image
        style={{ width: 35, height: 35 }}
        source={require('../../assets/paint.png')}
      />
    ),
    color: '#eff6ff',
  },
  {
    title: 'Heating',
    icon: (
      <Image
        style={{ width: 35, height: 35 }}
        source={require('../../assets/therm.png')}
      />
    ),
    color: '#faf5ff',
  },
  {
    title: 'Pumbling',
    icon: (
      <Image
        style={{ width: 35, height: 35 }}
        source={require('../../assets/tap.png')}
      />
    ),
    color: '#fff7ed',
  },
];

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
          <View style={styles.choosecontainer}>
            <FlatList
              data={itemData}
              renderItem={({ item }) => (
                <>
                  <View
                    style={[styles.gridstyle, { backgroundColor: item.color }]}
                  >
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

          {/* comment container ko */}
          <View style={styles.commentsection}>
            <View style={styles.tableheader}>
              <Text
                style={{
                  color: '#27548A',
                  fontSize: 16,
                  textDecorationLine: 'underline',
                }}
              >
                Description
              </Text>
              <Text style={{ fontSize: 16 }}>Review</Text>
            </View>
            <View style={styles.descriptioncontainer}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'thin',
                  lineHeight: 20,
                  color: '#333446',
                }}
              >
                From Leaky faucets to broken tikes our proffesional repair time
                handles all types of bathroom issues..{' '}
                <Text
                  style={{ fontSize: 14, fontWeight: 'thin', color: '#27548A' }}
                >
                  Read more
                </Text>
              </Text>
            </View>
          </View>

            {/* Emolyoee section */}
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
                  source={require('../../assets/user1.jpg')}
                />
              </View>

              <View>
                <Text
                  style={{ fontSize: 16, color: '#27548A', fontWeight: '600' }}
                >
                  Mrs. Minju
                </Text>
                <Text style={{ fontSize: 14, color: '#333446' }}>
                  Service Provider
                </Text>
              </View>
            </View>

            <View style={styles.emplyoeeicons}>
              <TouchableOpacity style={styles.iconbtns}>
                    <Image style={{
                        height:40,
                        width:40,
                    }} source={require("../../assets/phone.png")}/>
              </TouchableOpacity>
                <TouchableOpacity >
                   <Image style={{
                        height:40,
                        width:40,
                    }} source={require("../../assets/msg.png")}/>
              </TouchableOpacity>
            </View>
          
          </View>
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
    bottom: 12,
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
  tableheader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  commentsection: {
    borderRadius: 16,
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  descriptioncontainer: {
    backgroundColor: '#eff6ff',
    marginLeft: -16,
    marginRight: -16,
    padding: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#c9cbcc',
    borderRadius: 12,
  },
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
    display:"flex",
    flexDirection:"row",
    gap:18,
  },
  iconbtns:{
    borderRadius:99,
     height: 40,
     width: 40,
     backgroundColor:"#27548A",
     display:"flex",
     alignItems:"center",
     justifyContent:"center"
  }
});
