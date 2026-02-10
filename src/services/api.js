const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

export const reconciliationAPI = {
  // Save a reconciliation result
  saveReconciliation: async (reconciliationData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/reconciliations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: new Date().toISOString().split('T')[0],
          amount: reconciliationData.stats.matchedCount,
          reference: `RECON-${Date.now()}`,
          description: `Match Rate: ${reconciliationData.stats.matchRate}% | Matched: ${reconciliationData.stats.matchedCount} | Exceptions: ${reconciliationData.stats.unmatchedSystemCount + reconciliationData.stats.unmatchedBankCount}`
        })
      });
      
      if (!response.ok) throw new Error('Failed to save reconciliation');
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  // Get all reconciliations
  getAllReconciliations: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/reconciliations`);
      if (!response.ok) throw new Error('Failed to fetch reconciliations');
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      return [];
    }
  },

  // Get by ID
  getById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/reconciliations/${id}`);
      if (!response.ok) throw new Error('Failed to fetch reconciliation');
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      return null;
    }
  }
};