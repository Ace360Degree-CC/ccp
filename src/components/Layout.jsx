import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({ role, setRole, setIsAuthenticated }) {
  return (
    <div className="app-container">
      <Sidebar role={role} />
      <div className="main-content">
        <Topbar role={role} setRole={setRole} setIsAuthenticated={setIsAuthenticated} />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
