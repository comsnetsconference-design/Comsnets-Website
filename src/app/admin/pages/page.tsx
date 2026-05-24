"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { availableRoutes } from '@/lib/pageRoutes';

interface PageConfig {
  name: string;
  enabled: boolean;
}

interface PagesMap {
  [path: string]: PageConfig;
}

export default function ManagePages() {
  const [pages, setPages] = useState<PagesMap>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Search state
  const [searchTerm, setSearchTerm] = useState('');
  
  // Copy feedback state
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    if (!db) {
      setError('Firebase is not initialized.');
      setLoading(false);
      return;
    }
    
    try {
      const docRef = doc(db, 'settings', 'pages_config');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists() && docSnap.data().pages) {
        setPages(docSnap.data().pages);
      }
    } catch (err) {
      console.error("Error fetching pages config:", err);
      setError('Failed to fetch pages configuration.');
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async (path: string, currentEnabled: boolean, defaultName: string) => {
    const isCurrentlyManaged = !!pages[path];
    
    const updatedPages = {
      ...pages,
      [path]: { 
        name: isCurrentlyManaged ? pages[path].name : defaultName, 
        enabled: !currentEnabled 
      }
    };
    
    setPages(updatedPages);
    await saveToFirestore(updatedPages);
  };

  const saveToFirestore = async (updatedPages: PagesMap) => {
    if (!db) return;
    setSaving(true);
    try {
      await setDoc(doc(db, 'settings', 'pages_config'), { pages: updatedPages }, { merge: true });
      window.dispatchEvent(new Event('pagesUpdated'));
    } catch (err) {
      console.error("Error saving to Firestore", err);
      alert("Failed to save changes.");
    } finally {
      setSaving(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPath(text);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  // Combine dynamic firestore pages with statically known routes
  const combinedPages = useMemo(() => {
    const result: { path: string; name: string; enabled: boolean; isCustom: boolean }[] = [];
    
    // Process all static routes
    availableRoutes.forEach(route => {
      const isManaged = !!pages[route];
      // Generate a readable name from the route if not explicitly managed
      const defaultName = route === '/' 
        ? 'Home Page' 
        : route.replace('/', '').split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      
      result.push({
        path: route,
        name: isManaged ? pages[route].name : defaultName,
        enabled: isManaged ? pages[route].enabled : true,
        isCustom: false
      });
    });

    // Process any custom routes that were manually added to Firestore but aren't in the static list
    Object.keys(pages).forEach(route => {
      if (!availableRoutes.includes(route)) {
        result.push({
          path: route,
          name: pages[route].name,
          enabled: pages[route].enabled,
          isCustom: true
        });
      }
    });

    return result.sort((a, b) => a.path.localeCompare(b.path));
  }, [pages]);

  // Filter based on search term
  const filteredPages = combinedPages.filter(p => 
    p.path.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading page configurations...</div>;

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-4 mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Manage Pages</h1>
          <p className="text-gray-500 text-sm mt-1">Enable or disable any page dynamically.</p>
        </div>
        
        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fa fa-search text-gray-400"></i>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out shadow-sm"
            placeholder="Search by name or path..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {error && <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">{error}</div>}

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Page Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">URL Path</th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPages.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-6 py-12 text-center text-gray-500">
                  No pages found matching "{searchTerm}"
                </td>
              </tr>
            ) : (
              filteredPages.map((page) => (
                <tr key={page.path} className={!page.enabled ? "bg-red-50/40" : "hover:bg-slate-50/50 transition-colors"}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-slate-900 flex items-center gap-2">
                      {page.name}
                      {page.isCustom && <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 tracking-wider">CUSTOM</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-md bg-slate-100 text-slate-600 font-mono border border-slate-200">
                        {page.path}
                      </span>
                      <button 
                        onClick={() => copyToClipboard(page.path)}
                        className={`text-gray-400 hover:text-blue-600 transition-colors focus:outline-none w-5 flex justify-center ${copiedPath === page.path ? 'text-green-500' : ''}`}
                        title="Copy to clipboard"
                      >
                        {copiedPath === page.path ? (
                          <i className="fa fa-check"></i>
                        ) : (
                          <i className="fa fa-copy"></i>
                        )}
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex flex-col items-center justify-center">
                      <button
                        onClick={() => handleToggle(page.path, page.enabled, page.name)}
                        disabled={saving}
                        className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${page.enabled ? 'bg-green-500' : 'bg-gray-300'} ${saving ? 'opacity-50' : ''}`}
                        role="switch"
                        aria-checked={page.enabled}
                      >
                        <span className="sr-only">Toggle page status</span>
                        <span
                          aria-hidden="true"
                          className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${page.enabled ? 'translate-x-5' : 'translate-x-0'}`}
                        ></span>
                      </button>
                      <div className={`text-[10px] mt-1 font-bold uppercase tracking-wide ${page.enabled ? 'text-green-600' : 'text-gray-500'}`}>
                        {page.enabled ? 'Enabled' : 'Disabled'}
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
