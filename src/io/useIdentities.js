import { useContext, useEffect, useMemo } from 'react';

import useStore from '../useStore';
import socket from './context';

function useIdentities() {
  const [state, dispatch] = useStore();
  const users = useMemo(
    () =>
      Object.values(state.users).filter((i) => i.username !== state.username),
    [state.users, state.username],
  );
  const io = useContext(socket);

  useEffect(() => {
    function mergeIdentities(data) {
      dispatch({ type: 'users:merge', data });
    }

    function connected() {
      io.emit('users:get');
    }

    function change(identity) {
      dispatch({ type: 'user:change', identity });
    }

    io.on('users:list', mergeIdentities);
    io.on('connect', connected);
    io.on('user:change', change);

    return () => {
      io.off('users:list', mergeIdentities);
      io.off('connect', connected);
      io.off('user:change', change);
    };
  }, [io, dispatch]);

  return [users];
}

export default useIdentities;
