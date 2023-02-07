import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../screens/ListScreen';
import SignInScreen from '../screens/SignInScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    //첫번째 화면 지정 방법
    //1. <Screen />의 순서
    //2. <Navigator initialRouteName="">를 통해 지정
    <Stack.Navigator>
      <Stack.Screen name={'SignIn'} component={SignInScreen} />
      <Stack.Screen name={'List'} component={ListScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;