import styled from 'styled-components';
import { fromTheme } from 'app/js/utils';

const Button = styled.button.attrs({
  type: ({ type }) => type,
})`
  display: inline-block;
  padding: 0 1.4rem;
  height: 2.8rem;
  border-radius: 4rem;
  border: none;
  outline: none;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  background-color: ${fromTheme('color.primary')};
  font-family: ${fromTheme('fontStyle.primary')};
  font-size: 1.2rem;
  color: #fff;
`;

Button.defaultProps = {
  type: 'button',
};

export default Button;
