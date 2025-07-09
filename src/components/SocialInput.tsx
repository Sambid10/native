import { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
export default function SocialInput({
  placeholder,
  password = false,
  showicon = false,
}: {
  placeholder: string;
  password?: boolean;
  showicon?: boolean;
  handleValue: (val: string) => void;
}) {
  const [seePassword, setPassword] = useState(false);
  return (
    <View style={styles.textinputcontainer}>
      <TextInput
        autoCapitalize="none"
        secureTextEntry={password && !seePassword}
        placeholderTextColor={'gray'}
        style={styles.input}
        placeholder={placeholder}
      />
      {showicon && (
        <View style={styles.eyeiconwrapper}>
          <TouchableOpacity onPress={() => setPassword(prev => !prev)}>
            <Image
              style={styles.eyeicon}
              source={require('../assets/eye.png')}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textinputcontainer: {
    position: 'relative',
    height: 50,
  },
  input: {
    borderStyle: 'solid',
    borderRadius: 10,
    height: 'auto',
    borderColor: '#2F3437',
    borderWidth: 1,
    width: 'auto',
    padding: 14,
    paddingRight: 32,
    color: 'black',
    backgroundColor:"white",
    paddingLeft:12,
    shadowColor: '#393E46',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    elevation: 4,
  },
  eyeicon: {
    height: 20,
    width: 20,
  },
  eyeiconwrapper: {
    position: 'absolute',
    top: '30%',
    right: 10,
  },
});
