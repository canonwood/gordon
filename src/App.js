import React from 'react';

import Router from './Router';
import Identity from './Identity';
import Gordon from './Gordon';

const routes = {
  '/': Identity,
  app: Gordon,
};

function App() {
  return (
    <main className="h-screen pt-20">
      <Router routes={routes} />
    </main>
  );
}

export default App;
