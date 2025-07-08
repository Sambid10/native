import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function SearchInput() {
  return (
    <View style={styles.textinputcontainer}>
      <TextInput
        placeholderTextColor="#393E46"
        placeholder="Search"
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.iconcontainer}>
        <Image
          style={styles.searchicon}
          source={require('../../assets/search.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textinputcontainer: {
    width: '100%',
    position: 'relative',
    zIndex:0,
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    height: 45,
    paddingLeft: 35,
    borderColor: '#242424',
    shadowColor: '#393E46',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    elevation: 4,
  },
  iconcontainer: {
    position: 'absolute',
    left: 10,
    zIndex:10,
    top: '30%',
  },
  searchicon: {
    height: 18,
    width: 18,
  },
});
