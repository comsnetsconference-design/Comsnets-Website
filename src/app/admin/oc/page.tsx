"use client";

import React, { useEffect, useState } from 'react';
import { db, auth } from '../../../lib/firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import OCSectionEditor from '@/components/admin/OCSectionEditor';

export default function OCAdminPage() {
  const [sections, setSections] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

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
      const querySnapshot = await getDocs(collection(db, 'organizing_committee'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })).sort((a: any, b: any) => a.order - b.order);
      setSections(data);
    } catch (error: any) {
      console.error(error);
      setErrorMsg(error.message || "Failed to fetch data.");
    }
    setLoading(false);
  }

  async function handleSave(id: string, updatedData: any) {
    try {
      const docRef = doc(db, 'organizing_committee', id);
      const { id: _, ...dataToSave } = updatedData;
      await updateDoc(docRef, dataToSave);
      
      // Update local state
      setSections(prev => prev.map(s => s.id === id ? updatedData : s));
      setExpandedId(null);
      alert("Successfully updated " + updatedData.title);
    } catch (error: any) {
      console.error("Save error:", error);
      alert("Error saving: " + error.message);
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
        <h2 className="page-title" style={{ margin: 0 }}>Manage Organizing Committee</h2>
        <button className="btn" onClick={fetchData} style={{ background: '#0a1628', color: '#fff' }}>
          <i className="fa fa-refresh" style={{ marginRight: '5px' }}></i> Refresh
        </button>
      </div>

      {errorMsg && <div style={{ color: '#842029', background: '#f8d7da', padding: '15px', borderRadius: '4px', marginBottom: '20px' }}>{errorMsg}</div>}
      
      {loading && <p>Loading data from Firestore...</p>}

      {!loading && sections.length === 0 && !errorMsg && <p>No records found. Please run the seed script.</p>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {sections.map(section => (
          <div key={section.id}>
            {expandedId === section.id ? (
              <OCSectionEditor 
                section={section} 
                onSave={handleSave} 
                onCancel={() => setExpandedId(null)} 
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
                <div>
                  <h5 style={{ margin: '0 0 5px 0' }}>{section.title} <span style={{ fontSize: '12px', color: '#6c757d', fontWeight: 'normal' }}>({section.id})</span></h5>
                  <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                    {section.note ? `Note: ${section.note}` : `${section.members?.length || 0} members`}
                  </p>
                </div>
                <button 
                  onClick={() => setExpandedId(section.id)}
                  style={{ padding: '6px 15px', cursor: 'pointer', background: '#0d6efd', color: '#fff', border: 'none', borderRadius: '4px' }}
                >
                  Edit Section
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
