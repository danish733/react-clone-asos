import React, { createContext, useState } from 'react';

export const AdminContext = createContext();

function AdminContextProvider({children}) {

    const [adminDetails, setAdminDetails] = useState({
        adminLoggedIn: false,
        token: null,
      });


      const login = (token) => {
        setAdminDetails({
          adminLoggedIn: true,
          token: token,
        });
      };
    
  return (
    <AdminContext.Provider value={{ adminDetails, login }}>
    {children}
  </AdminContext.Provider>
  )
}

export default AdminContextProvider;
