import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
};

UserProvider.propTypes = {
  children: PropTypes.node
};

//custom Hook
//useContext를 사용해서 UserContext에 있는 데이터를 반환 
export const useUserContext = () => 
useContext(UserContext);

export default UserContext;