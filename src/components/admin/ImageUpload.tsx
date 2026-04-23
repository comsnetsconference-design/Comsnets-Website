"use client";

import React, { useState } from 'react';
import { storage } from '../../lib/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

interface ImageUploadProps {
  currentImageUrl?: string;
  onUploadComplete: (url: string) => void;
  folderPath: string;
}

export default function ImageUpload({ currentImageUrl, onUploadComplete, folderPath }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError("Please select an image file.");
      return;
    }

    // Validate file size (e.g., 2MB limit)
    if (file.size > 2 * 1024 * 1024) {
      setError("File size must be less than 2MB.");
      return;
    }

    setUploading(true);
    setError(null);
    setProgress(0);

    try {
      // Create a unique filename
      const filename = `${Date.now()}-${file.name.replace(/\s/g, '_')}`;
      const storageRef = ref(storage, `${folderPath}/${filename}`);
      
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(Math.round(progress));
        }, 
        (error) => {
          console.error("Upload error:", error);
          setError("Upload failed: " + error.message);
          setUploading(false);
        }, 
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          onUploadComplete(downloadURL);
          setUploading(false);
          setProgress(0);
        }
      );
    } catch (err: any) {
      setError(err.message);
      setUploading(false);
    }
  };

  return (
    <div style={{ marginTop: '10px', padding: '10px', background: '#f0f7ff', borderRadius: '4px', border: '1px dashed #007bff' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {currentImageUrl && (
          <div style={{ width: '50px', height: '50px', borderRadius: '4px', overflow: 'hidden', border: '1px solid #ddd' }}>
            <img src={currentImageUrl} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}
        
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '5px', color: '#0056b3' }}>
            {uploading ? `Uploading... ${progress}%` : 'Upload New Image'}
          </label>
          
          {!uploading ? (
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleFileChange}
              style={{ fontSize: '12px', width: '100%' }}
            />
          ) : (
            <div style={{ width: '100%', height: '8px', background: '#e9ecef', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${progress}%`, height: '100%', background: '#007bff', transition: 'width 0.3s' }}></div>
            </div>
          )}
          
          {error && <div style={{ color: '#dc3545', fontSize: '11px', marginTop: '5px' }}>{error}</div>}
        </div>
      </div>
      <p style={{ fontSize: '10px', color: '#666', marginTop: '5px', marginRotate: 0 }}>
        * Max size 2MB. Recommmended format: Square PNG/JPG.
      </p>
    </div>
  );
}
