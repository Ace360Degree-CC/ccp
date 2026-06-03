import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { mockProjects, mockQueries } from '../store/mockData';

export default function Dashboard({ role }) {
  const navigate = useNavigate();
  
  const { data: projects, isLoading: projectsLoading } = useQuery({
    queryKey: ['projects', role],
    queryFn: async () => mockProjects,
  });

  const { data: queries, isLoading: queriesLoading } = useQuery({
    queryKey: ['queries', role],
    queryFn: async () => mockQueries,
  });

  const pendingQueries = queries?.filter(q => q.status === 'Pending') || [];

  return (
    <div className="dashboard">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1>Welcome back, {role}</h1>
          <p className="text-muted">Here's what's happening with your projects today.</p>
        </div>
        {role === 'Architect' && (
          <button className="btn btn-primary">+ Add New Project</button>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="card">
          <h3 className="text-muted">Total Projects</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{projectsLoading ? '...' : projects?.length}</p>
        </div>
        <div className="card">
          <h3 className="text-muted">Pending Approvals</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-warning)' }}>3</p>
        </div>
        {role === 'Architect' && (
          <div className="card">
            <h3 className="text-muted">Active Clients</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>12</p>
          </div>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        {/* Projects Grid */}
        <div className="card" style={{ marginBottom: 0 }}>
          <h3>Project Overview</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            {projects?.map(p => (
              <div 
                key={p.id} 
                style={{ border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1rem', cursor: 'pointer', transition: 'box-shadow 0.2s' }}
                onClick={() => navigate(`/projects/${p.id}`)}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <strong>{p.name}</strong>
                  <span className={`badge ${p.status === 'Active' ? 'success' : 'warning'}`}>{p.status}</span>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <div style={{ width: '100%', backgroundColor: 'var(--color-border)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${p.progress}%`, backgroundColor: 'var(--color-primary)', height: '100%' }}></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem', fontSize: '0.75rem', color: 'var(--color-gray)' }}>
                    <span>{p.currentMilestone}</span>
                    <span>{p.progress}% Complete</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Queries */}
        <div className="card" style={{ marginBottom: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>Pending Queries</h3>
            <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }} onClick={() => navigate('/queries')}>View All</button>
          </div>
          <ul style={{ listStyle: 'none', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {queriesLoading ? (
              <li>Loading...</li>
            ) : pendingQueries.length === 0 ? (
              <li className="text-muted">No pending queries.</li>
            ) : (
              pendingQueries.map(q => (
                <li key={q.id} style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                  <strong>{q.project}</strong>
                  <div style={{ fontSize: '0.875rem', margin: '0.25rem 0' }}>{q.subject}</div>
                  <div className="text-muted" style={{ fontSize: '0.75rem' }}>From: {q.author} | {q.date}</div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
