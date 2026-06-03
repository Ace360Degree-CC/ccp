import React, { useState } from 'react';
import { mockProjectMilestones } from '../store/mockData';

export default function MilestonesPage({ role }) {
  const [selectedProject, setSelectedProject] = useState('Skyline Tower');
  const [activeTab, setActiveTab] = useState('Phase 1');

  // Define the 4 major phases for the tabs
  const majorPhases = [
    { id: 'Phase 1', name: 'Phase 1: Planning & Feasibility' },
    { id: 'Phase 2', name: 'Phase 2: Design Development' },
    { id: 'Phase 3', name: 'Phase 3: Procurement / Tendering' },
    { id: 'Phase 4', name: 'Phase 4: Construction & Execution' }
  ];

  // Map the 12 milestones into the 4 structural phases
  const phaseMilestonesMap = {
    'Phase 1': [
      { id: '01', phase: '01 – Design Brief', owner: 'Architect', dueDate: 'Oct 15, 2026', status: 'Completed', progress: 100 },
      { id: '02', phase: '02 – Feasibility', owner: 'Architect', dueDate: 'Nov 10, 2026', status: 'Completed', progress: 100 },
      { id: '03', phase: '03 – Concept Design', owner: 'Architect', dueDate: 'Dec 05, 2026', status: 'In Progress', progress: 60 }
    ],
    'Phase 2': [
      { id: '04', phase: '04 – Schematic Design', owner: 'Architect', dueDate: 'Jan 15, 2027', status: 'Pending', progress: 0 },
      { id: '05', phase: '05 – Liaison / Approval Drawings', owner: 'Liaison', dueDate: 'Feb 10, 2027', status: 'Pending', progress: 0 },
      { id: '06', phase: '06 – Detail Design', owner: 'Architect', dueDate: 'Mar 20, 2027', status: 'Pending', progress: 0 }
    ],
    'Phase 3': [
      { id: '06A', phase: '06A – Tendering', owner: 'Architect', dueDate: 'Apr 10, 2027', status: 'Pending', progress: 0 },
      { id: '07', phase: '07 – Working Drawings', owner: 'Architect', dueDate: 'May 15, 2027', status: 'Pending', progress: 0 },
      { id: '07A', phase: '07A – GFC Architecture', owner: 'Architect', dueDate: 'Jun 10, 2027', status: 'Pending', progress: 0 },
      { id: '07B', phase: '07B – GFC Interior', owner: 'Architect', dueDate: 'Jul 05, 2027', status: 'Pending', progress: 0 }
    ],
    'Phase 4': [
      { id: '08', phase: '08 – Site Work in Progress', owner: 'Contractor', dueDate: 'Aug 20, 2027', status: 'Pending', progress: 0 },
      { id: '09', phase: '09 – Closure / Handover', owner: 'Architect', dueDate: 'Dec 15, 2027', status: 'Pending', progress: 0 }
    ]
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Completed': return <span className="badge" style={{ backgroundColor: '#D1FAE5', color: '#065F46' }}>{status}</span>;
      case 'In Progress': return <span className="badge" style={{ backgroundColor: '#DBEAFE', color: '#1E40AF' }}>{status}</span>;
      case 'Delayed': return <span className="badge" style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}>{status}</span>;
      case 'Pending': return <span className="badge" style={{ backgroundColor: '#F3F4F6', color: '#374151' }}>{status}</span>;
      default: return <span className="badge">{status}</span>;
    }
  };

  const currentMilestones = phaseMilestonesMap[activeTab];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.25rem', margin: 0 }}>Project Milestones</h1>
        <select 
          value={selectedProject} 
          onChange={(e) => setSelectedProject(e.target.value)}
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-white)', minWidth: '200px' }}
        >
          <option value="Skyline Tower">Skyline Tower</option>
          <option value="Riverfront Mall">Riverfront Mall</option>
          <option value="Tech Park">Tech Park</option>
        </select>
      </div>

      {/* Tabs Container */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--color-border)', overflowX: 'auto', marginBottom: '1.5rem', scrollbarWidth: 'none' }}>
        {majorPhases.map((phase) => {
          const isActive = activeTab === phase.id;
          return (
            <button
              key={phase.id}
              onClick={() => setActiveTab(phase.id)}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: isActive ? 'var(--color-white)' : 'transparent',
                border: '1px solid',
                borderColor: isActive ? 'var(--color-border) var(--color-border) transparent var(--color-border)' : 'transparent',
                borderTopLeftRadius: '0.375rem',
                borderTopRightRadius: '0.375rem',
                color: isActive ? '#3B82F6' : 'var(--color-gray)',
                fontWeight: '600',
                cursor: 'pointer',
                marginBottom: '-1px', // Pull down to cover the bottom border when active
                whiteSpace: 'nowrap',
                outline: 'none',
                transition: 'all 0.2s'
              }}
            >
              {phase.name}
            </button>
          );
        })}
      </div>

      <div className="card" style={{ borderTopLeftRadius: '0' }}>
        <h3 style={{ marginBottom: '1rem' }}>{majorPhases.find(p => p.id === activeTab)?.name} Details</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--color-border)', textAlign: 'left', color: 'var(--color-gray)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <th style={{ padding: '1rem' }}>Milestone Phase</th>
              <th style={{ padding: '1rem' }}>Owner</th>
              <th style={{ padding: '1rem' }}>Due Date</th>
              <th style={{ padding: '1rem' }}>Status</th>
              <th style={{ padding: '1rem' }}>Progress</th>
              <th style={{ padding: '1rem' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentMilestones.map((m) => (
              <tr key={m.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>{m.phase}</td>
                <td style={{ padding: '1rem', color: 'var(--color-gray)' }}>{m.owner}</td>
                <td style={{ padding: '1rem', color: 'var(--color-gray)' }}>{m.dueDate}</td>
                <td style={{ padding: '1rem' }}>
                  {getStatusBadge(m.status)}
                </td>
                <td style={{ padding: '1rem', width: '200px' }}>
                  <div style={{ width: '100%', backgroundColor: 'var(--color-border)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${m.progress}%`, backgroundColor: 'var(--color-dark)', height: '100%' }}></div>
                  </div>
                </td>
                <td style={{ padding: '1rem' }}>
                  <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
