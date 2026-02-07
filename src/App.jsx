import { useState, useEffect } from 'react'
import Header from './components/Header'
import FileUpload from './components/FileUpload'
import TransactionTable from './components/TransactionTable'
import ReconciliationStats from './components/ReconciliationStats'
import ExportButton from './components/ExportButton'
import SummaryExportButton from './components/SummaryExportButton'
import SampleDataButtons from './components/SampleDataButtons'
import AuditTrail from './components/AuditTrail'
import { matchTransactions } from './utils/matchingLogic'
import './App.css'

function App() {
  const [systemTransactions, setSystemTransactions] = useState([]);
  const [bankTransactions, setBankTransactions] = useState([]);
  const [reconciliation, setReconciliation] = useState(null);
  const [auditEvents, setAuditEvents] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const addAuditEvent = (action) => {
    const timestamp = new Date().toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    setAuditEvents(prev => [...prev, { timestamp, action }]);
  };

  const handleClear = () => {
    setSystemTransactions([]);
    setBankTransactions([]);
    setReconciliation(null);
    setAuditEvents([]);
    addAuditEvent('All data cleared');
  };

  useEffect(() => {
  if (systemTransactions.length > 0 || bankTransactions.length > 0) {
    setIsProcessing(true);
    
    // Small delay to show loading state
    setTimeout(() => {
      const result = matchTransactions(systemTransactions, bankTransactions);
      setReconciliation(result);
      if (result.stats.matchedCount > 0 || result.stats.unmatchedSystemCount > 0) {
        addAuditEvent(`Reconciliation completed: ${result.stats.matchedCount} matched, ${result.stats.unmatchedSystemCount + result.stats.unmatchedBankCount} exceptions`);
      }
      setIsProcessing(false);
    }, 300);
  }
}, [systemTransactions, bankTransactions]);

  return (
    <div>
      <Header />
      <div style={{ padding: '0 2rem', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{ margin: 0, color: '#1e293b' }}>
            Upload Transaction Files
          </h2>
          {(systemTransactions.length > 0 || bankTransactions.length > 0) && (
            <button
              onClick={handleClear}
              style={{
                backgroundColor: '#dc2626',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '500'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#b91c1c'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#dc2626'}
            >
              🗑️ Clear All
            </button>
          )}
        </div>

        <SampleDataButtons />
        
        <FileUpload 
          label="System Transactions (CSV)"
          onFileLoaded={(data) => {
            setSystemTransactions(data);
            addAuditEvent(`Uploaded system transactions (${data.length} records)`);
          }}
        />
        
        <FileUpload
          label="Bank Statement (CSV)"
          onFileLoaded={(data) => {
            setBankTransactions(data);
            addAuditEvent(`Uploaded bank statement (${data.length} records)`);
          }}
        />

        <AuditTrail events={auditEvents} />
        {isProcessing && (
          <div style={{
            backgroundColor: '#fef3c7',
            border: '2px solid #fbbf24',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem',
            textAlign: 'center',
            color: '#92400e',
            fontWeight: '500'
          }}>
            ⏳ Processing reconciliation...
          </div>
        )}



        {reconciliation && (
          <>
            <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#1e293b' }}>
              Reconciliation Results
            </h2>
            
            <ReconciliationStats stats={reconciliation.stats} />

            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}>
              <SummaryExportButton 
                reconciliation={reconciliation}
                auditEvents={auditEvents}
              />
              {reconciliation.matched.length > 0 && (
                <ExportButton
                  data={reconciliation.matched.map(m => m.system)}
                  filename="matched-transactions.csv"
                  label="Export Matched"
                />
              )}
              {reconciliation.unmatchedSystem.length > 0 && (
                <ExportButton
                  data={reconciliation.unmatchedSystem}
                  filename="system-exceptions.csv"
                  label="Export System Exceptions"
                />
              )}
              {reconciliation.unmatchedBank.length > 0 && (
                <ExportButton
                  data={reconciliation.unmatchedBank}
                  filename="bank-exceptions.csv"
                  label="Export Bank Exceptions"
                />
              )}
            </div>

            {reconciliation.matched.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ 
                  color: '#059669', 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  ✓ Matched Transactions ({reconciliation.matched.length})
                </h3>
                <TransactionTable 
                  transactions={reconciliation.matched.map(m => m.system)}
                  title=""
                />
              </div>
            )}

            {reconciliation.unmatchedSystem.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ 
                  color: '#dc2626', 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  ⚠ System Exceptions ({reconciliation.unmatchedSystem.length})
                </h3>
                <TransactionTable 
                  transactions={reconciliation.unmatchedSystem}
                  title=""
                />
              </div>
            )}

            {reconciliation.unmatchedBank.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ 
                  color: '#ea580c', 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  ⚠ Bank Exceptions ({reconciliation.unmatchedBank.length})
                </h3>
                <TransactionTable 
                  transactions={reconciliation.unmatchedBank}
                  title=""
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App