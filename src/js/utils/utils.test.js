import theme from 'app/theme';
import {
  fromTheme, dateFormatter, padStartZero, isEmpty,
  getTotalCreditAndDebit,
} from 'app/js/utils';

describe('utils', () => {
  it('fromTheme - should receive the path and access using this path property on the theme object', () => {
    const color = fromTheme('color.gray')({ theme });
    expect(color).toEqual(theme.color.gray);
  });

  it('dateFormatter - should receive a string date and return this formatter Month/Day/Year', () => {
    const date = 'Fri Oct 28 2018 09:18:04';
    expect(dateFormatter(date)).toEqual('10/28/2018');
  });

  it('padStartZero - should receive string value and pad it with 0', () => {
    expect(padStartZero(2)).toEqual('02');
  });

  it('isEmpty - should return true when there are no values', () => {
    expect(isEmpty('')).toEqual(true);
    expect(isEmpty(undefined)).toEqual(true);
    expect(isEmpty(null)).toEqual(true);
  });

  it('getTotalCreditAndDebit - receive a total and an object with the amount property and should returns the sum total with this amount', () => {
    const total = getTotalCreditAndDebit(
      { credit: 10.1, debit: 0 },
      { amount: 20.2, type: 'credit' },
    );
    expect(total.credit.toFixed(2)).toBe('30.30');
  });
});
