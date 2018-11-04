import uuidV1 from 'uuid/v1';

// TODO use axios to consume the API and create the mocks
export const getTransactions = () => JSON.parse(localStorage.getItem('transactions'));

export const addTransaction = (newTransaction) => {
  const allTransactions = getTransactions();
  allTransactions.push({ uuid: uuidV1(), ...newTransaction });
  localStorage.setItem(
    'transactions',
    JSON.stringify(allTransactions),
  );
};

export const removeTransaction = (uuid) => {
  const transactions = getTransactions();
  const transactionIndex = transactions.findIndex(t => t.uuid === uuid);
  transactions.splice(transactionIndex, 1);
  localStorage.setItem('transactions', JSON.stringify(transactions));
};

export const initializeStore = () => !localStorage.getItem('transactions') && localStorage.setItem('transactions', JSON.stringify([]));
