import { useContext, useEffect, useRef, useState } from 'react';
import { Alert, Image, Keyboard, StyleSheet, View } from 'react-native';
import { signIn } from '../api/auth';
import Button from '../components/Button';
import Input, {
  IconNames,
  KeyboardTypes,
  ReturnKeyTypes,
} from '../components/Input';
import SafeInputView from '../components/SafeInputView';
import PropTypes from 'prop-types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import UserContext from '../contexts/UserContet';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //useRef은 값이 변해도 리렌더링 되지 않는다
  //valueRef.current에 값이 들어간다 
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const insets = useSafeAreaInsets();
  //데이터를 받아와야할 때마다 UserContext.Consumer 사용해야하는 불편함 줄여주는 Hook
  const {setUser} = useContext(UserContext);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  //5. setUser를 사용하는 onSubmit 함수에 전달하기 위해 
  //7. onSubmit 함수에서는 전달된 setUser를 사용해서 
  const onSubmit = async () => {
    if (!disabled && !isLoading) {
      Keyboard.dismiss();
      setIsLoading(true);
      try {
        //8. signIn 함수가 성공했을때 전달된 데이터로 
        const data = await signIn(email, password);
        setIsLoading(false);
        //9. 유저 상태 변수를 수정했다 
        setUser(data);
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
    //3. 데이터를 받는 곳, UserContext의 Consumer를 사용해서 render props 패턴으로 받으면 된다
    //4. 파라미터로 전달된 setUser를 받아와서 
    // <UserContext.Consumer>
    //   {({ setUser}) => {
    //     return (
    <SafeInputView>
      <View
        style={[
          styles.container,
          { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
      >
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
          // onSubmitEditing={() => onSubmit(setUser)}
          onSubmitEditing={onSubmit}
        />
        <View style={styles.buttonContainer}>
          <Button
            title={'LOGIN'}
            // 6. onSubmit 함수를 호출하는 곳애서 setUser를 파라미터로 전달
            // onPress={() => onSubmit(setUser)}
            onPress={onSubmit}
            disabled={disabled}
            isLoading={isLoading}
          />
        </View>
      </View>
    </SafeInputView>
    //     );
    //   }}
    // </UserContext.Consumer>
  );
};
SignInScreen.propTypes = {
  navigation: PropTypes.object,
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