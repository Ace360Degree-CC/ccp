import React from 'react';

export default function AuditPage({ role }) {
  if (role !== 'Architect') {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>Access Denied</h2>
        <p className="text-muted">You do not have permission to view audit logs.</p>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1>System Audit Logs</h1>
        <p className="text-muted">Comprehensive history of all actions performed in the system.</p>
      </div>

      <div className="card">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--color-border)', textAlign: 'left' }}>
              <th style={{ padding: '1rem' }}>Timestamp</th>
              <th style={{ padding: '1rem' }}>User</th>
              <th style={{ padding: '1rem' }}>Role</th>
              <th style={{ padding: '1rem' }}>Action</th>
              <th style={{ padding: '1rem' }}>Project</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: '1rem' }}>2026-06-03 10:15 AM</td>
              <td style={{ padding: '1rem' }}>Client User</td>
              <td style={{ padding: '1rem' }}>Client</td>
              <td style={{ padding: '1rem' }}>Approved 'Concept Design'</td>
              <td style={{ padding: '1rem' }}>Skyline Tower</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: '1rem' }}>2026-06-03 09:30 AM</td>
              <td style={{ padding: '1rem' }}>Admin Arch</td>
              <td style={{ padding: '1rem' }}>Architect</td>
              <td style={{ padding: '1rem' }}>Submitted 'Concept Design'</td>
              <td style={{ padding: '1rem' }}>Skyline Tower</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: '1rem' }}>2026-06-02 04:20 PM</td>
              <td style={{ padding: '1rem' }}>Admin Arch</td>
              <td style={{ padding: '1rem' }}>Architect</td>
              <td style={{ padding: '1rem' }}>Added new milestone 'Feasibility'</td>
              <td style={{ padding: '1rem' }}>Oceanview Villas</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
