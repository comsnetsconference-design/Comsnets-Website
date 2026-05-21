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

    useEffect(() => {
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

    return (
        <>
            <style dangerouslySetInnerHTML={{__html: `
                /* === MODERN CENTERED NAVBAR — COMSNETS 2027 === */
                #main-menu-container {
                    position: fixed !important;
                    top: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    max-width: none;
                    margin: 0;
                    z-index: 2147483647 !important;
                    display: block !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                    pointer-events: auto !important;
                }
                #navbar-primary .navbar {
                    border-radius: 0;
                    border: none;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    background: var(--nav-bg, #0a1628) !important;
                    min-height: 70px;
                    padding: 15px 20px;
                    font-family: 'Inter', 'Outfit', 'Segoe UI', sans-serif;
                    transition: background-color 0.3s ease;
                }
                .navbar-inverse {
                    background-color: transparent;
                    border-color: transparent;
                }
                #navbar-primary .navbar-collapse {
                    text-align: center;
                    width: 100% !important;
                }
                #navbar-primary .navbar-nav {
                    display: inline-flex !important;
                    align-items: center !important;
                    float: none !important;
                    margin: 0 auto !important;
                    padding: 0 !important;
                    list-style: none !important;
                }
                @media (min-width: 768px) {
                    #navbar-primary .navbar-collapse.collapse {
                        display: block !important;
                        height: auto !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                    }
                    .navbar-toggle {
                        display: none !important;
                    }
                }
                #navbar-primary .navbar-nav > li > a {
                    padding: 12px 18px;
                    font-family: 'Inter', 'Segoe UI', sans-serif;
                    font-size: 14px;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    white-space: nowrap;
                    color: rgba(255,255,255,0.95) !important;
                    border-radius: 4px;
                    transition: all 0.25s ease;
                    margin: 0 2px;
                    line-height: 1.4;
                    display: block !important;
                    text-decoration: none !important;
                }
                #navbar-primary .navbar-nav > li {
                    display: inline-block !important;
                    float: none !important;
                }
                #navbar-primary .navbar-nav > li > a:hover,
                #navbar-primary .navbar-nav > .open > a {
                    background: rgba(255, 255, 255, 0.12);
                    color: #ffffff !important;
                }
                #navbar-primary .navbar-nav > .active > a,
                #navbar-primary .navbar-nav > .active > a:hover,
                #navbar-primary .navbar-nav > .active > a:focus {
                    background: #ffffff !important;
                    color: #0a1628 !important;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                }
                .dropdown-menu {
                    border-radius: 16px;
                    border: 1px solid var(--border, rgba(0,0,0,0.08));
                    box-shadow: 0 12px 40px rgba(0,0,0,0.15);
                    margin-top: 8px;
                    padding: 8px 0;
                    font-size: 14px;
                    min-width: 220px;
                    background: var(--dropdown-bg, #fff);
                    transition: background-color 0.3s ease;
                    overflow: hidden;
                    display: none;
                    position: absolute;
                    text-align: left;
                }
                .open > .dropdown-menu {
                    display: block;
                }
                .dropdown-menu > li > a {
                    padding: 9px 20px;
                    color: var(--dropdown-text, #333) !important;
                    font-weight: 500;
                    font-size: 13px;
                    transition: all 0.2s ease;
                    display: block;
                }
                .dropdown-menu > li > a:hover {
                    background: var(--dropdown-hover, #f5f5f5) !important;
                    padding-left: 24px;
                }
                .dropdown-header {
                    font-weight: bold;
                    color: var(--primary, #123456);
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    padding: 10px 20px 5px;
                    font-family: 'Outfit', 'Inter', sans-serif;
                }
                .caret {
                    display: inline-block;
                    width: 0;
                    height: 0;
                    margin-left: 2px;
                    vertical-align: middle;
                    border-top: 4px dashed;
                    border-right: 4px solid transparent;
                    border-left: 4px solid transparent;
                }
                .divider {
                    height: 1px;
                    margin: 9px 0;
                    overflow: hidden;
                    background-color: #e5e5e5;
                }
            `}} />

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
        </>
    );
}
