export default function TransactionTable({ transactions, title }) {
  if (!transactions || transactions.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
        No transactions loaded
      </div>
    );
  }

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>{title}</h3>
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: 'white',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f1f5f9' }}>
              <th style={tableHeaderStyle}>ID</th>
              <th style={tableHeaderStyle}>Date</th>
              <th style={tableHeaderStyle}>Amount</th>
              <th style={tableHeaderStyle}>Reference</th>
              <th style={tableHeaderStyle}>Description</th>
              <th style={tableHeaderStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={index} style={{
                borderBottom: '1px solid #e2e8f0'
              }}>
                <td style={tableCellStyle}>{txn.id}</td>
                <td style={tableCellStyle}>{txn.date}</td>
                <td style={tableCellStyle}>${txn.amount}</td>
                <td style={tableCellStyle}>{txn.reference}</td>
                <td style={tableCellStyle}>{txn.description}</td>
                <td style={tableCellStyle}>
                  <button
                    onClick={() => copyToClipboard(txn, index)}
                    style={{
                      padding: '0.4rem 0.8rem',
                      backgroundColor: copiedIndex === index ? '#10b981' : '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.375rem',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      transition: 'background-color 0.2s'
                    }}
                  >
                    {copiedIndex === index ? '✓ Copied' : 'Copy'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const tableHeaderStyle = {
  padding: '0.75rem',
  textAlign: 'left',
  fontWeight: '600',
  color: '#475569',
  borderBottom: '2px solid #cbd5e1'
};

const tableCellStyle = {
  padding: '0.75rem',
  color: '#334155'
};