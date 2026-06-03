import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { mockQueries } from '../store/mockData';

export default function Queries({ role }) {
  const { data: queries, isLoading } = useQuery({
    queryKey: ['queries', role],
    queryFn: async () => mockQueries,
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1>Queries</h1>
          <p className="text-muted">Manage all project-related questions and clarifications.</p>
        </div>
        <button className="btn btn-primary">+ New Query</button>
      </div>

      <div className="card">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--color-border)', textAlign: 'left' }}>
              <th style={{ padding: '1rem' }}>Date</th>
              <th style={{ padding: '1rem' }}>Project</th>
              <th style={{ padding: '1rem' }}>Subject</th>
              <th style={{ padding: '1rem' }}>Author</th>
              <th style={{ padding: '1rem' }}>Status</th>
              <th style={{ padding: '1rem' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan="6" style={{ padding: '1rem' }}>Loading...</td></tr>
            ) : (
              queries?.map(q => (
                <tr key={q.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '1rem', color: 'var(--color-gray)' }}>{q.date}</td>
                  <td style={{ padding: '1rem', fontWeight: '500' }}>{q.project}</td>
                  <td style={{ padding: '1rem' }}>{q.subject}</td>
                  <td style={{ padding: '1rem' }}>{q.author}</td>
                  <td style={{ padding: '1rem' }}>
                    <span className={`badge ${q.status === 'Pending' ? 'warning' : 'success'}`}>
                      {q.status}
                    </span>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }}>Reply</button>
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
