import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './containers/Layout';
import Draft from './pages/Draft';
import List from './pages/List';
import Processing from './pages/Processing';
import Success from './pages/Succes';

export enum RoutesName {
  LIST = '/',
  DRAFT = '/draft',
  PROCESSING = '/processing',
  SUCCESS = '/success',
}

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutesName.LIST} element={<Layout />}>
        <Route index element={<List />} />
        <Route path={RoutesName.DRAFT} element={<Draft />} />
        <Route path={RoutesName.PROCESSING} element={<Processing />} />
        <Route path={RoutesName.SUCCESS} element={<Success />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
