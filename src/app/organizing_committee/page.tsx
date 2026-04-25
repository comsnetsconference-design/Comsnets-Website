"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import OCSection from '@/components/OCSection';
import { db } from '../../lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import conferenceData from '../../../data/conference.json';
import './oc-styles.css';

export default function OrganizingCommittee() {
  const [sections, setSections] = useState<any[]>(conferenceData.committeeSections);
  const [loading, setLoading] = useState(!!db);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOCData() {
      if (!db) {
        setLoading(false);
        return;
      }
      
      try {
        const q = query(collection(db, 'organizing_committee'), orderBy('order', 'asc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => doc.data());
        
        if (data.length > 0) {
          setSections(data);
        }
      } catch (err: any) {
        console.error("Error fetching OC data from Firestore:", err);
        setError("Error connecting to Firestore. Showing local data instead.");
      } finally {
        setLoading(false);
      }
    }

    fetchOCData();
  }, []);

  return (
    <>
      {/* Subpage spacer as defined in legacy header.php */}
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>

      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 itemProp="name" className="page-title" id="head" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Organizing Committee</h1>
              
              <div className="oc-page">
                {loading && <p>Loading committee details from database...</p>}
                {error && <p className="text-warning">{error}</p>}
                
                {!loading && sections.map((section: any, idx: number) => (
                  <OCSection key={idx} section={section} />
                ))}

                {/* Previous Committees */}
                <div className="oc-prev">
                    <h3>Previous Committees</h3>
                    <p>View the organizing committee from <a href="https://www.comsnets.org/archive/2026/organizing_committee.php" target="_blank" rel="noopener noreferrer">COMSNETS 2026</a> and previous years.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
