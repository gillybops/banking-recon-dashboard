export default function SampleDataButtons() {
  const downloadSample = (type) => {
    let csvContent;
    let filename;
    
    if (type === 'system') {
      csvContent = `id,date,amount,reference,description
SYS001,2024-02-01,1500.00,REF123,Payment received
SYS002,2024-02-01,250.50,REF124,Service fee
SYS003,2024-02-02,3000.00,REF125,Wire transfer
SYS004,2024-02-02,150.00,REF126,Monthly subscription
SYS005,2024-02-03,750.00,REF127,Refund processed`;
      filename = 'sample-system-transactions.csv';
    } else {
      csvContent = `id,date,amount,reference,description
BNK001,2024-02-01,1500.00,REF123,Incoming payment
BNK002,2024-02-01,250.50,REF124,Fee deduction
BNK003,2024-02-02,3000.00,REF125,Wire received
BNK004,2024-02-03,750.00,REF127,Refund confirmed
BNK005,2024-02-03,500.00,REF999,Unknown transaction`;
      filename = 'sample-bank-statement.csv';
    }
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div style={{
      backgroundColor: '#eff6ff',
      border: '1px solid #bfdbfe',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1.5rem'
    }}>
      {/* CSV Format Section */}
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ 
          fontWeight: '600', 
          color: '#1e40af',
          marginBottom: '0.5rem',
          fontSize: '0.875rem'
        }}>
          📋 CSV File Format Required:
        </div>
        <div style={{
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          backgroundColor: 'white',
          padding: '0.6rem',
          borderRadius: '4px',
          color: '#334155',
          overflowX: 'auto',
          border: '1px solid #bfdbfe'
        }}>
          id,date,amount,reference,description<br/>
          SYS001,2024-02-01,1500.00,REF123,Payment received
        </div>
      </div>

      {/* Sample Data Download Section */}
      <p style={{ 
        margin: '0 0 0.75rem 0', 
        color: '#1e40af',
        fontWeight: '500',
        fontSize: '0.875rem'
      }}>
        💡 Need sample data to test? Download example CSV files:
      </p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={() => downloadSample('system')}
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '0.4rem 0.75rem',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.8rem',
            fontWeight: '500'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
        >
          ⬇ System Transactions
        </button>
        <button
          onClick={() => downloadSample('bank')}
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '0.4rem 0.75rem',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.8rem',
            fontWeight: '500'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
        >
          ⬇ Bank Statement
        </button>
      </div>
    </div>
  );
}