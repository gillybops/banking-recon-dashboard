export default function EmptyState() {
  return (
    <div style={{
      backgroundColor: '#f8fafc',
      border: '2px dashed #cbd5e1',
      borderRadius: '12px',
      padding: '3rem 2rem',
      marginTop: '2rem',
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        📊
      </div>
      <h3 style={{ 
        color: '#334155', 
        marginBottom: '0.5rem',
        fontSize: '1.25rem'
      }}>
        Ready to Reconcile Transactions
      </h3>
      <p style={{ 
        color: '#64748b',
        marginBottom: '1.5rem',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        Upload your system transactions and bank statement CSV files above to automatically match transactions and identify exceptions.
      </p>
      <div style={{
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '0.5rem',
        textAlign: 'left',
        backgroundColor: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        fontSize: '0.875rem',
        color: '#475569'
      }}>
        <div>✓ Automatic transaction matching by reference, amount, and date</div>
        <div>✓ Exception detection and reporting</div>
        <div>✓ Export results and audit trail</div>
        <div>✓ Sample data available for testing</div>
      </div>
    </div>
  );
}