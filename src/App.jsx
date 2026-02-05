import { useState } from 'react'
import Header from './components/Header'
import FileUpload from './components/FileUpload'
import TransactionTable from './components/TransactionTable'
import './App.css'

function App() {
  const [systemTransactions, setSystemTransactions] = useState([]);
  const [bankTransactions, setBankTransactions] = useState([]);

  return (
    <div>
      <Header />
      <div style={{ padding: '0 2rem', maxWidth: '1200px', margin: '0 auto' }}>
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

        <TransactionTable 
          transactions={systemTransactions}
          title="System Transactions"
        />

        <TransactionTable 
          transactions={bankTransactions}
          title="Bank Statement"
        />
      </div>
    </div>
  )
}

export default App