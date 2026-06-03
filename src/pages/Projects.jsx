import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { mockProjects } from '../store/mockData';

export default function Projects({ role }) {
  const navigate = useNavigate();
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects', role],
    queryFn: async () => mockProjects,
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Project Directory</h1>
        {role === 'Architect' && (
          <button className="btn btn-primary">+ New Project</button>
        )}
      </div>

      <div className="card">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--color-border)', textAlign: 'left', color: 'var(--color-gray)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <th style={{ padding: '1rem' }}>Project Name</th>
              <th style={{ padding: '1rem' }}>Client</th>
              <th style={{ padding: '1rem' }}>Status</th>
              <th style={{ padding: '1rem' }}>Overall Progress</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan="4" style={{ padding: '1rem' }}>Loading...</td></tr>
            ) : (
              projects?.map(p => (
                <tr 
                  key={p.id} 
                  style={{ borderBottom: '1px solid var(--color-border)', cursor: 'pointer' }} 
                  onClick={() => navigate(`/projects/${p.id}`)}
                  className="hover-row"
                >
                  <td style={{ padding: '1rem', fontWeight: 'bold' }}>{p.name}</td>
                  <td style={{ padding: '1rem', color: 'var(--color-gray)' }}>{p.client}</td>
                  <td style={{ padding: '1rem' }}>
                    <span className={`badge ${p.status === 'Active' ? 'primary' : 'warning'}`} style={{ backgroundColor: p.status === 'Active' ? '#E0F2FE' : '#FEF3C7', color: p.status === 'Active' ? '#0369A1' : '#B45309' }}>
                      {p.status}
                    </span>
                  </td>
                  <td style={{ padding: '1rem', width: '300px' }}>
                    <div style={{ width: '100%', backgroundColor: 'var(--color-border)', height: '6px', borderRadius: '3px', overflow: 'hidden', marginBottom: '0.25rem' }}>
                      <div style={{ width: `${p.progress}%`, backgroundColor: 'var(--color-dark)', height: '100%' }}></div>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-gray)' }}>
                      {p.progress}% Complete
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
