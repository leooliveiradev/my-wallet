import get from 'lodash.get';

export const fromTheme = prop => ({ theme }) => get(theme, prop);
