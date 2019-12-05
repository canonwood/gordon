import { createContext } from 'react';
import io from 'socket.io-client';

export default createContext(io({ autoConnect: false }));
