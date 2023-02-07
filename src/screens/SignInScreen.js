import { useEffect, useRef, useState } from 'react';
import { Image, Keyboard, StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import Input, {
  IconNames,
  KeyboardTypes,
  ReturnKeyTypes,
} from '../components/Input';
import SafeInputView from '../components/SafeInputView';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //useRef은 값이 변해도 리렌더링 되지 않는다
  //valueRef.current에 값이 들어간다 
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {}) //렌더링 할 때마다 항상 호출

  const onSubmit = () => {
    if (!disabled) {
      Keyboard.dismiss();
      console.log('onSubmit');
    }
  };

  return (
    <SafeInputView>
      <View style={styles.container}>
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
          <Button title={'LOGIN'} onPress={onSubmit} disabled={disabled} />
        </View>
      </View>
    </SafeInputView>
  );
};

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