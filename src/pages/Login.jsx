import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

export default function Login({ setRole, setIsAuthenticated }) {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('Architect');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setRole(selectedRole);
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0f172a', // Black background
      padding: '2rem'
    }}>
      <div ref={cardRef} className="card" style={{
        maxWidth: '450px',
        width: '100%',
        padding: '3rem 2.5rem',
        backgroundColor: '#FFFFFF', // White card on black bg
        borderRadius: '8px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <img src="/KSACCP_logo.png" alt="KSACCP Logo" style={{ height: '60px', objectFit: 'contain' }} />
        </div>
        <h1 style={{ marginBottom: '0.5rem', fontSize: '1.5rem', textAlign: 'center', color: '#000' }}>Welcome to KSACCP</h1>
        <p className="text-muted" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>Consultant Collaboration Platform</p>

        <form onSubmit={handleLogin}>
          {/* Role Selection Buttons */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <button
              type="button"
              className={`btn ${selectedRole === 'Architect' ? 'btn-primary' : 'btn-outline'}`}
              style={{
                flex: 1,
                padding: '0.75rem',
                fontSize: '0.9rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: selectedRole === 'Architect' ? '#000' : 'transparent',
                color: selectedRole === 'Architect' ? '#FFF' : '#000',
                borderColor: '#000'
              }}
              onClick={() => setSelectedRole('Architect')}
            >
              Architect
            </button>

            <button
              type="button"
              className={`btn ${selectedRole === 'Client' ? 'btn-primary' : 'btn-outline'}`}
              style={{
                flex: 1,
                padding: '0.75rem',
                fontSize: '0.9rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: selectedRole === 'Client' ? '#000' : 'transparent',
                color: selectedRole === 'Client' ? '#FFF' : '#000',
                borderColor: '#000'
              }}
              onClick={() => setSelectedRole('Client')}
            >
              Client
            </button>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem', color: '#000' }}>Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={`Enter your ${selectedRole.toLowerCase()} email`}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #CCC', fontSize: '1rem', backgroundColor: '#FFF', color: '#000' }}
            />
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem', color: '#000' }}>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter any password for demo"
              style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #CCC', fontSize: '1rem', backgroundColor: '#FFF', color: '#000' }}
            />
          </div>

          <button
            type="submit"
            className="btn"
            style={{
              width: '100%',
              padding: '0.875rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              backgroundColor: '#000',
              color: '#FFF',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Sign In to Dashboard
          </button>
        </form>

        <div style={{ marginTop: '2.5rem', fontSize: '0.75rem', color: '#666', textAlign: 'center' }}>
          This is a wireframe demonstration environment.
        </div>
      </div>
    </div>
  );
}
