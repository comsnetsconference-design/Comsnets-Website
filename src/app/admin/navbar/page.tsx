"use client";
import React, { useState, useEffect } from 'react';
import { getNavbarConfig, saveNavbarConfig, MenuItem, DEFAULT_NAVBAR } from '../../../lib/navbarService';

export default function ManageNavbar() {
    const [items, setItems] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    useEffect(() => {
        fetchNavbar();
    }, []);

    const fetchNavbar = async () => {
        setLoading(true);
        const config = await getNavbarConfig();
        if (config) {
            setItems(config);
        } else {
            setItems(DEFAULT_NAVBAR);
        }
        setLoading(false);
    };

    const handleSave = async () => {
        setSaving(true);
        const success = await saveNavbarConfig(items);
        if (success) {
            setMessage({ text: 'Navbar configuration saved successfully!', type: 'success' });
            // Clear cache for users to see updates
            if (typeof window !== 'undefined') {
                sessionStorage.removeItem('navbar_config');
            }
        } else {
            setMessage({ text: 'Failed to save configuration. Please check permissions.', type: 'danger' });
        }
        setSaving(false);
        setTimeout(() => setMessage({ text: '', type: '' }), 3000);
    };

    const addItem = (parentId: string | null = null) => {
        const newItem: MenuItem = {
            id: crypto.randomUUID(),
            label: 'New Link',
            path: '/',
        };

        if (parentId === null) {
            setItems([...items, newItem]);
        } else {
            setItems(items.map(item => {
                if (item.id === parentId) {
                    return { ...item, children: [...(item.children || []), newItem] };
                }
                return item;
            }));
        }
    };

    const removeItem = (id: string, parentId: string | null = null) => {
        if (parentId === null) {
            setItems(items.filter(item => item.id !== id));
        } else {
            setItems(items.map(item => {
                if (item.id === parentId) {
                    return { ...item, children: item.children?.filter(child => child.id !== id) };
                }
                return item;
            }));
        }
    };

    const updateItem = (id: string, field: keyof MenuItem, value: any, parentId: string | null = null) => {
        if (parentId === null) {
            setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
        } else {
            setItems(items.map(item => {
                if (item.id === parentId) {
                    return {
                        ...item,
                        children: item.children?.map(child => child.id === id ? { ...child, [field]: value } : child)
                    };
                }
                return item;
            }));
        }
    };

    const moveItem = (id: string, direction: 'up' | 'down', parentId: string | null = null) => {
        const list = parentId === null ? [...items] : [...(items.find(i => i.id === parentId)?.children || [])];
        const index = list.findIndex(i => i.id === id);
        if ((direction === 'up' && index === 0) || (direction === 'down' && index === list.length - 1)) return;

        const newIndex = direction === 'up' ? index - 1 : index + 1;
        [list[index], list[newIndex]] = [list[newIndex], list[index]];

        if (parentId === null) {
            setItems(list);
        } else {
            setItems(items.map(item => item.id === parentId ? { ...item, children: list } : item));
        }
    };

    if (loading) return <div className="text-center p-5"><h4>Loading Navigation...</h4></div>;

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ margin: 0 }}>Custom Navbar Design</h2>
                <button 
                    onClick={handleSave} 
                    className="btn btn-primary"
                    disabled={saving}
                    style={{ background: '#0a1628', border: 'none', padding: '10px 20px' }}
                >
                    {saving ? 'Saving...' : 'Save Configuration'}
                </button>
            </div>

            {message.text && (
                <div className={`alert alert-${message.type}`} style={{ marginBottom: '20px' }}>
                    {message.text}
                </div>
            )}

            <div className="navbar-editor">
                {items.map((item) => (
                    <div key={item.id} className="panel panel-default mb-3" style={{ border: '1px solid #ddd', borderRadius: '8px', marginBottom: '15px', overflow: 'hidden' }}>
                        <div className="panel-heading" style={{ background: '#f8f9fa', padding: '10px 15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ flex: 1, display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <strong>{item.label}</strong>
                                <span className="text-muted" style={{ fontSize: '12px' }}>({item.path})</span>
                            </div>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <button className="btn btn-xs btn-default" onClick={() => moveItem(item.id, 'up')}><i className="fa fa-arrow-up"></i></button>
                                <button className="btn btn-xs btn-default" onClick={() => moveItem(item.id, 'down')}><i className="fa fa-arrow-down"></i></button>
                                <button className="btn btn-xs btn-danger" onClick={() => removeItem(item.id)}><i className="fa fa-trash"></i></button>
                            </div>
                        </div>
                        <div className="panel-body" style={{ padding: '15px' }}>
                            <div className="row" style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                                <div style={{ flex: 1 }}>
                                    <label>Display Label</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={item.label} 
                                        onChange={(e) => updateItem(item.id, 'label', e.target.value)}
                                    />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label>Route / URL</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={item.path} 
                                        onChange={(e) => updateItem(item.id, 'path', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div style={{ background: '#fdfdfd', padding: '15px', borderRadius: '4px', border: '1px dashed #ccc' }}>
                                <h5 style={{ marginTop: 0, marginBottom: '10px' }}>Submenu Items</h5>
                                {item.children?.map(child => (
                                    <div key={child.id} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px', background: '#fff', padding: '8px', border: '1px solid #eee' }}>
                                        <div style={{ flex: 1 }}>
                                            <input 
                                                type="text" 
                                                className="form-control input-sm" 
                                                placeholder="Label"
                                                value={child.label} 
                                                onChange={(e) => updateItem(child.id, 'label', e.target.value, item.id)}
                                            />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <input 
                                                type="text" 
                                                className="form-control input-sm" 
                                                placeholder="Path"
                                                value={child.path} 
                                                onChange={(e) => updateItem(child.id, 'path', e.target.value, item.id)}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', gap: '3px' }}>
                                            <button className="btn btn-xs btn-default" onClick={() => moveItem(child.id, 'up', item.id)}><i className="fa fa-arrow-up"></i></button>
                                            <button className="btn btn-xs btn-default" onClick={() => moveItem(child.id, 'down', item.id)}><i className="fa fa-arrow-down"></i></button>
                                            <button className="btn btn-xs btn-danger" onClick={() => removeItem(child.id, item.id)}><i className="fa fa-trash"></i></button>
                                        </div>
                                    </div>
                                ))}
                                <button className="btn btn-xs btn-default" onClick={() => addItem(item.id)}>
                                    <i className="fa fa-plus"></i> Add Submenu Item
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <button onClick={() => addItem(null)} className="btn btn-default" style={{ width: '100%', border: '1px dashed #aaa', padding: '15px' }}>
                    <i className="fa fa-plus"></i> Add Top-Level Menu Item
                </button>
            </div>
            
            <div style={{ marginTop: '40px', padding: '20px', background: '#eef2f7', borderRadius: '8px' }}>
                <h4>Help & Tips</h4>
                <ul style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    <li><strong>Section Headers:</strong> If you want a non-clickable title inside a dropdown (like "Speakers"), set path to <code>#</code>.</li>
                    <li><strong>External Links:</strong> Use full URLs (e.g., <code>https://google.com</code>) for external sites.</li>
                    <li><strong>Home Page:</strong> Use <code>/</code> for the home page.</li>
                    <li><strong>ID matching:</strong> The styling is applied automatically based on the class structure. No extra styling needed.</li>
                </ul>
            </div>
        </div>
    );
}

