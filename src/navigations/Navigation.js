import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

const Navigation = () => {
    const { user } = useContext(UserContext);
  return <> {user ? <MainStack /> : <AuthStack />} </>;
}

export default Navigation;