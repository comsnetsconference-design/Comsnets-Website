"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getNavbarConfig, MenuItem, DEFAULT_NAVBAR } from '../lib/navbarService';

export default function Navbar() {
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [navItems, setNavItems] = useState<MenuItem[]>(DEFAULT_NAVBAR);
    const [mounted, setMounted] = useState(false);

    const navbarRef = useRef<HTMLDivElement>(null);

    // Auto-close menu and dropdowns when navigating
    useEffect(() => {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
    }, [pathname]);

    // Handle clicks outside the navbar to close menus
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
                setMobileMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
        // Click toggles pin/unpin on all viewports. Desktop also keeps CSS :hover.
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const isActive = (path: string) => pathname === path ? 'active' : '';

    const renderMenuItem = (item: MenuItem) => {
        if (item.isSectionHeader) {
            return <li key={item.id} className="dropdown-header">{item.label}</li>;
        }

        // When entering a different dropdown, unpin the previous one so two never render at once.
        const handleDropdownEnter = () => {
            if (openDropdown && openDropdown !== item.id) setOpenDropdown(null);
        };

        // Archive: years generated in code (2026 + 2021..2009). Bump the upper bound annually.
        if (item.isArchive) {
            return (
                <li key={item.id} className={`dropdown ${openDropdown === item.id ? 'open' : ''}`} onMouseEnter={handleDropdownEnter}>
                    <a href="#" className="dropdown-toggle" onClick={(e) => toggleDropdown(item.id, e)}>
                        {item.label}<span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" role="menu" style={{ minWidth: 150, maxHeight: 300, overflowY: 'auto' }}>
                        <li><a href="https://www.comsnets.org/archive/2026/" target="_blank" rel="noopener noreferrer">2026</a></li>
                        {Array.from({ length: 2021 - 2009 + 1 }, (_, i) => 2021 - i).map(year => (
                            <li key={year}><a href={`https://www.comsnets.org/archive/${year}`} target="_blank" rel="noopener noreferrer">{year}</a></li>
                        ))}
                    </ul>
                </li>
            );
        }

        if (item.children && item.children.length > 0) {
            return (
                <li key={item.id} className={`dropdown ${openDropdown === item.id ? 'open' : ''}`} onMouseEnter={handleDropdownEnter}>
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
            return (
                <li key={item.id} className={isActive(item.path)}>
                    <a onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}>{item.label}</a>
                </li>
            );
        }

        return (
            <li key={item.id} className={pathname === item.path ? 'active' : ''}>
                {item.isExternal ? (
                    <a href={item.path} target="_blank" rel="noopener noreferrer" onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}>{item.label}</a>
                ) : (
                    <Link href={item.path} onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}>{item.label}</Link>
                )}
            </li>
        );
    };

    return (
        <div className="navbar-sm" id="main-menu-container" ref={navbarRef}>
            <div className="navbar-primary" id="navbar-primary">
                <nav className="navbar navbar-inverse" role="navigation" aria-label="Main Navigation">
                    <div className="container-fluid navbar-container">
                        <div className="navbar-header">
                            <Link href="/" className="navbar-brand-mobile">
                                <img src="/assets/images/comsnets_header.png" alt="Logo" className="navbar-logo-mobile" />
                                <span className="navbar-title-mobile">COMSNETS 2027</span>
                            </Link>
                            <button type="button" className={`navbar-toggle ${mobileMenuOpen ? '' : 'collapsed'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation menu">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>

                        <div className={`navbar-collapse ${mobileMenuOpen ? 'in' : ''}`} id="bs-example-navbar-collapse-2">
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


