export default function ReconciliationStats({ stats }) {
  if (!stats) return null;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
      marginBottom: '2rem'
    }}>
      <StatCard
        title="Match Rate"
        value={`${stats.matchRate}%`}
        color="#059669"
      />
      <StatCard
        title="Matched"
        value={stats.matchedCount}
        color="#0284c7"
      />
      <StatCard
        title="System Exceptions"
        value={stats.unmatchedSystemCount}
        color="#dc2626"
      />
      <StatCard
        title="Bank Exceptions"
        value={stats.unmatchedBankCount}
        color="#ea580c"
      />
    </div>
  );
}

function StatCard({ title, value, color }) {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      borderLeft: `4px solid ${color}`
    }}>
      <div style={{
        fontSize: '0.875rem',
        color: '#64748b',
        marginBottom: '0.5rem'
      }}>
        {title}
      </div>
      <div style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: color
      }}>
        {value}
      </div>
    </div>
  );
}
