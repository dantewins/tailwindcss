import { useRoutes } from 'react-router-dom';

import LandingRoutes from './LandingRoutes';

export default function Routes() {
  return useRoutes([LandingRoutes]);
}
