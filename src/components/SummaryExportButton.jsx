export default function SummaryExportButton({ reconciliation, auditEvents }) {
  const handleExport = () => {
    if (!reconciliation) {
      alert('No reconciliation data to export');
      return;
    }

    const timestamp = new Date().toLocaleString();
    
    // Build comprehensive report
    let report = [];
    
    // Header
    report.push('RECONCILIATION SUMMARY REPORT');
    report.push(`Generated: ${timestamp}`);
    report.push('');
    
    // Statistics
    report.push('STATISTICS');
    report.push(`Total System Transactions,${reconciliation.stats.totalSystem}`);
    report.push(`Total Bank Transactions,${reconciliation.stats.totalBank}`);
    report.push(`Matched Transactions,${reconciliation.stats.matchedCount}`);
    report.push(`System Exceptions,${reconciliation.stats.unmatchedSystemCount}`);
    report.push(`Bank Exceptions,${reconciliation.stats.unmatchedBankCount}`);
    report.push(`Match Rate,${reconciliation.stats.matchRate}%`);
    report.push('');
    
    // Matched Transactions
    if (reconciliation.matched.length > 0) {
      report.push('MATCHED TRANSACTIONS');
      report.push('ID,Date,Amount,Reference,Description');
      reconciliation.matched.forEach(m => {
        const t = m.system;
        report.push(`"${t.id}","${t.date}","${t.amount}","${t.reference}","${t.description}"`);
      });
      report.push('');
    }
    
    // System Exceptions
    if (reconciliation.unmatchedSystem.length > 0) {
      report.push('SYSTEM EXCEPTIONS');
      report.push('ID,Date,Amount,Reference,Description');
      reconciliation.unmatchedSystem.forEach(t => {
        report.push(`"${t.id}","${t.date}","${t.amount}","${t.reference}","${t.description}"`);
      });
      report.push('');
    }
    
    // Bank Exceptions
    if (reconciliation.unmatchedBank.length > 0) {
      report.push('BANK EXCEPTIONS');
      report.push('ID,Date,Amount,Reference,Description');
      reconciliation.unmatchedBank.forEach(t => {
        report.push(`"${t.id}","${t.date}","${t.amount}","${t.reference}","${t.description}"`);
      });
      report.push('');
    }
    
    // Audit Trail
    if (auditEvents && auditEvents.length > 0) {
      report.push('AUDIT TRAIL');
      report.push('Timestamp,Action');
      auditEvents.forEach(e => {
        report.push(`"${e.timestamp}","${e.action}"`);
      });
    }
    
    // Create download
    const blob = new Blob([report.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `reconciliation-summary-${Date.now()}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExport}
      style={{
        backgroundColor: '#059669',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: '500',
        fontSize: '0.875rem'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#047857'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#059669'}
    >
      📊 Export Full Report
    </button>
  );
}