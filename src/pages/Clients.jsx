import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { mockClients } from '../store/mockData';

export default function Clients({ role }) {
  const { data: clients, isLoading } = useQuery({
    queryKey: ['clients'],
    queryFn: async () => mockClients,
  });

  if (role !== 'Architect') {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>Access Denied</h2>
        <p className="text-muted">You do not have permission to view this directory.</p>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1>All Clients</h1>
          <p className="text-muted">Manage your client relationships and contact information.</p>
        </div>
        <button className="btn btn-primary">+ Add New Client</button>
      </div>

      <div className="card">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--color-border)', textAlign: 'left', color: 'var(--color-gray)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <th style={{ padding: '1rem' }}>Client Company</th>
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
            ) : (
              clients?.map(c => (
                <tr key={c.id} style={{ borderBottom: '1px solid var(--color-border)' }} className="hover-row">
                  <td style={{ padding: '1rem', fontWeight: 'bold' }}>{c.name}</td>
                  <td style={{ padding: '1rem' }}>{c.contact}</td>
                  <td style={{ padding: '1rem' }}>
                    <a href={`mailto:${c.email}`} style={{ color: 'var(--color-primary)' }}>{c.email}</a>
                  </td>
                  <td style={{ padding: '1rem', color: 'var(--color-gray)' }}>{c.phone}</td>
                  <td style={{ padding: '1rem' }}>
                    <span className="badge" style={{ backgroundColor: 'var(--color-bg-alt)', color: 'var(--color-dark)' }}>{c.projectsCount}</span>
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
