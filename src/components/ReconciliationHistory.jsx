import { useReconciliationHistory } from '../services/useReconciliationHistory';

export default function ReconciliationHistory() {
  const { history, deleteEntry, clearHistory } = useReconciliationHistory();

  if (history.length === 0) {
    return (
      <div style={{
        backgroundColor: '#f0f9ff',
        border: '1px solid #bfdbfe',
        borderRadius: '8px',
        padding: '1.5rem',
        marginTop: '2rem',
        textAlign: 'center',
        color: '#1e40af'
      }}>
        📚 No reconciliation history yet. Run a reconciliation to get started!
      </div>
    );
  }

  const downloadEntry = (entry) => {
    const report = [
      'RECONCILIATION HISTORY REPORT',
      `Generated: ${entry.timestamp}`,
      '',
      'STATISTICS',
      `Total System Transactions,${entry.totalSystem}`,
      `Total Bank Transactions,${entry.totalBank}`,
      `Matched Transactions,${entry.matchedCount}`,
      `System Exceptions,${entry.unmatchedSystemCount}`,
      `Bank Exceptions,${entry.unmatchedBankCount}`,
      `Match Rate,${entry.matchRate}%`
    ].join('\n');

    const blob = new Blob([report], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `reconciliation-${entry.id}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div style={{
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '1.5rem',
      marginTop: '2rem'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <h3 style={{ margin: 0, color: '#1e293b' }}>
          📚 Reconciliation History ({history.length})
        </h3>
        {history.length > 0 && (
          <button
            onClick={clearHistory}
            style={{
              backgroundColor: '#ef4444',
              color: 'white',
              padding: '0.4rem 0.75rem',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: '500'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#dc2626'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#ef4444'}
          >
            Clear All
          </button>
        )}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '0.75rem'
      }}>
        {history.map((entry) => (
          <div
            key={entry.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: '1rem',
              borderRadius: '6px',
              border: '1px solid #e2e8f0',
              transition: 'box-shadow 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
          >
            <div style={{ flex: 1 }}>
              <div style={{ color: '#64748b', fontSize: '0.875rem' }}>
                {entry.timestamp}
              </div>
              <div style={{
                marginTop: '0.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '0.5rem',
                fontSize: '0.85rem'
              }}>
                <div>
                  <span style={{ color: '#64748b' }}>Match Rate:</span>
                  <span style={{ fontWeight: 'bold', marginLeft: '0.5rem', color: '#059669' }}>
                    {entry.matchRate}%
                  </span>
                </div>
                <div>
                  <span style={{ color: '#64748b' }}>Matched:</span>
                  <span style={{ fontWeight: 'bold', marginLeft: '0.5rem', color: '#0284c7' }}>
                    {entry.matchedCount}
                  </span>
                </div>
                <div>
                  <span style={{ color: '#64748b' }}>Exceptions:</span>
                  <span style={{ fontWeight: 'bold', marginLeft: '0.5rem', color: '#dc2626' }}>
                    {entry.unmatchedSystemCount + entry.unmatchedBankCount}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => downloadEntry(entry)}
                style={{
                  backgroundColor: '#0284c7',
                  color: 'white',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#0369a1'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#0284c7'}
              >
                📥 Download
              </button>
              <button
                onClick={() => deleteEntry(entry.id)}
                style={{
                  backgroundColor: '#ef4444',
                  color: 'white',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#dc2626'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#ef4444'}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}