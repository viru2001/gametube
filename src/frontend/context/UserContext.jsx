import { createContext, useContext, useReducer, useEffect } from "react";
import { userReducer, userInitialState } from "../reducers/";
import { getUserHistoryService } from "../services";
import { useAuth } from "./";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);
  const {
    auth: { status, token },
  } = useAuth();

  useEffect(() => {
    if (status) {
      getUserHistoryService(token, userDispatch);
    }
  }, [status, token]);

  return (
    <UserContext.Provider
      value={{
        userState,
        userDispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
