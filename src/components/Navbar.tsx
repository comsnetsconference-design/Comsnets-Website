"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getNavbarConfig, MenuItem, DEFAULT_NAVBAR } from '../lib/navbarService';

export default function Navbar() {
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [navItems, setNavItems] = useState<MenuItem[]>(DEFAULT_NAVBAR);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const loadNavbar = async () => {
            // Try cache first
            const cached = sessionStorage.getItem('navbar_config');
            if (cached) {
                try {
                    setNavItems(JSON.parse(cached));
                    return;
                } catch (e) {
                    console.error("Failed to parse cached navbar", e);
                }
            }

            // Fetch from Firestore
            const config = await getNavbarConfig();
            if (config && config.length > 0) {
                setNavItems(config);
                sessionStorage.setItem('navbar_config', JSON.stringify(config));
            } else {
                setNavItems(DEFAULT_NAVBAR);
            }
        };

        loadNavbar();
    }, []);

    const toggleDropdown = (name: string, e: React.MouseEvent) => {
        e.preventDefault();
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const isActive = (path: string) => pathname === path ? 'active' : '';

    const renderMenuItem = (item: MenuItem) => {
        if (item.isSectionHeader) {
            return <li key={item.id} className="dropdown-header">{item.label}</li>;
        }

        if (item.children && item.children.length > 0) {
            return (
                <li key={item.id} className={`dropdown ${openDropdown === item.id ? 'open' : ''}`}>
                    <a href="#" className="dropdown-toggle" onClick={(e) => toggleDropdown(item.id, e)}>
                        {item.label}<span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" role="menu" style={item.id === 'archive' ? { minWidth: '150px', maxHeight: '300px', overflowY: 'auto' } : {}}>
                        {item.children.map(child => renderMenuItem(child))}
                    </ul>
                </li>
            );
        }

        const isHash = item.path === '#';
        if (isHash) {
            return <li key={item.id} className={isActive(item.path)}><a>{item.label}</a></li>;
        }

        return (
            <li key={item.id} className={pathname === item.path ? 'active' : ''}>
                {item.isExternal ? (
                    <a href={item.path} target="_blank" rel="noopener noreferrer">{item.label}</a>
                ) : (
                    <Link href={item.path}>{item.label}</Link>
                )}
            </li>
        );
    };

    // To prevent hydration mismatch, we render the EXACT SAME structure on server and first client render.
    // Since navItems defaults to DEFAULT_NAVBAR, it will match.
    // The useEffect will then trigger a client-side update if custom config exists.
    return (
        <div className="navbar-sm" id="main-menu-container">
            <div className="navbar-primary" id="navbar-primary">
                <nav className="navbar navbar-inverse" role="navigation" aria-label="Main Navigation">
                    <div className="container-fluid" style={{ padding: '0 10px' }}>
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation menu">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#fff', borderRadius: '1px', marginTop: '4px' }}></span>
                                <span className="icon-bar" style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#fff', borderRadius: '1px', marginTop: '4px' }}></span>
                                <span className="icon-bar" style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#fff', borderRadius: '1px', marginTop: '4px' }}></span>
                            </button>
                        </div>

                        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'in' : ''}`} id="bs-example-navbar-collapse-2">
                            <ul className="nav navbar-nav">
                                {navItems.map(item => renderMenuItem(item))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
