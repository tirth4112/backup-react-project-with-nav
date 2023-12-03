import React from 'react';
import { Outlet } from 'react-router-dom';
import Dash from '../page/Dash';

function Dashboard() {
  return (
    <div>
      {/* Add other components or layout elements here */}
      <div><div className="content-wrapper">
    <div className="content-header">
      <div className="container-fluid">
      <Outlet />
      </div></div></div></div> {/* This is where child routes will be rendered */}
    </div>
  );
}

export default Dashboard;
