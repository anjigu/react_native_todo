import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WHITE } from '../colors';
import SignInScreen from '../screens/SignInScreen';

const Stack = createNativeStackNavigator();

//로그인 전 화면만 보여주는 스택
const AuthStack = () => {
  return (
    //첫번째 화면 지정 방법
    //1. <Screen />의 순서
    //2. <Navigator initialRouteName="">를 통해 지정
    <Stack.Navigator 
    screenOptions={{
        contentStyle: {backgroundColor: WHITE},     
}}
>
    <Stack.Screen 
    name={'SignIn'} 
    component={SignInScreen}
    options={{
        headerShown: false,
    }}>
    </Stack.Screen>
    </Stack.Navigator>
  );
};
export default AuthStack;