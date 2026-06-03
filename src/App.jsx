import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import MilestonesPage from './pages/MilestonesPage';
import AuditPage from './pages/AuditPage';
import Queries from './pages/Queries';
import ProjectDetails from './pages/ProjectDetails';
import Clients from './pages/Clients';

function App() {
  const [role, setRole] = useState('Architect'); // 'Architect' or 'Client'

  return (
    <Routes>
      <Route path="/" element={<Layout role={role} setRole={setRole} />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard role={role} />} />
        <Route path="projects" element={<Projects role={role} />} />
        <Route path="projects/:id" element={<ProjectDetails role={role} />} />
        <Route path="milestones" element={<MilestonesPage role={role} />} />
        <Route path="queries" element={<Queries role={role} />} />
        <Route path="clients" element={<Clients role={role} />} />
        <Route path="audit" element={<AuditPage role={role} />} />
      </Route>
    </Routes>
  );
}

export default App;
