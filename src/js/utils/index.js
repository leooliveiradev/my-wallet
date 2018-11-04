import get from 'lodash.get';

export const fromTheme = prop => ({ theme }) => get(theme, prop);

// TODO add polyfll if the provide the support on IE
export const padStartZero = value => String(value).padStart(2, '0');

export const dateFormatter = (date) => {
  const newDate = new Date(date);
  const month = padStartZero(newDate.getMonth() + 1);
  const day = padStartZero(newDate.getDate());
  return `${month}/${day}/${newDate.getFullYear()}`;
};

export const isEmpty = value => value === undefined || value === null || value === '';

export const hasKeys = object => Object.keys(object).length;

export const precise = amount => parseFloat(
  Math.round(amount * 100) / 100,
);

export const getTotalCreditAndDebit = (acc, transaction) => {
  if (transaction.type === 'credit') {
    acc.credit = precise(transaction.amount) + precise(acc.credit);
  } else {
    acc.debit = precise(transaction.amount) + precise(acc.debit);
  }
  return acc;
};

export const calculateTotalOfTransactions = transactions => transactions.reduce(
  getTotalCreditAndDebit,
  { credit: 0, debit: 0 },
);
