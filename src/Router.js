import React from 'react';

import Gordon from './Gordon';
import Identity from './Identity';
import useStore from './useStore';

const routes = {
  '/': Identity,
  app: Gordon,
};

function NotFound() {
  return (
    <div className="mx-auto max-w-xl">
      <p className="text-center">Not Found</p>
    </div>
  );
}

function Router() {
  const [state] = useStore();
  const Component = routes[state.route] || NotFound;
  return <Component />;
}

export default Router;
