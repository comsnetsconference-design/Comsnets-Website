"use client";

import React, { useState } from 'react';
import ImageUpload from './ImageUpload';

interface Member {
  name: string;
  image?: string;
  affiliation: string;
  link?: string;
  email?: string;
}

interface SectionData {
  id: string;
  title: string;
  icon: string;
  note?: string;
  members?: Member[];
  order: number;
}

export default function OCSectionEditor({ 
  section, 
  onSave, 
  onCancel 
}: { 
  section: SectionData, 
  onSave: (id: string, data: any) => Promise<void>,
  onCancel: () => void 
}) {
  const [formData, setFormData] = useState<SectionData>(JSON.parse(JSON.stringify(section)));
  const [isSaving, setIsSaving] = useState(false);

  const handleMemberChange = (index: number, field: keyof Member, value: string) => {
    const updatedMembers = [...(formData.members || [])];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setFormData({ ...formData, members: updatedMembers });
  };

  const addMember = () => {
    const updatedMembers = [...(formData.members || []), { name: '', affiliation: '', image: '', link: '', email: '' }];
    setFormData({ ...formData, members: updatedMembers });
  };

  const removeMember = (index: number) => {
    const updatedMembers = [...(formData.members || [])];
    updatedMembers.splice(index, 1);
    setFormData({ ...formData, members: updatedMembers });
  };

  const saveContent = async () => {
    setIsSaving(true);
    await onSave(formData.id, formData);
    setIsSaving(false);
  };

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #dee2e6', marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <h4>Edit Section</h4>
        <div>
          <button onClick={onCancel} style={{ marginRight: '10px', padding: '6px 15px', cursor: 'pointer', background: '#e9ecef', border: 'none', borderRadius: '4px' }}>Cancel</button>
          <button onClick={saveContent} disabled={isSaving} style={{ padding: '6px 15px', cursor: 'pointer', background: '#0d6efd', color: '#fff', border: 'none', borderRadius: '4px' }}>
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Section Title</label>
          <input 
            type="text" 
            value={formData.title} 
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>FontAwesome Icon</label>
          <input 
            type="text" 
            value={formData.icon} 
            onChange={(e) => setFormData({...formData, icon: e.target.value})}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Section Note (Optional, overrides members if present)</label>
        <input 
          type="text" 
          value={formData.note || ''} 
          onChange={(e) => setFormData({...formData, note: e.target.value})}
          placeholder="e.g. TBD"
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>

      <h5 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '15px' }}>Committee Members</h5>
      
      {formData.members && formData.members.map((member, idx) => (
        <div key={idx} style={{ background: '#f8f9fa', padding: '15px', borderRadius: '6px', marginBottom: '15px', position: 'relative' }}>
          <button 
            onClick={() => removeMember(idx)}
            style={{ position: 'absolute', top: '10px', right: '10px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', padding: '4px 8px', cursor: 'pointer' }}
          >
            Remove
          </button>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '10px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 45%' }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#666' }}>Name</label>
              <input type="text" value={member.name} onChange={e => handleMemberChange(idx, 'name', e.target.value)} style={{ width: '100%', padding: '6px' }} />
            </div>
            <div style={{ flex: '1 1 45%' }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#666' }}>Affiliation (HTML allowed like &lt;br/&gt;)</label>
              <input type="text" value={member.affiliation} onChange={e => handleMemberChange(idx, 'affiliation', e.target.value)} style={{ width: '100%', padding: '6px' }} />
            </div>
            <div style={{ flex: '1 1 45%' }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#666', fontWeight: 'bold' }}>Member Image</label>
              <ImageUpload 
                currentImageUrl={member.image} 
                onUploadComplete={(url) => handleMemberChange(idx, 'image', url)}
                folderPath="committee"
              />
              <div style={{ marginTop: '5px' }}>
                <label style={{ display: 'block', fontSize: '10px', color: '#888' }}>Or manual URL</label>
                <input type="text" value={member.image || ''} onChange={e => handleMemberChange(idx, 'image', e.target.value)} style={{ width: '100%', padding: '4px', fontSize: '11px' }} />
              </div>
            </div>
            <div style={{ flex: '1 1 45%' }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#666' }}>Website Link (Optional)</label>
              <input type="text" value={member.link || ''} onChange={e => handleMemberChange(idx, 'link', e.target.value)} style={{ width: '100%', padding: '6px' }} />
            </div>
            <div style={{ flex: '1 1 45%' }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#666' }}>Email Address (Optional)</label>
              <input type="email" value={member.email || ''} onChange={e => handleMemberChange(idx, 'email', e.target.value)} style={{ width: '100%', padding: '6px' }} placeholder="e.g. name@example.com" />
            </div>
          </div>
        </div>
      ))}

      <button onClick={addMember} style={{ padding: '8px 15px', cursor: 'pointer', background: '#198754', color: '#fff', border: 'none', borderRadius: '4px' }}>
        + Add Member
      </button>

    </div>
  );
}
