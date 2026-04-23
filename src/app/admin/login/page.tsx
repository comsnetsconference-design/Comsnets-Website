"use client";

import React, { useState } from 'react';
import { auth } from '../../../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!auth) {
      setError("Firebase is not initialized. Please check your config.");
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/admin/oc');
    } catch (err: any) {
      setError("Invalid credentials. If you haven't created a user yet, please go to the Firebase Console -> Authentication and add a user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ marginTop: '50px', marginBottom: '50px' }}>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="well well-white" style={{ padding: '30px' }}>
            <h2 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Admin Login</h2>
            
            {error && <div className="alert alert-danger">{error}</div>}
            
            <form onSubmit={handleLogin}>
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label>Email Address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label>Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={loading} style={{ background: '#0a1628', border: 'none', width: '100%', padding: '10px', fontSize: '16px' }}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <div style={{ marginTop: '20px', fontSize: '13px', color: '#666', borderTop: '1px solid #eee', paddingTop: '15px' }}>
              <strong>Note to Developer:</strong> You must create a user in your Firebase Console (Authentication tab) to login here. Once logged in, your session is saved securely.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
