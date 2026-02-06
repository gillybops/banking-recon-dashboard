import { useState, useEffect } from 'react'
import Header from './components/Header'
import FileUpload from './components/FileUpload'
import TransactionTable from './components/TransactionTable'
import ReconciliationStats from './components/ReconciliationStats'
import { matchTransactions } from './utils/matchingLogic'
import './App.css'
import ExportButton from './components/ExportButton'

function App() {
  const [systemTransactions, setSystemTransactions] = useState([]);
  const [bankTransactions, setBankTransactions] = useState([]);
  const [reconciliation, setReconciliation] = useState(null);

  useEffect(() => {
    if (systemTransactions.length > 0 || bankTransactions.length > 0) {
      const result = matchTransactions(systemTransactions, bankTransactions);
      setReconciliation(result);
    }
  }, [systemTransactions, bankTransactions]);

  return (
    <div>
      <Header />
      <div style={{ padding: '0 2rem', maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#1e293b' }}>
          Upload Transaction Files
        </h2>
        
        <FileUpload 
          label="System Transactions (CSV)"
          onFileLoaded={setSystemTransactions}
        />
        
        <FileUpload 
          label="Bank Statement (CSV)"
          onFileLoaded={setBankTransactions}
        />

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
