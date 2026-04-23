"use client";

import React, { useEffect, useState } from 'react';
import { db, auth } from '../../../lib/firebase';
import { collection, getDocs, doc, addDoc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import SpeakerEditor from '@/components/admin/SpeakerEditor';

export default function SpeakersAdminPage() {
  const [speakers, setSpeakers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (!auth) {
      setErrorMsg("Firebase not initialized.");
      setLoading(false);
      return;
    }

    // Wait for auth to resolve before fetching
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchData();
      } else {
        // If not logged in, AdminLayout will handle the redirect
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  async function fetchData() {
    try {
      const q = query(collection(db, 'speakers'), orderBy('year', 'desc'), orderBy('order', 'asc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSpeakers(data);
    } catch (error: any) {
      console.error(error);
      setErrorMsg(error.message || "Failed to fetch data.");
    }
    setLoading(false);
  }

  async function handleSave(speakerData: any) {
    try {
      if (speakerData.id) {
        // Update existing
        const { id, ...dataToSave } = speakerData;
        const docRef = doc(db, 'speakers', id);
        await updateDoc(docRef, dataToSave);
      } else {
        // Add new
        await addDoc(collection(db, 'speakers'), speakerData);
      }
      
      setEditingId(null);
      setIsAdding(false);
      fetchData();
      alert("Speaker saved successfully.");
    } catch (error: any) {
      console.error("Save error:", error);
      alert("Error saving: " + error.message);
    }
  }

  async function handleDelete(id: string, name: string) {
    if (!window.confirm(`Are you sure you want to delete ${name}?`)) return;

    try {
      await deleteDoc(doc(db, 'speakers', id));
      fetchData();
      alert("Speaker deleted.");
    } catch (error: any) {
      console.error("Delete error:", error);
      alert("Error deleting: " + error.message);
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
        <h2 className="page-title" style={{ margin: 0 }}>Manage Speakers</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn" onClick={() => setIsAdding(true)} style={{ background: '#198754', color: '#fff' }}>
            <i className="fa fa-plus" style={{ marginRight: '5px' }}></i> Add Speaker
          </button>
          <button className="btn" onClick={fetchData} style={{ background: '#0a1628', color: '#fff' }}>
            <i className="fa fa-refresh" style={{ marginRight: '5px' }}></i> Refresh
          </button>
        </div>
      </div>

      {errorMsg && <div style={{ color: '#842029', background: '#f8d7da', padding: '15px', borderRadius: '4px', marginBottom: '20px' }}>{errorMsg}</div>}
      
      {isAdding && (
        <SpeakerEditor 
          onSave={handleSave} 
          onCancel={() => setIsAdding(false)} 
        />
      )}

      {loading && <p>Loading speakers from database...</p>}

      {!loading && speakers.length === 0 && !errorMsg && !isAdding && (
        <div style={{ textAlign: 'center', padding: '40px', background: '#f8f9fa', borderRadius: '8px' }}>
          <p style={{ color: '#666' }}>No speakers found in the database.</p>
          <button className="btn btn-primary" onClick={() => setIsAdding(true)}>Add your first speaker</button>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {speakers.map(speaker => (
          <div key={speaker.id}>
            {editingId === speaker.id ? (
              <SpeakerEditor 
                speaker={speaker}
                onSave={handleSave} 
                onCancel={() => setEditingId(null)} 
              />
            ) : (
              <div 
                style={{ 
                  background: '#fff', 
                  border: '1px solid #dee2e6', 
                  padding: '15px 20px', 
                  borderRadius: '6px', 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#eee', overflow: 'hidden' }}>
                    {speaker.image ? (
                      <img src={speaker.image} alt={speaker.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <i className="fa fa-user" style={{ fontSize: '24px', margin: '13px', color: '#ccc' }}></i>
                    )}
                  </div>
                  <div>
                    <h5 style={{ margin: '0 0 5px 0' }}>
                      {speaker.name} 
                      <span style={{ fontSize: '11px', color: '#fff', backgroundColor: speaker.type === 'keynote' ? '#3b82f6' : '#10b981', padding: '2px 8px', borderRadius: '10px', marginLeft: '10px' }}>
                        {speaker.type.toUpperCase()}
                      </span>
                      <span style={{ fontSize: '12px', color: '#6c757d', fontWeight: 'normal', marginLeft: '10px' }}>{speaker.year}</span>
                    </h5>
                    <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                      {speaker.affiliation}
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    onClick={() => setEditingId(speaker.id)}
                    style={{ padding: '6px 12px', cursor: 'pointer', background: '#0d6efd', color: '#fff', border: 'none', borderRadius: '4px' }}
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(speaker.id, speaker.name)}
                    style={{ padding: '6px 12px', cursor: 'pointer', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
