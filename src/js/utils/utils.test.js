import theme from 'app/theme';
import { fromTheme } from './index';

describe('utils', () => {
  it('fromTheme - should receive the path and access using this path property on the theme object', () => {
    const color = fromTheme('color.gray')({ theme });
    expect(color).toEqual(theme.color.gray);
  });
});
