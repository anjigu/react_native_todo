import { StatusBar } from 'expo-status-bar';
import { UserProvider } from './contexts/UserContext';
import Navigation from './navigations';


const App = () => {
  //10. 유저 상태 변수가 변경되니 
  // const [ user, setUser ] = useState(null);

  return (
  //1. UserContext.Provider가 제공하는 데이터를 사용할 수 있다 
  //2. UserContext.Provider는 자식으로 있는 모든 컴포넌트에 value에 작성된 데이터를 전달 
  //11. AuthStack 컴포넌트 대신에 MainStack 컴포넌트를 사용해서 ListScreen 화면이 나오는 것 
  // <UserContext.Provider value={{ setUser }}>
  <UserProvider>
      <StatusBar style="dark" />
      <Navigation /> 
  </UserProvider>  
  );
};

export default App;
