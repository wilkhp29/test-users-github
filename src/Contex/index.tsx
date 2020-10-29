import React, { createContext, useContext } from "react";
import { init, user, startState, useAppReduce } from "../Hooks/Reduce";

type ContextProp = {
  state: init;
  getUsers: () => void;
  removeUser: (user: user) => void;
  addingUser: (user: user) => void;
};

const Context = createContext<ContextProp>({
  addingUser: () => {},
  getUsers: () => {},
  removeUser: () => {},
  state: startState,
});

const AppContext: React.FC = ({ children }) => {
  const { addingUser, getUsers, removeUser, state } = useAppReduce();
  return (
    <Context.Provider value={{ addingUser, getUsers, removeUser, state }}>
      {children}
    </Context.Provider>
  );
};

export function useAppContext() {
  const context = useContext(Context);
  const { addingUser, getUsers, removeUser, state } = context;

  return { addingUser, getUsers, removeUser, state };
}

export default AppContext;
