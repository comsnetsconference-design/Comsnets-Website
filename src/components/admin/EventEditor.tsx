"use client";

import React, { useState } from 'react';

interface SponsoredEvent {
  id?: string;
  year: number;
  eventName: string;
  link: string;
  amount: string;
}

interface EventEditorProps {
  event?: SponsoredEvent;
  onSave: (event: SponsoredEvent) => Promise<void>;
  onCancel: () => void;
}

export default function EventEditor({ event, onSave, onCancel }: EventEditorProps) {
  const [formData, setFormData] = useState<SponsoredEvent>(
    event || {
      year: 2027,
      eventName: '',
      link: '',
      amount: '',
    }
  );
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    await onSave(formData);
    setIsSaving(false);
  };

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #dee2e6', marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h4 style={{ margin: 0 }}>{event ? 'Edit Event' : 'Add New Event'}</h4>
        <div>
          <button onClick={onCancel} style={{ marginRight: '10px', padding: '6px 15px', cursor: 'pointer', background: '#e9ecef', border: 'none', borderRadius: '4px' }}>Cancel</button>
          <button onClick={handleSubmit} disabled={isSaving} style={{ padding: '6px 15px', cursor: 'pointer', background: '#0d6efd', color: '#fff', border: 'none', borderRadius: '4px' }}>
            {isSaving ? 'Saving...' : 'Save Event'}
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
          <div style={{ flex: '1' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Year</label>
            <input 
              type="number" 
              value={formData.year} 
              onChange={(e) => setFormData({...formData, year: parseInt(e.target.value)})}
              required
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div style={{ flex: '2' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Event Name</label>
            <input 
              type="text" 
              value={formData.eventName} 
              onChange={(e) => setFormData({...formData, eventName: e.target.value})}
              required
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
          <div style={{ flex: '2' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Event Link (URL)</label>
            <input 
              type="text" 
              value={formData.link} 
              onChange={(e) => setFormData({...formData, link: e.target.value})}
              placeholder="e.g. https://itw2022.in/"
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div style={{ flex: '1' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Amount</label>
            <input 
              type="text" 
              value={formData.amount} 
              onChange={(e) => setFormData({...formData, amount: e.target.value})}
              placeholder="e.g. INR 1,00,000"
              required
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
