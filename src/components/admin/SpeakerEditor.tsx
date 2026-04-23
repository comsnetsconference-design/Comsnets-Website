"use client";

import React, { useState } from 'react';
import ImageUpload from './ImageUpload';

interface Speaker {
  id?: string;
  name: string;
  affiliation: string;
  image: string;
  link: string;
  bio: string;
  type: 'keynote' | 'invited';
  year: number;
  order: number;
}

interface SpeakerEditorProps {
  speaker?: Speaker;
  onSave: (speaker: Speaker) => Promise<void>;
  onCancel: () => void;
}

export default function SpeakerEditor({ speaker, onSave, onCancel }: SpeakerEditorProps) {
  const [formData, setFormData] = useState<Speaker>(
    speaker || {
      name: '',
      affiliation: '',
      image: '',
      link: '',
      bio: '',
      type: 'keynote',
      year: 2027,
      order: 0,
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
        <h4 style={{ margin: 0 }}>{speaker ? 'Edit Speaker' : 'Add New Speaker'}</h4>
        <div>
          <button onClick={onCancel} style={{ marginRight: '10px', padding: '6px 15px', cursor: 'pointer', background: '#e9ecef', border: 'none', borderRadius: '4px' }}>Cancel</button>
          <button onClick={handleSubmit} disabled={isSaving} style={{ padding: '6px 15px', cursor: 'pointer', background: '#0d6efd', color: '#fff', border: 'none', borderRadius: '4px' }}>
            {isSaving ? 'Saving...' : 'Save Speaker'}
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
            <input 
              type="text" 
              value={formData.name} 
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Affiliation</label>
            <input 
              type="text" 
              value={formData.affiliation} 
              onChange={(e) => setFormData({...formData, affiliation: e.target.value})}
              required
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Speaker Image</label>
            <ImageUpload 
              currentImageUrl={formData.image} 
              onUploadComplete={(url) => setFormData({...formData, image: url})}
              folderPath="speakers"
            />
            <div style={{ marginTop: '10px' }}>
              <label style={{ display: 'block', fontSize: '11px', color: '#666' }}>Or manual Image URL</label>
              <input 
                type="text" 
                value={formData.image} 
                onChange={(e) => setFormData({...formData, image: e.target.value})}
                placeholder="e.g. /assets/images/Speakers_2027/swarun.png"
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '12px' }}
              />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Website Link</label>
            <input 
              type="text" 
              value={formData.link} 
              onChange={(e) => setFormData({...formData, link: e.target.value})}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Speaker Type</label>
            <select 
              value={formData.type} 
              onChange={(e) => setFormData({...formData, type: e.target.value as any})}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            >
              <option value="keynote">Keynote Speaker</option>
              <option value="invited">Invited Speaker</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Year</label>
            <input 
              type="number" 
              value={formData.year} 
              onChange={(e) => setFormData({...formData, year: parseInt(e.target.value)})}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Display Order</label>
            <input 
              type="number" 
              value={formData.order} 
              onChange={(e) => setFormData({...formData, order: parseInt(e.target.value)})}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Biography</label>
          <textarea 
            value={formData.bio} 
            onChange={(e) => setFormData({...formData, bio: e.target.value})}
            rows={5}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', resize: 'vertical' }}
          />
        </div>
      </form>
    </div>
  );
}
