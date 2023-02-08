import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WHITE } from '../colors';
import ListScreen from '../screens/ListScreen';
import SignInScreen from '../screens/SignInScreen';

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
    }}>
      <Stack.Screen 
      name={'List'} 
      component={ListScreen} 
      options={{
        title: 'TODO LIST',
    }}
      />
      <Stack.Screen 
      name={'SignIn'} 
      component={SignInScreen}
      options={{
        title: 'TODO LIST',
    }}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;