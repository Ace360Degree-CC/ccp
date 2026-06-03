import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, Flag, History, MessageSquare, Users, ChevronDown, ChevronRight } from 'lucide-react';
import './Sidebar.css';

export default function Sidebar({ role }) {
  const [isConsultantsOpen, setIsConsultantsOpen] = useState(false);

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
            <div style={{ marginTop: '1.5rem', marginBottom: '0.5rem', paddingLeft: '1.5rem', fontSize: '0.7rem', fontWeight: 'bold', color: 'var(--color-gray)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Admin Views
            </div>
            <NavLink to="/clients" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
              <Users size={20} />
              <span>All Clients</span>
            </NavLink>
            <NavLink to="/audit" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
              <History size={20} />
              <span>Audit Logs</span>
            </NavLink>

            <div 
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', marginBottom: '0.5rem', paddingLeft: '1.5rem', paddingRight: '1rem', fontSize: '0.7rem', fontWeight: 'bold', color: 'var(--color-gray)', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer' }}
              onClick={() => setIsConsultantsOpen(!isConsultantsOpen)}
            >
              <span>Partners & Consultants</span>
              {isConsultantsOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </div>
            
            {isConsultantsOpen && (
              <div style={{ paddingLeft: '1rem' }}>
                {['STR', 'MEPF', 'Liaison', 'Landscape', 'Facade', 'Render Agency', 'Contractor', 'Vendor'].map(roleName => {
                  const routeParam = roleName.toLowerCase().replace(' ', '-');
                  return (
                    <NavLink key={roleName} to={`/directory/${routeParam}`} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                      <Users size={20} />
                      <span>{roleName}</span>
                    </NavLink>
                  );
                })}
              </div>
            )}
          </>
        )}
      </nav>
    </aside>
  );
}
