import React, { createContext, useReducer, useMemo } from 'react';

export const Context = createContext({});

const initialState = {
  chat: null,
  chats: {},
  route: '/',
  username: null,
  users: {},
};

const chatInitialState = {
  message: '',
  camp: [],
};

function chatsReducer(state = chatInitialState, action) {
  switch (action.type) {
    case 'chat:set':
      return { ...state };
    case 'chat:message:set':
      return { ...state, message: action.value };
    case 'chat:camp:push':
      return { ...state, camp: [...state.camp, action.message] };
    default:
      throw new Error(
        `Unhandled reducer action ${action.type} in chatsReducer.`,
      );
  }
}

function usersReducer(state, action) {
  switch (action.type) {
    case 'users:merge':
      return Object.entries(action.data).reduce(function(users, entry) {
        const [key, value] = entry;
        const user = users[key] || {};
        const next = Object.assign({}, user, value);
        return { ...users, [key]: next };
      }, state);
    default:
      throw new Error(
        `Unhandled reducer action ${action.type} in usersReducer`,
      );
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'chat:camp:push':
    case 'chat:message:set':
      return {
        ...state,
        chats: {
          ...state.chats,
          [action.chat]: chatsReducer(state.chats[action.chat], action),
        },
      };
    case 'chat:set':
      return {
        ...state,
        chat: action.username,
        chats: {
          ...state.chats,
          [action.username]: chatsReducer(state.chats[action.username], action),
        },
      };
    case 'users:merge':
      return { ...state, users: usersReducer(state.users, action) };
    case 'login':
      return { ...state, username: action.username, route: 'app' };
    case 'logout':
      return { ...initialState };
    default:
      throw new Error(`Unhandled reducer action ${action.type}`);
  }
}

export function Provider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;