import { useCallback, useReducer } from "react";
import git from "../../Services/axios";

export interface init {
  users: Array<user>;
  usersRemove: Array<user>;
}

export interface user {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  html_url: string;
}

export enum Types {
  getUsers = "GET_USERS",
  removeUser = "REMOVE_USER",
  addingUser = "ADDING_USER",
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type DadosActions = ActionMap<payloadData>[keyof ActionMap<payloadData>];

type payloadData = {
  [Types.getUsers]: { users: Array<user> };
  [Types.removeUser]: { user: user };
};

export const startState: init = {
  users: [],
  usersRemove: [],
};

export const reduce = (state: init, action: DadosActions): init => {
  switch (action.type) {
    case Types.getUsers:
      const { users } = action.payload;
      return { ...state, users };
    case Types.removeUser:
      const { user } = action.payload;
      const usersNew = state.users.filter(
        (usuario) => JSON.stringify(usuario) !== JSON.stringify(user)
      );

      const usersRemoved = state.usersRemove.filter(
        (usuario) => JSON.stringify(usuario) !== JSON.stringify(user)
      );
      usersRemoved.push(user);
      return { ...state, users: usersNew, usersRemove: usersRemoved };
    default:
      return state;
  }
};

export const useAppReduce = () => {
  const [state, dispath] = useReducer(reduce, startState);

  const getUsers = useCallback(async () => {
    if (state.users.length === 0 && state.usersRemove.length === 0) {
      const { data } = await git.get("users");
      dispath({ type: Types.getUsers, payload: { users: data } });
    }
  }, [state]);

  const removeUser = useCallback((user: user) => {
    dispath({ type: Types.removeUser, payload: { user } });
  }, []);

  return { state, getUsers, removeUser };
};
