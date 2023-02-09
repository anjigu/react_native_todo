// import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { UserProvider } from './contexts/UserContext';
// import UserContext from './contexts/UserContext';
// import AuthStack from './navigations/AuthStack';
// import MainStack from './navigations/MainStack';
// import Navigation from './navigations';


// const App = () => {
//   //10. 유저 상태 변수가 변경되니 
//   // const [ user, setUser ] = useState(null);

//   return (
//   //1. UserContext.Provider가 제공하는 데이터를 사용할 수 있다 
//   //2. UserContext.Provider는 자식으로 있는 모든 컴포넌트에 value에 작성된 데이터를 전달 
//   //11. AuthStack 컴포넌트 대신에 MainStack 컴포넌트를 사용해서 ListScreen 화면이 나오는 것 
//   // <UserContext.Provider value={{ setUser }}>
//   <UserProvider>
//     <NavigationContainer>
//       <StatusBar style="dark" />
//       <Navigation />
//     </NavigationContainer>
//     </UserProvider>
  
//   );
// };

// export default App;

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import UserContext from './contexts/UserContext';
import AuthStack from './navigations/AuthStack';
import MainStack from './navigations/MainStack';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ setUser }}>
      <NavigationContainer>
        <StatusBar style="dark" />
        
        {user ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;