export default function AuditTrail({ events }) {
  if (!events || events.length === 0) return null;

  const handleExport = () => {
    const csvContent = [
      'Timestamp,Action',
      ...events.map(e => `"${e.timestamp}","${e.action}"`)
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `audit-trail-${Date.now()}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div style={{
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '2rem'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <h3 style={{ 
          margin: 0, 
          color: '#475569',
          fontSize: '1rem',
          fontWeight: '600'
        }}>
          📋 Audit Trail
        </h3>
        <button
          onClick={handleExport}
          style={{
            backgroundColor: '#64748b',
            color: 'white',
            padding: '0.4rem 0.75rem',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.75rem',
            fontWeight: '500'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#475569'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#64748b'}
        >
          📥 Export Log
        </button>
      </div>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '0.5rem' 
      }}>
        {events.map((event, index) => (
          <div 
            key={index}
            style={{
              display: 'flex',
              gap: '1rem',
              fontSize: '0.875rem',
              color: '#64748b',
              paddingBottom: '0.5rem',
              borderBottom: index < events.length - 1 ? '1px solid #e2e8f0' : 'none'
            }}
          >
            <span style={{ 
              fontFamily: 'monospace',
              color: '#94a3b8',
              minWidth: '80px'
            }}>
              {event.timestamp}
            </span>
            <span style={{ color: '#334155' }}>
              {event.action}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}