import { createContext, useContext } from 'react';

export const Context = createContext({});

function useAppState() {
  const { state, mods } = useContext(Context);
  return [state, mods];
}

export default useAppState;
