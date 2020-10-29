import React, { createContext, useContext } from "react";
import { init, user, startState, useAppReduce } from "../Hooks/Reduce";

type ContextProp = {
  state: init;
  getUsers: () => void;
  removeUser: (user: user) => void;
};

const Context = createContext<ContextProp>({
  getUsers: () => {},
  removeUser: () => {},
  state: startState,
});

const AppContext: React.FC = ({ children }) => {
  const { getUsers, removeUser, state } = useAppReduce();
  return (
    <Context.Provider value={{ getUsers, removeUser, state }}>
      {children}
    </Context.Provider>
  );
};

export function useAppContext() {
  const context = useContext(Context);
  const { getUsers, removeUser, state } = context;

  return { getUsers, removeUser, state };
}

export default AppContext;
