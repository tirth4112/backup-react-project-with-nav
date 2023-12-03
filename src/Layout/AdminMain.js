import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../Component/Header';
import Menu from '../Component/Menu';
import Footer from '../Component/Footer';
import Dashboard from '../Component/Dashboard';
import { ActiveRouteProvider } from '../Component/ActiveRouteContext';

const AdminMain = () => {
  const dynamicMenuData = JSON.parse(sessionStorage.getItem('routes'));
 

  if (dynamicMenuData == null) {
    // If the user is not authenticated, navigate to the login page
    return <Navigate to="/login" />;
  }

 
 


  return (
    <div>
      <ActiveRouteProvider>
        <Header />
        <Menu menuData={dynamicMenuData} />
        <Dashboard />
         <Footer />
      </ActiveRouteProvider>
    </div>
  );
};

export default AdminMain;

