export default function AuditTrail({ events }) {
  if (!events || events.length === 0) return null;

  return (
    <div style={{
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '2rem'
    }}>
      <h3 style={{ 
        margin: '0 0 1rem 0', 
        color: '#475569',
        fontSize: '1rem',
        fontWeight: '600'
      }}>
        📋 Audit Trail
      </h3>
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