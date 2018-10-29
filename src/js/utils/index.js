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
