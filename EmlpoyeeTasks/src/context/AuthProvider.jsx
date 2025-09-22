import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getlocalStrorage, setlocalStrorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setlocalStrorage();
    const { employees } = getlocalStrorage();
    setUserData(employees);
  }, []);
  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
