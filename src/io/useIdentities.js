import { useContext, useEffect, useMemo } from 'react';

import useStore from '../useStore';
import socket from './context';

function compareIdentities(a, b) {
  const left = a.username.toUpperCase();
  const right = b.username.toUpperCase();
  let comparison = 0;

  if (left > right) {
    comparison = 1;
  } else if (left < right) {
    comparison = -1;
  }
  return comparison;
}

function useIdentities() {
  const [state, dispatch] = useStore();
  const users = useMemo(
    () =>
      Object.values(state.users)
        .filter((i) => i.username !== state.username)
        .sort(compareIdentities),
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
