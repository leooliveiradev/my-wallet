import { filterItemsByType } from './index';

describe('Transaction', () => {
  it('shall filter items by credit type', () => {
    const filterByType = 'credit';
    const items = [
      { type: 'credit' },
      { type: 'debit' },
      { type: 'credit' },
    ];
    expect(filterItemsByType(items, filterByType)).toHaveLength(2);
  });
  it('shall filter items by debit', () => {
    const filterByType = 'debit';
    const items = [
      { type: 'credit' },
      { type: 'debit' },
      { type: 'credit' },
    ];
    expect(filterItemsByType(items, filterByType)).toHaveLength(1);
  });
  it('shall return all items', () => {
    const items = [
      { type: 'credit' },
      { type: 'debit' },
      { type: 'credit' },
    ];
    expect(filterItemsByType(items)).toHaveLength(3);
  });
});
