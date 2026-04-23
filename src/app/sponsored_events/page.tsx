"use client";

import React, { useEffect, useState } from 'react';
import { db } from '../../lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default function SponsoredEvents() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      if (!db) {
        setLoading(false);
        return;
      }

      try {
        const q = query(collection(db, 'sponsored_events'), orderBy('year', 'desc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => doc.data());
        setEvents(data);
      } catch (err) {
        console.error("Error fetching sponsored events:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  return (
    <>
      {/* Subpage spacer */}
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>

      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" id="head" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
                COMSNETS Association Sponsored Events
              </h1>

              {loading ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>Loading sponsored events...</div>
              ) : events.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-striped table-hover" style={{ fontSize: '18px' }}>
                    <thead>
                      <tr style={{ background: '#CCCCCC' }}>
                        <th><strong>Sl No.</strong></th>
                        <th><strong>Year</strong></th>
                        <th><strong>Event</strong></th>
                        <th><strong>Amount</strong></th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.map((event, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{event.year}</td>
                          <td>
                            {event.link ? (
                              <a href={event.link} target="_blank" rel="noopener noreferrer">{event.eventName}</a>
                            ) : (
                              event.eventName
                            )}
                          </td>
                          <td>{event.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px', background: '#f8f9fa', borderRadius: '8px' }}>
                  <p style={{ color: '#666', fontSize: '18px' }}>Coming Soon: Details of COMSNETS sponsored events for 2027.</p>
                </div>
              )}
              
              <p>&nbsp;</p>
              <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
                <p>An initiative by <strong>COMSNETS Association</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
