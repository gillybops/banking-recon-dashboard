export function matchTransactions(systemTxns, bankTxns) {
  if (!systemTxns?.length || !bankTxns?.length) {
    return {
      matched: [],
      unmatchedSystem: systemTxns || [],
      unmatchedBank: bankTxns || [],
      stats: {
        totalSystem: systemTxns?.length || 0,
        totalBank: bankTxns?.length || 0,
        matchedCount: 0,
        unmatchedSystemCount: systemTxns?.length || 0,
        unmatchedBankCount: bankTxns?.length || 0,
        matchRate: 0
      }
    };
  }

  const matched = [];
  const unmatchedSystem = [];
  const unmatchedBank = [...bankTxns];

  systemTxns.forEach(sysTxn => {
    const matchIndex = unmatchedBank.findIndex(bankTxn => 
      bankTxn.reference === sysTxn.reference &&
      bankTxn.amount === sysTxn.amount &&
      bankTxn.date === sysTxn.date
    );

    if (matchIndex !== -1) {
      matched.push({
        system: sysTxn,
        bank: unmatchedBank[matchIndex],
        reference: sysTxn.reference
      });
      unmatchedBank.splice(matchIndex, 1);
    } else {
      unmatchedSystem.push(sysTxn);
    }
  });

  const matchRate = systemTxns.length > 0 
    ? Math.round((matched.length / systemTxns.length) * 100) 
    : 0;

  return {
    matched,
    unmatchedSystem,
    unmatchedBank,
    stats: {
      totalSystem: systemTxns.length,
      totalBank: bankTxns.length,
      matchedCount: matched.length,
      unmatchedSystemCount: unmatchedSystem.length,
      unmatchedBankCount: unmatchedBank.length,
      matchRate
    }
  };
}
