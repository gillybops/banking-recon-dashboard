export default function ExportButton({ data, filename, label }) {
  const handleExport = () => {
    if (!data || data.length === 0) {
      alert('No data to export');
      return;
    }

    // Convert to CSV
    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(','),
      ...data.map(row => 
        headers.map(header => {
          const value = row[header] || '';
          // Escape commas and quotes
          return `"${String(value).replace(/"/g, '""')}"`;
        }).join(',')
      )
    ].join('\n');

    // Create download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExport}
      style={{
        backgroundColor: '#0284c7',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: '500',
        fontSize: '0.875rem'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#0369a1'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#0284c7'}
    >
      📥 {label}
    </button>
  );
}