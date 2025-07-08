import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SocialButton from '../../components/SocialButton';
import SocialInput from '../../components/SocialInput';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type LoginScreenProp=NativeStackNavigationProp<RootStackParamList,"Login">
export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenProp>();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleEmail = (val: string) => {
    setemail(val);
  };
  const handlePassword = (val: string) => {
    setpassword(val);
  };

  const onSignupPress = () => {
    console.log(email, password);
    navigation.navigate('Todo');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In.</Text>

      <View style={styles.textinputcontainer}>
        <SocialButton
          title="Sign in with Google"
          urlpath={require('../../assets/google.png')}
        />
        <SocialButton
          title="Sign in with Facebook"
          urlpath={require('../../assets/facebook.png')}
        />

        <Text style={styles.seperator}>or</Text>

        <SocialInput
          handleValue={handleEmail}
          placeholder="Enter your email."
        />
        
        <SocialInput
          handleValue={handlePassword}
          placeholder="Enter your password."
          password={true}
          showicon={true}
        />
        <TouchableOpacity onPress={onSignupPress} style={styles.loginbtn}>
          <Text style={styles.btntitle}> Sign in.</Text>
        </TouchableOpacity>

        <View style={styles.linkcontainer}>
          <Text style={styles.linktext}>Dont have an account? </Text>
          <Text style={styles.maintext}>Create an account</Text>
        </View>
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF7F3',
  },

  title: {
    fontSize: 42,
    marginBottom: 32,
    color: '#27548A',
    fontWeight: '500',
  },
  textinputcontainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: '80%',
  },
  loginbtn: {
    backgroundColor: '#27548A',
    borderRadius: 99,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  btntitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },

  seperator: {
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 12,
    color: '#27548A',
    fontSize: 14,
  },
  linkcontainer: {
    marginTop: 2,
    display: 'flex',
    flexDirection: 'row',
  },

  linktext: {
    color: 'gray',
  },
  maintext: {
    color: '#27548A',
    fontWeight: '600',
  },
});
