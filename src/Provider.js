import React, { createContext, useReducer, useMemo } from 'react';

export const Context = createContext({});

export function Provider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer((e) => e, {});
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
