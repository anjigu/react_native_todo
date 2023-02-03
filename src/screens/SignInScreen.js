import { Image, StyleSheet, View } from 'react-native';
import Input from '../components/Input';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/main.png')}
        style={styles.image}
        resizeMode={'cover'}
      />

      <Input title={'email'} placeholder={'your@email.com'} />
      <Input title={'password'} placeholder={''} />
    </View>
  );
};