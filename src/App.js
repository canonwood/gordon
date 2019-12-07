import React from 'react';

import Router from './Router';
import { Provider } from './Provider';

function App() {
  return (
    <Provider>
      <main className="h-screen pt-20">
        <Router />
      </main>
    </Provider>
  );
}

export default App;
