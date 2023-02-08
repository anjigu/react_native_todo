import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PRIMARY, WHITE } from '../colors';
import ListScreen from '../screens/ListScreen';
import SignInScreen from '../screens/SignInScreen';
import HeaderLeftButton from '../components/HeaderLeftButton';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    //첫번째 화면 지정 방법
    //1. <Screen />의 순서
    //2. <Navigator initialRouteName="">를 통해 지정
    <Stack.Navigator initialRouteName={'SignIn'} 
    screenOptions={{
        contentStyle: {backgroundColor: WHITE},
        headerTitleAlign: 'center', //안드로이드 화면을 위한 별도의 설정
        headerTintColor: PRIMARY.DEFAULT,
        headerTitleStyle: { fontWeight: '700'},
        title: 'TODO LIST',
        headerBackTitleVisible: false, //Ios 뒤로가기 버튼에서도 타이틀이 보이지 않게 함
        headerLeft: HeaderLeftButton,  //헤더 왼쪽 버튼 뒤로가기 기능     
}}
>
      <Stack.Screen name={'List'} component={ListScreen} />
      <Stack.Screen name={'SignIn'} component={SignInScreen} />
    </Stack.Navigator>
  );
};
export default AuthStack;