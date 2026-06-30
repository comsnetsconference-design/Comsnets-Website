import React from 'react';
import Link from 'next/link';
import { db } from '../../lib/firebase';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';

type Author = { name: string; affiliation: string };

type Paper = {
  id: string;
  paperId?: string;
  title?: string;
  authors?: Author[];
  authorsRaw?: string;
  track?: string;
  trackKey?: string;
  session?: string;
  year?: number;
  order?: number;
  code?: string;
};

const TRACK_ORDER: { key: string; label: string; icon: string }[] = [
  { key: 'demo_research', label: 'Demos & Research Previews', icon: 'fa-flask' },
  { key: 'posters', label: 'Posters', icon: 'fa-sticky-note-o' },
  { key: 'csp', label: 'Communication Systems Papers', icon: 'fa-file-text-o' },
  { key: 'graduateforum', label: 'Graduate Forum', icon: 'fa-graduation-cap' },
  { key: 'its', label: 'Intelligent Transportation Systems (ITS)', icon: 'fa-car' },
  { key: 'minds', label: 'MINDS Workshop', icon: 'fa-lightbulb-o' },
  { key: 'iigw', label: 'Intelligent IoT Gateway Workshop (IIGW)', icon: 'fa-microchip' },
  { key: 'advnet_oral', label: 'AdvNet Workshop - Oral', icon: 'fa-network-wired' },
  { key: 'advnet_posters', label: 'AdvNet Workshop - Posters', icon: 'fa-th-large' },
  { key: 'sysai', label: 'SysAI Workshop', icon: 'fa-cogs' },
  { key: 'sdr', label: 'SDR Workshop', icon: 'fa-broadcast-tower' },
  { key: 'aiot', label: 'AIoT Workshop', icon: 'fa-wifi' },
];

export const revalidate = 300; // Cache for 5 minutes

export default async function AcceptedPapers() {
  let papers: Paper[] = [];
  let errored = false;

  if (db) {
    try {
      const q = query(
        collection(db, 'accepted_papers'),
        where('year', '==', 2027),
        orderBy('order', 'asc')
      );
      const snap = await getDocs(q);
      papers = snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })) as Paper[];
    } catch (err) {
      console.error('Error fetching accepted papers:', err);
      errored = true;
    }
  }

  const grouped: Record<string, Paper[]> = {};
  for (const p of papers) {
    const key = p.trackKey || 'other';
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(p);
  }
  Object.keys(grouped).forEach(k => {
    grouped[k].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  });

  const hasData = papers.length > 0;

  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>

      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" id="head" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Accepted Papers</h1>

              {!hasData ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <div style={{ fontSize: '48px', color: '#ccc', marginBottom: '15px' }}>
                    <i className="fa fa-file-text-o"></i>
                  </div>
                  <h2 style={{ color: '#555' }}>Accepted Papers</h2>
                  <p style={{ color: '#777' }}>
                    {errored ? 'Unable to load accepted papers at this time.' : 'Accepted papers will be announced soon.'}
                  </p>
                </div>
              ) : (
                <>
                  <p style={{ marginBottom: '25px', color: '#555' }}>
                    Below is the list of accepted papers across all tracks and workshops for COMSNETS 2027.
                  </p>

                  {TRACK_ORDER.filter(t => grouped[t.key] && grouped[t.key].length > 0).map(t => (
                    <div key={t.key} style={{ marginBottom: '40px' }}>
                      <h2 style={{
                        borderBottom: '2px solid #123456',
                        paddingBottom: '8px',
                        marginBottom: '20px',
                        color: '#123456',
                        fontSize: '22px'
                      }}>
                        <i className={`fa ${t.icon}`} style={{ marginRight: '10px' }}></i>
                        {t.label}
                        <span style={{ fontSize: '14px', color: '#888', fontWeight: 'normal', marginLeft: '10px' }}>
                          ({grouped[t.key].length})
                        </span>
                      </h2>

                      {grouped[t.key].map(paper => (
                        <div
                          key={paper.id}
                          style={{
                            border: '1px solid #e5e5e5',
                            borderRadius: '4px',
                            padding: '15px 18px',
                            marginBottom: '12px',
                            background: '#fafafa'
                          }}
                        >
                          <div style={{ marginBottom: '6px' }}>
                            {paper.code && (
                              <span style={{
                                display: 'inline-block',
                                background: '#123456',
                                color: '#fff',
                                padding: '2px 8px',
                                borderRadius: '3px',
                                fontSize: '12px',
                                fontWeight: 600,
                                marginRight: '8px'
                              }}>
                                {paper.code}
                              </span>
                            )}
                            <strong style={{ color: '#222', fontSize: '15px' }}>{paper.title}</strong>
                          </div>
                          {paper.authors && paper.authors.length > 0 ? (
                            <div style={{ fontSize: '13px', color: '#555', lineHeight: 1.6 }}>
                              {paper.authors.map((a, i) => (
                                <span key={i}>
                                  {a.name}
                                  {a.affiliation ? <span style={{ color: '#888' }}> ({a.affiliation})</span> : null}
                                  {i < (paper.authors!.length - 1) ? '; ' : ''}
                                </span>
                              ))}
                            </div>
                          ) : paper.authorsRaw ? (
                            <div style={{ fontSize: '13px', color: '#555' }}>{paper.authorsRaw}</div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ))}
                </>
              )}

              <div style={{ marginTop: '30px', padding: '15px', background: '#f5f5f5', borderRadius: '4px' }}>
                <p style={{ margin: 0, color: '#555' }}>
                  View accepted papers from <Link href="/archive/2026/accepted_papers.php">COMSNETS 2026</Link> and previous years in the <Link href="/archive">archive</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
