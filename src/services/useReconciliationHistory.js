import { useState, useEffect } from 'react';

export function useReconciliationHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load history from localStorage
  const loadHistory = () => {
    try {
      const stored = localStorage.getItem('reconciliationHistory');
      if (stored) {
        setHistory(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load history:', error);
    }
  };

  // Save new entry to localStorage
  const saveEntry = (reconciliation) => {
    try {
      const newEntry = {
        id: Date.now(),
        timestamp: new Date().toLocaleString('en-US', { 
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }),
        matchRate: reconciliation.stats.matchRate,
        matchedCount: reconciliation.stats.matchedCount,
        unmatchedSystemCount: reconciliation.stats.unmatchedSystemCount,
        unmatchedBankCount: reconciliation.stats.unmatchedBankCount,
        totalSystem: reconciliation.stats.totalSystem,
        totalBank: reconciliation.stats.totalBank,
        data: reconciliation // Full data for re-downloading
      };

      const updated = [newEntry, ...history];
      localStorage.setItem('reconciliationHistory', JSON.stringify(updated));
      setHistory(updated);
      return newEntry;
    } catch (error) {
      console.error('Failed to save entry:', error);
      return null;
    }
  };

  // Delete entry from history
  const deleteEntry = (id) => {
    try {
      const updated = history.filter(entry => entry.id !== id);
      localStorage.setItem('reconciliationHistory', JSON.stringify(updated));
      setHistory(updated);
    } catch (error) {
      console.error('Failed to delete entry:', error);
    }
  };

  // Clear all history
  const clearHistory = () => {
    try {
      localStorage.removeItem('reconciliationHistory');
      setHistory([]);
    } catch (error) {
      console.error('Failed to clear history:', error);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return {
    history,
    loading,
    saveEntry,
    deleteEntry,
    clearHistory,
    loadHistory
  };
}