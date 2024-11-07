import { createContext, useEffect, useState } from "react";
import authApiSlice from "../redux/api/authApiSlice";
import { useDispatch } from "react-redux";

export const GetAuthContext = createContext();

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {
    data: authData,
    isLoading: isAuthLoading,
    isSuccess: isAuthSuccess,
    isError: isAuthError,
    error,
  } = authApiSlice.useGetAuthInfoQuery();

  useEffect(() => {
    if (isAuthSuccess) {
      setUser(authData?.user);
      setIsLoading(false);
    }
    if (isAuthError) {
      setIsLoading(false);
    }
  }, [isAuthSuccess, isAuthError]);

  return (
    <GetAuthContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </GetAuthContext.Provider>
  );
};
