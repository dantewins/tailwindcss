import { lazy } from 'react';

import Loadable from 'ui/loaders/Loadable';

const LandingPage = Loadable(lazy(() => import('views/landing/page')));

const LandingRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <LandingPage />
    }
  ]
};

export default LandingRoutes;
