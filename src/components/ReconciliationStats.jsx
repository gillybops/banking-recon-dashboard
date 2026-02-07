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
    <div 
      style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        borderLeft: `4px solid ${color}`,
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'default'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
      }}
    >
      <div style={{
        fontSize: '0.875rem',
        color: '#64748b',
        marginBottom: '0.5rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        fontWeight: '600'
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