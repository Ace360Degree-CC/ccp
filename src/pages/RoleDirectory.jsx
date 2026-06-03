import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { mockConsultants } from '../store/mockData';

export default function RoleDirectory({ role }) {
  const { roleType } = useParams();
  
  const { data: consultants, isLoading } = useQuery({
    queryKey: ['consultants', roleType],
    queryFn: async () => mockConsultants.filter(c => {
      const normalizedType = c.type.toLowerCase().replace(' ', '-');
      return normalizedType === roleType.toLowerCase();
    }),
  });

  if (role !== 'Architect') {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>Access Denied</h2>
        <p className="text-muted">You do not have permission to view this directory.</p>
      </div>
    );
  }

  // Format the title nicely (replace hyphens with spaces and title case)
  const displayTitle = roleType
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1>{displayTitle} Directory</h1>
          <p className="text-muted">Manage all profiles and contacts for the {displayTitle} role.</p>
        </div>
        <button className="btn btn-primary">+ Add New Profile</button>
      </div>

      <div className="card">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--color-border)', textAlign: 'left', color: 'var(--color-gray)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <th style={{ padding: '1rem' }}>Company / Agency</th>
              <th style={{ padding: '1rem' }}>Primary Contact</th>
              <th style={{ padding: '1rem' }}>Email Address</th>
              <th style={{ padding: '1rem' }}>Phone Number</th>
              <th style={{ padding: '1rem' }}>Active Projects</th>
              <th style={{ padding: '1rem' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan="6" style={{ padding: '1rem' }}>Loading...</td></tr>
            ) : consultants?.length === 0 ? (
              <tr><td colSpan="6" style={{ padding: '1rem', textAlign: 'center', color: 'var(--color-gray)' }}>No profiles found for this role.</td></tr>
            ) : (
              consultants?.map(c => (
                <tr key={c.id} style={{ borderBottom: '1px solid var(--color-border)' }} className="hover-row">
                  <td style={{ padding: '1rem', fontWeight: 'bold' }}>{c.company}</td>
                  <td style={{ padding: '1rem' }}>{c.contact}</td>
                  <td style={{ padding: '1rem' }}>
                    <a href={`mailto:${c.email}`} style={{ color: 'var(--color-primary)' }}>{c.email}</a>
                  </td>
                  <td style={{ padding: '1rem', color: 'var(--color-gray)' }}>{c.phone}</td>
                  <td style={{ padding: '1rem' }}>
                    <span className="badge" style={{ backgroundColor: 'var(--color-bg-alt)', color: 'var(--color-dark)' }}>{c.activeProjects}</span>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }}>View Profile</button>
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
