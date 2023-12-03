import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../Component/Header';
import Menu from '../Component/Menu';
import Footer from '../Component/Footer';
import Dashboard from '../Component/Dashboard';
import { ActiveRouteProvider } from '../Component/ActiveRouteContext';

import 'react-chatbot-kit/build/main.css';






const AdminMain = () => {
  const dynamicMenuData = JSON.parse(sessionStorage.getItem('routes'));
  const [chatSteps, setChatSteps] = useState([]);
  const [chatVisible, setChatVisible] = useState(false);
 
  useEffect(() => {

  }, []);

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

