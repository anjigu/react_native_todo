import { createContext } from "react";
import PropTypes from 'prop-types';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
 return <UserContext.Provider>{ children }</UserContext.Provider>
};
UserProvider.propTypes = {
    children: PropTypes.node,
}
export default UserContext;
