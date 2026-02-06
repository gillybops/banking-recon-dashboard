export default function Header() {
  return (
    <header style={{
      backgroundColor: '#1e3a8a',
      color: 'white',
      padding: '1.5rem',
      marginBottom: '2rem'
    }}>
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>
        Banking Reconciliation Dashboard
      </h1>
      <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>
        Transaction Matching & Exception Management v1.0
      </p>
    </header>
  );
}