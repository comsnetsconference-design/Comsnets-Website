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

  const menuItems = [
    { href: '/admin/oc', icon: 'fa-users', label: 'Organizing Committee' },
    { href: '/admin/speakers', icon: 'fa-microphone', label: 'Manage Speakers' },
    { href: '/admin/sponsored-events', icon: 'fa-star', label: 'Sponsored Events' },
    { href: '/admin/navbar', icon: 'fa-bars', label: 'Manage Navigation' },
    { href: '/admin/pages', icon: 'fa-file-text-o', label: 'Manage Pages' },
  ];

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
        <div className="text-slate-500 font-medium">Loading Admin Panel...</div>
      </div>
    );
  }

  if (isLoginPage) {
    return <div key="login-view">{children}</div>;
  }

  return (
    <div className="admin-layout-wrapper font-sans bg-slate-50 flex flex-col" style={{ minHeight: 'calc(100vh - 80px)' }}>
      {/* Spacer for global navbar */}
      <div className="subpage-spacer max-md:hidden" style={{ height: '80px', background: '#0a1628' }}></div>

      <div className="flex-1 flex flex-col md:flex-row w-full">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-slate-900 text-white flex-shrink-0 shadow-lg max-md:hidden flex flex-col">
          <div className="p-6">
            <h2 className="text-xl font-bold tracking-wider !text-slate-100 uppercase mb-2">Admin Panel</h2>
            <p className="!text-slate-400 text-xs mb-0">COMSNETS 2027</p>
          </div>
          <nav className="flex-1 px-4 space-y-2 mt-4">
            {menuItems.map((item) => {
              const active = pathname.includes(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active ? 'bg-blue-600 !text-white shadow-sm' : '!text-slate-300 hover:bg-slate-800 hover:!text-white'
                  }`}
                >
                  <i className={`fa ${item.icon} w-5 text-center`}></i>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="p-4 border-t border-slate-800 mt-auto">
            <div className="text-xs !text-slate-400 mb-3 truncate px-2">
              Logged in as:<br />
              <span className="font-semibold !text-slate-200">{user?.email || "No Auth"}</span>
            </div>
            <button 
              onClick={handleLogout} 
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 !text-slate-300 rounded hover:bg-slate-700 hover:!text-white transition-colors text-sm font-medium border-0"
            >
              <i className="fa fa-sign-out"></i> Logout
            </button>
          </div>
        </aside>

        {/* Mobile Header */}
        <div className="md:hidden bg-slate-900 !text-white p-4 flex items-center justify-between shadow-md mt-[60px]">
          <div className="font-bold text-lg tracking-wider !text-white">Admin Panel</div>
          <button onClick={handleLogout} className="!text-slate-300 hover:!text-white text-sm bg-transparent border-0">
            Logout
          </button>
        </div>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-slate-50">
          {/* Mobile Navigation */}
          <div className="md:hidden bg-white shadow-sm overflow-x-auto border-b border-gray-200">
            <div className="flex p-2 gap-2 w-max">
              {menuItems.map((item) => {
                const active = pathname.includes(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                      active ? 'bg-blue-100 !text-blue-800' : '!text-slate-600 hover:bg-slate-100 hover:!text-slate-900'
                    }`}
                  >
                    <i className={`fa ${item.icon}`}></i>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-auto p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 min-h-[500px]">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
