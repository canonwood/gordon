import { useContext } from 'react';

import { Context } from './Provider';

function useStore() {
  const { state, dispatch } = useContext(Context);
  return [state, dispatch];
}

export default useStore;
