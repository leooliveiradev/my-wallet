import styled from 'styled-components';
import { fromTheme } from 'app/js/utils';

const Input = styled.input.attrs({
  type: ({ type }) => type || 'text',
})`
  width: 26rem;
  height: 2.6rem;
  padding: 0 1.2rem;
  background-color: ${fromTheme('color.secondary')};
  border-radius: ${({ rounded }) => (rounded ? '20px' : '0px')};
  border: solid 1px ${fromTheme('color.lightGray')};
  font-family: ${fromTheme('fontStyle.primary')};
  font-size: 1rem;
  color: ${fromTheme('color.lightGray3')};
  outline: none;
  &::placeholder {
    font-size: 1rem;
    text-transform: capitalize;
    color: ${fromTheme('color.lightGray')};
  }
`;

export default Input;
