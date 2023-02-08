import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PRIMARY, WHITE } from '../colors';
import ListScreen from '../screens/ListScreen';
import HeaderLeftButton from '../components/HeaderLeftButton';
import HeaderRightButton from '../components/HeaderRightButton';
import SettingScreen from '../screens/SettingScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
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
        headerBackTitleVisible: false, //Ios 뒤로가기 버튼에서도 타이틀이 보이지 않게 함
        headerLeft: HeaderLeftButton,  //헤더 왼쪽 버튼 뒤로가기 기능     
}}
>
      <Stack.Screen 
      name={'List'} 
      component={ListScreen}
      options={{title: 'TODO LIST', headerRight: HeaderRightButton}} />
      <Stack.Screen name={'Settings'} component={SettingScreen} />
    </Stack.Navigator>
  );
};
export default MainStack;