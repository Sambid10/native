import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { View } from 'react-native';
import { Image, Text } from 'react-native';

interface Props {
  title?: string;
  urlpath?: ImageSourcePropType;
}
export default function SocialButton({ title, urlpath }: Props) {
  return (
    <>
      <TouchableOpacity style={styles.socialbtn}>
        <View style={styles.wrapper}>
          <Image style={styles.logo} source={urlpath} />
          <Text style={styles.btntitle}>{title}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  socialbtn: {
    height: 45,
    borderWidth: 1,
    borderColor: '#2F3437',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99,
    shadowColor: '#393E46',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    elevation: 4,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logo: {
    height: 22,
    width: 22,
  },
  btntitle: {
    color: 'black',
    fontSize: 16,
  },
});
