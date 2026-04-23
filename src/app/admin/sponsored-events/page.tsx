"use client";

import React, { useEffect, useState } from 'react';
import { db, auth } from '../../../lib/firebase';
import { collection, getDocs, doc, addDoc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import EventEditor from '@/components/admin/EventEditor';

export default function SponsoredEventsAdminPage() {
  const [events, setEvents] = useState<any[]>([]);
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
      const q = query(collection(db, 'sponsored_events'), orderBy('year', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(data);
    } catch (error: any) {
      console.error(error);
      setErrorMsg(error.message || "Failed to fetch data.");
    }
    setLoading(false);
  }

  async function handleSave(eventData: any) {
    try {
      if (eventData.id) {
        const { id, ...dataToSave } = eventData;
        const docRef = doc(db, 'sponsored_events', id);
        await updateDoc(docRef, dataToSave);
      } else {
        await addDoc(collection(db, 'sponsored_events'), eventData);
      }
      
      setEditingId(null);
      setIsAdding(false);
      fetchData();
      alert("Event saved successfully.");
    } catch (error: any) {
      console.error("Save error:", error);
      alert("Error saving: " + error.message);
    }
  }

  async function handleDelete(id: string, name: string) {
    if (!window.confirm(`Are you sure you want to delete ${name}?`)) return;

    try {
      await deleteDoc(doc(db, 'sponsored_events', id));
      fetchData();
      alert("Event deleted.");
    } catch (error: any) {
      console.error("Delete error:", error);
      alert("Error deleting: " + error.message);
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
        <h2 className="page-title" style={{ margin: 0 }}>Manage Sponsored Events</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn" onClick={() => setIsAdding(true)} style={{ background: '#198754', color: '#fff' }}>
            <i className="fa fa-plus" style={{ marginRight: '5px' }}></i> Add Event
          </button>
          <button className="btn" onClick={fetchData} style={{ background: '#0a1628', color: '#fff' }}>
            <i className="fa fa-refresh" style={{ marginRight: '5px' }}></i> Refresh
          </button>
        </div>
      </div>

      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
      
      {isAdding && (
        <EventEditor 
          onSave={handleSave} 
          onCancel={() => setIsAdding(false)} 
        />
      )}

      {loading && <p>Loading events from database...</p>}

      {!loading && events.length === 0 && !errorMsg && !isAdding && (
        <div style={{ textAlign: 'center', padding: '40px', background: '#f8f9fa', borderRadius: '8px' }}>
          <p style={{ color: '#666' }}>No sponsored events found.</p>
          <button className="btn btn-primary" onClick={() => setIsAdding(true)}>Add your first event</button>
        </div>
      )}

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead style={{ background: '#f8f9fa' }}>
            <tr>
              <th style={{ width: '80px' }}>Year</th>
              <th>Event Name</th>
              <th>Amount</th>
              <th style={{ width: '150px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <React.Fragment key={event.id}>
                {editingId === event.id ? (
                  <tr>
                    <td colSpan={4}>
                      <EventEditor 
                        event={event}
                        onSave={handleSave} 
                        onCancel={() => setEditingId(null)} 
                      />
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>{event.year}</td>
                    <td>
                      {event.link ? (
                        <a href={event.link} target="_blank" rel="noopener noreferrer">{event.eventName}</a>
                      ) : (
                        event.eventName
                      )}
                    </td>
                    <td>{event.amount}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '5px' }}>
                        <button 
                          onClick={() => setEditingId(event.id)}
                          className="btn btn-xs btn-primary"
                          style={{ padding: '2px 8px', fontSize: '12px' }}
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(event.id, event.eventName)}
                          className="btn btn-xs btn-danger"
                          style={{ padding: '2px 8px', fontSize: '12px' }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
