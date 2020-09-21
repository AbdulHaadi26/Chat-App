import React, { Suspense } from 'react';
import Routes from './routes';

export default () => (
  <Suspense fallback={<></>}>
    <div className="container-fluid">
      <Routes />
    </div>
  </Suspense>
);
