import React, { Suspense } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

import Login from '../src/Layout/Login';
import AdminMain from '../src/Layout/AdminMain';
import Inactive from '../src/Layout/Inactive-Page';
import Error from '../src/Layout/Error'
import ForgetPassword from '../src/Layout/ForgetPassword'
const isAuthenticated = sessionStorage.getItem('login') ? JSON.parse(sessionStorage.getItem('login')) : false;

const AuthGuard = ({ children, authRequired }) => {
  if (isAuthenticated || !authRequired) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};




const retrieveRoutesFromSessionStorage = () => {
  const routesData = sessionStorage.getItem('routes');
  return routesData ? JSON.parse(routesData) : [];
};


const DynamicImport = ({ componentPath }) => {
  const Component = React.lazy(() => import(`.${componentPath}`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthGuard>
        <Component />
      </AuthGuard>
    </Suspense>
  );
};

const renderRoutes = (routes) => {
  return routes.map((route) => {
    if (route.isActive) {
      const element = (
        <AuthGuard authRequired={route.authRequired}>
          <DynamicImport componentPath={route.componentPath} />
          {route.children
            && (<Outlet />)}
        </AuthGuard>
      );

      return (
        <Route key={route.path} path={route.path} element={element}>
          {route.children && renderRoutes(route.children)}
        </Route>
      );
    } else {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={<Navigate to="/inactive-page" />}
        />
      );
    }
  });
};

const Routing = (props) => {

  const adminRoutes = retrieveRoutesFromSessionStorage();

  return (

    <Routes>
      <Route path="/login" element={<Login />} />
      {/* <AuthGuard authRequired={isAuthenticated}> */}
      <Route path="/"
       authRequired={isAuthenticated}
        element={<AdminMain />}>
       {renderRoutes(adminRoutes)}
      
      </Route>
      {/* </AuthGuard> */}
      <Route path="/inactive-page" element={<Inactive />} />
      <Route path="/Error" element={<Error />} />
      <Route path="/Forget-password" element={<ForgetPassword />} />

      <Route path="*" element={<Navigate to="/Error" />} />
    </Routes>
  );
};

export default Routing;
