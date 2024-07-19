import React from 'react';

// ==============================|| LOADER ||============================== //
const Loader = () => (
  <div className="fixed top-0 left-0 w-full z-50">
    <div className="relative w-full h-1 bg-blue-500 animate-pulse"></div>
  </div>
);

export default Loader;