import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import './Topbar.css';

export default function Topbar({ role, setRole }) {
  return (
    <header className="topbar">
      <div className="search-bar">
        <Search size={20} className="text-muted" />
        <input type="text" placeholder="Search projects or milestones..." />
      </div>
      <div className="topbar-actions">
        <select 
          className="role-switcher" 
          value={role} 
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Architect">View as Architect (Admin)</option>
          <option value="Client">View as Client</option>
        </select>
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
