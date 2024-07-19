import { lazy } from 'react';

import Loadable from 'ui/loaders/Loadable';

const Routes = Loadable(lazy(() => import('routes')));

const App = () => {
  return <Routes />
}

export default App