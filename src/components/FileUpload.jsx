import { useState } from 'react';
import Papa from 'papaparse';

export default function FileUpload({ onFileLoaded, label }) {
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setFileName(file.name);
    setError('');

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (results.errors.length > 0) {
          setError('Error parsing CSV file');
          console.error(results.errors);
          return;
        }
        onFileLoaded(results.data);
      },
      error: (error) => {
        setError('Failed to read file');
        console.error(error);
      }
    });
  };

  return (
    <div style={{
      border: '2px dashed #cbd5e1',
      borderRadius: '8px',
      padding: '2rem',
      marginBottom: '1rem',
      backgroundColor: '#f8fafc'
    }}>
      <label style={{
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: 'bold',
        color: '#334155'
      }}>
        {label}
      </label>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        style={{
          display: 'block',
          marginBottom: '0.5rem'
        }}
      />
      {fileName && (
        <p style={{ color: '#059669', margin: '0.5rem 0' }}>
          ✓ Loaded: {fileName}
        </p>
      )}
      {error && (
        <p style={{ color: '#dc2626', margin: '0.5rem 0' }}>
          ✗ {error}
        </p>
      )}
    </div>
  );
}