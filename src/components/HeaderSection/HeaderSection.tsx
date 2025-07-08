import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function HeaderSection() {
  return (
    <View style={styles.headercontainer}>
      <View style={styles.headercontainerwrapper}>
        <TouchableOpacity>
            <Image style={styles.iconimg} source={require("../../assets/hamburger.png")}/>
        </TouchableOpacity>
        <Image style={styles.img} source={require('../../assets/user.jpg')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headercontainerwrapper: {
    display: 'flex',
    position:"absolute",
    top:0,
    width:"100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems:"center"
  },
  headercontainer: {
    height: 40,
  },
  iconimg:{
    objectFit:"cover",
    height:24,
    width:24,
 
  },
  img: {
    height: 42,
    width: 42,
    borderRadius: 99,
       borderWidth:2,
    borderColor:"black"
  },
});
