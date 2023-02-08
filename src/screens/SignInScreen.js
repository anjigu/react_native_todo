import { useEffect, useRef, useState } from 'react';
import { Alert, Image, Keyboard, SafeAreaView, StyleSheet, View } from 'react-native';
import { signIn } from '../api/auth';
import Button from '../components/Button';
import Input, {
  IconNames,
  KeyboardTypes,
  ReturnKeyTypes,
} from '../components/Input';
import SafeInputView from '../components/SafeInputView';
import PropTypes from 'prop-types';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //useRef은 값이 변해도 리렌더링 되지 않는다
  //valueRef.current에 값이 들어간다 
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  //로그인
  useEffect(() => {
    setDisabled(!email || !password)
  }, [email, password]) 

  const onSubmit = async () => {
    if (!disabled && !isLoading) {
      Keyboard.dismiss();
      setIsLoading(true);
      try {
        await signIn(email, password);       
        setIsLoading(false); 
        //화면 이동 
        navigation.navigate('List');
      } catch (e) {
        Alert.alert('SignIn Failed', e, [
          {
            text: 'OK',
            onPress: () => setIsLoading(false),
          },
        ]);
      }
    }
  };

  return (
    <SafeInputView>
      <SafeAreaView style={styles.container}> 
        <Image
          source={require('../../assets/main.png')}
          style={styles.image}
          resizeMode={'cover'}
        />
        <Input
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          title={'email'}
          placeholder={'your@email.com'}
          keyboardType={KeyboardTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
          iconName={IconNames.EMAIL}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          ref={passwordRef}
          value={password}
          onChangeText={(text) => setPassword(text.trim())}
          title={'password'}
          secureTextEntry
          iconName={IconNames.PASSWORD}
          onSubmitEditing={onSubmit}
        />

        <View style={styles.buttonContainer}>
          <Button 
          title={'LOGIN'} 
          onPress={onSubmit} 
          disabled={disabled} 
          />
        </View>
      </SafeAreaView>
    </SafeInputView>
  );
};

SignInScreen.PropTypes = {
  navigation: PropTypes.object,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default SignInScreen;