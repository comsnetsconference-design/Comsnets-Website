"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { auth } from '../../lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading && !user && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [user, loading, pathname, router]);

  const handleLogout = async () => {
    if (auth) {
      await signOut(auth);
      router.push('/admin/login');
    }
  };

  const isLoginPage = pathname === '/admin/login';

  return (
    <div className="admin-layout-wrapper">
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>

      {/* 
        CRITICAL FIX: We must always render {children} to maintain a stable hook count 
        in Next.js internal components. We use display:none to hide the UI during loading.
      */}
      <div style={{ display: loading ? 'none' : 'block' }}>
        {isLoginPage ? (
          <div key="login-view">
            {children}
          </div>
        ) : (
          <div key="admin-view" className="container" style={{ marginTop: '30px', marginBottom: '40px', minHeight: '60vh' }}>
            <div className="row">
              <div className="col-md-3">
                <div className="well well-white" style={{ padding: '20px', position: 'sticky', top: '20px' }}>
                  <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '15px', marginTop: 0 }}>Admin Menu</h3>
                  <ul className="nav nav-pills nav-stacked" style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: 0 }}>
                    <li className={pathname.includes('/admin/oc') ? 'active' : ''}>
                      <Link 
                        href="/admin/oc" 
                        style={{ 
                          display: 'block', 
                          padding: '10px 15px', 
                          background: pathname.includes('/admin/oc') ? '#0a1628' : '#f8f9fa', 
                          color: pathname.includes('/admin/oc') ? '#fff' : '#333', 
                          borderRadius: '4px', 
                          textDecoration: 'none',
                          fontWeight: pathname.includes('/admin/oc') ? 'bold' : 'normal'
                        }}
                      >
                        <i className="fa fa-users" style={{ marginRight: '8px' }}></i> Organizing Committee
                      </Link>
                    </li>
                    <li className={pathname.includes('/admin/speakers') ? 'active' : ''}>
                      <Link 
                        href="/admin/speakers" 
                        style={{ 
                          display: 'block', 
                          padding: '10px 15px', 
                          background: pathname.includes('/admin/speakers') ? '#0a1628' : '#f8f9fa', 
                          color: pathname.includes('/admin/speakers') ? '#fff' : '#333', 
                          borderRadius: '4px', 
                          textDecoration: 'none',
                          fontWeight: pathname.includes('/admin/speakers') ? 'bold' : 'normal'
                        }}
                      >
                        <i className="fa fa-microphone" style={{ marginRight: '8px' }}></i> Manage Speakers
                      </Link>
                    </li>
                    <li className={pathname.includes('/admin/sponsored-events') ? 'active' : ''}>
                      <Link 
                        href="/admin/sponsored-events" 
                        style={{ 
                          display: 'block', 
                          padding: '10px 15px', 
                          background: pathname.includes('/admin/sponsored-events') ? '#0a1628' : '#f8f9fa', 
                          color: pathname.includes('/admin/sponsored-events') ? '#fff' : '#333', 
                          borderRadius: '4px', 
                          textDecoration: 'none',
                          fontWeight: pathname.includes('/admin/sponsored-events') ? 'bold' : 'normal'
                        }}
                      >
                        <i className="fa fa-star" style={{ marginRight: '8px' }}></i> Sponsored Events
                      </Link>
                    </li>
                  </ul>
                  <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
                    <p style={{ fontSize: '12px', color: '#666', marginBottom: '10px', wordBreak: 'break-all' }}>
                      <strong>User:</strong> {user?.email || "No Auth Configured"}
                    </p>
                    <button onClick={handleLogout} className="btn btn-default btn-sm" style={{ width: '100%', border: '1px solid #ddd' }}>
                      <i className="fa fa-sign-out" style={{ marginRight: '5px' }}></i> Logout
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-9 page-content">
                <div className="well well-white" style={{ padding: '30px' }}>
                  {children}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {loading && (
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p>Loading Admin Panel...</p>
        </div>
      )}
    </div>
  );
}


