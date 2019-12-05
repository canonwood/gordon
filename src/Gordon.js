import React, { useContext, Fragment, useState, useEffect } from 'react';
import socketio from 'socket.io-client';

import { Context } from './Router';
import Button from './com/Button';

function Gordon() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const { setRoute } = useContext(Context);

  useEffect(() => {
    const io = socketio();

    io.on('connect', () => {
      io.emit('users:get');
    });

    io.on('users:list', (data) => {
      setUsers(local => {
        local.forEach((user) => (data[user] = true));
        return Object.keys(data);
      });
    });

    return () => io.close();
  }, []);

  return (
    <Fragment>
      <div className="py-2 mx-auto max-w-4xl bg-white border rounded-t -mb-1">
        <p className="text-center text-lg font-semibold text-gray-600">
          Gordon
        </p>
      </div>

      <div className="flex mx-auto max-w-4xl gordon-height bg-white border">
        <div className="flex flex-col w-2/3 border-r">
          <div className="flex-1"></div>

          <div className="bg-white border-t px-2 py-2">
            <textarea
              className="w-full border px-2 py-1"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message"
            />
          </div>
        </div>

        <ul className="overflow-y-scroll bg-gray-100 h-full w-1/3">
          {users.map((user) => (
            <li className="flex items-center px-3 py-2 border-b bg-white">
              <span className="inline-block rounded-full w-10 h-10 bg-gray-200"></span>
              <span className="ml-2">{user}</span>
              <span className="ml-auto inline-block rounded-full w-2 h-2 bg-green-400"></span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-4xl text-right">
        <Button onClick={() => setRoute('/')}>Sign Out</Button>
      </div>
    </Fragment>
  );
}

export default Gordon;
