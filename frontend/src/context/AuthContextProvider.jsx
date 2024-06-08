import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [authDetails, setAuthDetails] = useState({
        isLoggedIn: false,
        firstname: null,
        email: null,
      });
    
      const login = ( firstname, email) => {
        setAuthDetails({
          isLoggedIn: true,
          firstname: firstname,
          email: email,
        });
      };
    
      const logout = () => {
        setAuthDetails({
          isLoggedIn: false,
          firstname: null,
          email: null,
        });
      };

  return (
   <AuthContext.Provider value={{ authDetails, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider