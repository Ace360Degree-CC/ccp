import React from 'react';
import { Bell, Search, User, LogOut } from 'lucide-react';
import './Topbar.css';

export default function Topbar({ role, setRole, setIsAuthenticated }) {
  return (
    <header className="topbar">
      <div className="search-bar">
        <Search size={20} className="text-muted" />
        <input type="text" placeholder="Search projects or milestones..." />
      </div>
      <div className="topbar-actions">
        <button 
          className="btn btn-outline"
          style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          onClick={() => setIsAuthenticated(false)}
        >
          <LogOut size={16} />
          Logout
        </button>
        <button className="icon-btn">
          <Bell size={20} />
        </button>
        <div className="avatar">
          <User size={20} />
        </div>
      </div>
    </header>
  );
}
