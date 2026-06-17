"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function PageGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState<boolean | null>(null);

  useEffect(() => {
    // Skip guard for admin routes and root home page if necessary, 
    // but typically we don't block the homepage anyway.
    if (pathname.startsWith('/admin') || pathname === '/') {
      setEnabled(true);
      return;
    }

    const checkPageStatus = async () => {
      // Normalize path to remove trailing slash if present
      const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '');

      try {
        if (!db) {
          setEnabled(true);
          return;
        }

        // Fetch from Firestore
        const docRef = doc(db, 'settings', 'pages_config');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const pages = docSnap.data().pages || {};
          
          if (pages[path] && pages[path].enabled === false) {
            setEnabled(false);
            return;
          }
        }
        
        setEnabled(true);
      } catch (error) {
        console.error("Error checking page status:", error);
        setEnabled(true); // default to enabled on error
      }
    };

    checkPageStatus();

    // Listen for manual cache refresh from admin actions
    const handleUpdate = () => {
      checkPageStatus();
    };

    window.addEventListener('pagesUpdated', handleUpdate);
    return () => window.removeEventListener('pagesUpdated', handleUpdate);
  }, [pathname]);

  // While checking, render nothing to prevent hydration mismatch or flashing
  if (enabled === null) {
    return <div className="min-h-[60vh] flex items-center justify-center"></div>;
  }

  // If page is explicitly disabled
  if (!enabled) {
    return (
      <div className="container mx-auto px-4 py-16 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <div className="bg-white border border-gray-200 rounded-lg p-10 max-w-2xl shadow-sm w-full">
          <i className="fa fa-lock text-slate-300 text-6xl mb-6"></i>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Coming Soon</h1>
          <p className="text-lg text-gray-600 mb-6">
            This page is currently being updated or is not yet available to the public. 
            Please check back later!
          </p>
          <a href="/" className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
            <i className="fa fa-arrow-left"></i> Return Home
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
