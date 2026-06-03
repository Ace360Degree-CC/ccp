import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, Flag, History, MessageSquare, Users } from 'lucide-react';
import './Sidebar.css';

export default function Sidebar({ role }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/KSACCP_logo.png" alt="KSACCP Logo" style={{ height: '40px', objectFit: 'contain' }} />
        <span className="role-badge">{role}</span>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
          <FolderKanban size={20} />
          <span>Projects</span>
        </NavLink>
        <NavLink to="/milestones" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
          <Flag size={20} />
          <span>Milestones</span>
        </NavLink>
        <NavLink to="/queries" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
          <MessageSquare size={20} />
          <span>Queries</span>
        </NavLink>
        {role === 'Architect' && (
          <>
            <NavLink to="/clients" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
              <Users size={20} />
              <span>All Clients</span>
            </NavLink>
            <NavLink to="/audit" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
              <History size={20} />
              <span>Audit Logs</span>
            </NavLink>
          </>
        )}
      </nav>
    </aside>
  );
}
