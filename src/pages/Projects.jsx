import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { mockProjects, mockClients, mockConsultants, milestones } from '../store/mockData';
import Modal from '../components/Modal';

export default function Projects({ role }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects', role],
    queryFn: async () => mockProjects,
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1>Projects Directory</h1>
          <p className="text-muted">Manage all active and past projects.</p>
        </div>
        {role === 'Architect' && (
          <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>+ Add New Project</button>
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Project">
        <form onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Project Name</label>
            <input type="text" required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--color-border)' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Select Client</label>
            <select required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-white)' }}>
              <option value="">-- Choose Client --</option>
              {mockClients.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
            </select>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Select Default Milestones</label>
            <select multiple style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-white)', minHeight: '100px' }}>
              {milestones.map(m => <option key={m.id} value={m.name}>{m.id} - {m.name}</option>)}
            </select>
            <small className="text-muted">Hold Ctrl/Cmd to select multiple milestones.</small>
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Assign Consultants</label>
            <select multiple style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-white)', minHeight: '100px' }}>
              {mockConsultants.map(c => <option key={c.id} value={c.company}>{c.type}: {c.company}</option>)}
            </select>
            <small className="text-muted">Hold Ctrl/Cmd to assign multiple consultants.</small>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <button type="button" className="btn btn-outline" onClick={() => setIsModalOpen(false)}>Cancel</button>
            <button type="submit" className="btn btn-primary">Save Project</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
