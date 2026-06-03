import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockProjects, mockRoles, mockProjectMilestones, mockQueries, mockDocuments, mockActions } from '../store/mockData';

export default function ProjectDetails({ role }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find project or default to first
  const project = mockProjects.find(p => p.id === parseInt(id)) || mockProjects[0];

  return (
    <div style={{ paddingBottom: '2rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
        <div>
          <button onClick={() => navigate(-1)} className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', marginBottom: '1rem', fontSize: '0.75rem' }}>&larr; Back</button>
          <h1 style={{ margin: '0 0 0.5rem 0' }}>{project.name}</h1>
          <p className="text-muted" style={{ margin: 0 }}>Client: {project.client} | Status: <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>{project.status}</span></p>
        </div>
        <div style={{ width: '300px', textAlign: 'right' }}>
          <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Overall Progress: {project.progress}%</div>
          <div style={{ width: '100%', backgroundColor: 'var(--color-border)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: `${project.progress}%`, backgroundColor: 'var(--color-primary)', height: '100%' }}></div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        
        {/* Main Content Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Action Required */}
          <div className="card" style={{ borderLeft: '4px solid var(--color-warning)', marginBottom: 0 }}>
            <h3 style={{ marginBottom: '1rem' }}>Action Required</h3>
            {mockActions.filter(a => a.requiredBy === role || role === 'Architect').map(action => (
              <div key={action.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', backgroundColor: 'var(--color-bg-alt)', borderRadius: '4px', marginBottom: '0.5rem' }}>
                <div>
                  <strong style={{ display: 'block' }}>{action.text}</strong>
                  <span className="text-muted" style={{ fontSize: '0.75rem' }}>Due: {action.due} | Required by: {action.requiredBy}</span>
                </div>
                <button className="btn btn-primary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }}>Take Action</button>
              </div>
            ))}
          </div>

          {/* All Milestones */}
          <div className="card" style={{ marginBottom: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0 }}>All Milestones</h3>
              <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }} onClick={() => navigate('/milestones')}>View Full Matrix</button>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {mockProjectMilestones.map(m => (
                  <tr key={m.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '0.75rem 0', fontWeight: '500' }}>{m.phase}</td>
                    <td style={{ padding: '0.75rem 0' }}>
                      <span className="badge" style={{ 
                        backgroundColor: m.status === 'Completed' ? '#D1FAE5' : m.status === 'In Progress' ? '#DBEAFE' : '#F3F4F6', 
                        color: m.status === 'Completed' ? '#065F46' : m.status === 'In Progress' ? '#1E40AF' : '#374151' 
                      }}>
                        {m.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Project Queries */}
          <div className="card" style={{ marginBottom: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0 }}>Project Queries</h3>
              <button className="btn btn-primary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>Ask Question</button>
            </div>
            {mockQueries.map(q => (
              <div key={q.id} style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--color-border)' }}>
                <strong>{q.subject}</strong>
                <div className="text-muted" style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>From: {q.author} | {q.date} | Status: {q.status}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Sidebar Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Roles Involved */}
          <div className="card" style={{ marginBottom: 0 }}>
            <h3 style={{ marginBottom: '1rem' }}>Roles Involved</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {mockRoles.map((r, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}>
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', fontSize: '0.875rem' }}>{r.role}</div>
                      <div className="text-muted" style={{ fontSize: '0.75rem' }}>{r.name}</div>
                    </div>
                  </div>
                  <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.7rem' }}>Profile</button>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div className="card" style={{ marginBottom: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0 }}>Documents</h3>
              <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>+ Add</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {mockDocuments.map(doc => (
                <div key={doc.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', backgroundColor: 'var(--color-bg-alt)', borderRadius: '4px' }}>
                  <div style={{ backgroundColor: 'var(--color-gray)', color: 'white', padding: '0.25rem', borderRadius: '2px', fontSize: '0.6rem', fontWeight: 'bold' }}>{doc.type}</div>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: '500', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{doc.name}</div>
                    <div className="text-muted" style={{ fontSize: '0.7rem' }}>By {doc.uploadedBy} on {doc.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
