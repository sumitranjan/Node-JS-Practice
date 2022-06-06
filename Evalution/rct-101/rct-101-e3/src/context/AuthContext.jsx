import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  const changeAuth = () => {
    setIsAuth(!isAuth)
  }
  return (
    <AuthContext.Provider
          value={{isAuth, changeAuth}}>
      {children}
    </AuthContext.Provider>
  );
};