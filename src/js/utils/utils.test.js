import theme from 'app/theme';
import {
  fromTheme, dateFormatter, padStartZero, isEmpty,
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
});
