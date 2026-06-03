import React, { useState, useEffect, useRef } from 'react';
import Modal from './Modal';
import { mockClients, mockConsultants, milestones } from '../store/mockData';

const CheckboxDropdown = ({ options, selected, onChange, renderLabel, valueKey, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const toggleOption = (val) => {
    if (selected.includes(val)) {
      onChange(selected.filter(s => s !== val));
    } else {
      onChange([...selected, val]);
    }
  };

  const removeOption = (e, val) => {
    e.stopPropagation();
    onChange(selected.filter(s => s !== val));
  };

  return (
    <div style={{ position: 'relative' }} ref={dropdownRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          minHeight: '42px',
          padding: '0.5rem', 
          border: isOpen ? '2px solid var(--color-primary)' : '1px solid var(--color-border)', 
          borderRadius: '6px', 
          cursor: 'pointer', 
          backgroundColor: 'var(--color-white)', 
          display: 'flex', 
          flexWrap: 'wrap',
          gap: '0.5rem',
          alignItems: 'center',
          transition: 'all 0.2s'
        }}
      >
        {selected.length === 0 ? (
          <span style={{ color: 'var(--color-gray)', flex: 1 }}>{placeholder}</span>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', flex: 1 }}>
            {selected.map(val => {
              const opt = options.find(o => o[valueKey] === val);
              return (
                <span key={val} style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  backgroundColor: '#f1f5f9', 
                  color: '#334155',
                  padding: '2px 8px', 
                  borderRadius: '12px', 
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  border: '1px solid #e2e8f0'
                }}>
                  {opt ? renderLabel(opt) : val}
                  <button 
                    type="button"
                    onClick={(e) => removeOption(e, val)}
                    style={{ background: 'none', border: 'none', marginLeft: '4px', cursor: 'pointer', color: '#64748b', fontSize: '12px', padding: 0 }}
                  >
                    &times;
                  </button>
                </span>
              );
            })}
          </div>
        )}
        <span style={{ color: 'var(--color-gray)', paddingLeft: '0.5rem' }}>
          {isOpen ? '▲' : '▼'}
        </span>
      </div>
      
      {isOpen && (
        <div style={{ 
          position: 'absolute', 
          top: 'calc(100% + 4px)', 
          left: 0, 
          right: 0, 
          border: '1px solid var(--color-border)', 
          backgroundColor: '#fff', 
          zIndex: 50, 
          maxHeight: '220px', 
          overflowY: 'auto', 
          borderRadius: '6px', 
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)'
        }}>
          {options.map(opt => {
            const isSelected = selected.includes(opt[valueKey]);
            return (
              <label 
                key={opt[valueKey]} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  padding: '0.75rem 1rem', 
                  cursor: 'pointer', 
                  borderBottom: '1px solid #f8fafc',
                  backgroundColor: isSelected ? '#f8fafc' : '#fff',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => { if (!isSelected) e.currentTarget.style.backgroundColor = '#f1f5f9'; }}
                onMouseOut={(e) => { if (!isSelected) e.currentTarget.style.backgroundColor = '#fff'; }}
              >
                <div style={{ 
                  width: '18px', 
                  height: '18px', 
                  border: isSelected ? 'none' : '2px solid #cbd5e1', 
                  backgroundColor: isSelected ? 'var(--color-primary)' : 'transparent',
                  borderRadius: '4px', 
                  marginRight: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {isSelected && <span style={{ color: '#fff', fontSize: '12px' }}>✓</span>}
                </div>
                
                {/* Hidden native checkbox to keep semantics and state connection */}
                <input 
                  type="checkbox" 
                  checked={isSelected} 
                  onChange={() => toggleOption(opt[valueKey])}
                  style={{ display: 'none' }}
                />
                
                <span style={{ fontSize: '0.875rem', color: isSelected ? '#0f172a' : '#475569', fontWeight: isSelected ? '600' : '400' }}>
                  {renderLabel(opt)}
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default function ProjectFormModal({ isOpen, onClose }) {
  const [selectedMilestones, setSelectedMilestones] = useState([]);
  const [selectedConsultants, setSelectedConsultants] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Project">
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Project Name</label>
          <input type="text" required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--color-border)' }} placeholder="Enter project name" />
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
          <CheckboxDropdown 
            options={milestones}
            selected={selectedMilestones}
            onChange={setSelectedMilestones}
            valueKey="name"
            renderLabel={(m) => `${m.id} - ${m.name}`}
            placeholder="Select Milestones..."
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Assign Consultants</label>
          <CheckboxDropdown 
            options={mockConsultants}
            selected={selectedConsultants}
            onChange={setSelectedConsultants}
            valueKey="company"
            renderLabel={(c) => `${c.type}: ${c.company}`}
            placeholder="Select Consultants..."
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <button type="button" className="btn btn-outline" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn btn-primary">Save Project</button>
        </div>
      </form>
    </Modal>
  );
}
