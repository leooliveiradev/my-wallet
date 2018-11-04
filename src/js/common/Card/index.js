import React, { memo } from 'react';
import styled from 'styled-components';
import { fromTheme } from 'app/js/utils';

export const sizes = {
  md: '30rem',
};

export const CardWrapper = styled.div`
  width: ${({ size }) => sizes[size]};
  padding: 2rem;
  box-shadow: ${({ withShadow }) => (withShadow ? '2px 4px 8px 0 rgba(46, 61, 73, 0.2)' : 'none')};
  font-family: ${fromTheme('fontStyle.primary')};
  font-size: ${fromTheme('fontSize.small')};
  color: ${fromTheme('color.text')};
  background: ${fromTheme('color.white')};
`;

export const CardContent = styled.div`
  display: flex;
`;

export const CardTitle = styled.h2`
  color: ${fromTheme('color.primary')};
  font-weight: ${fromTheme('fontWeight.semibold')};
  font-size: 1.4rem;
`;

const Card = memo(({
  size, title, children, withShadow,
}) => (
  <CardWrapper
    size={size}
    withShadow={withShadow}
  >
    <CardTitle>
      {title}
    </CardTitle>
    <CardContent>
      {children}
    </CardContent>
  </CardWrapper>
));

export default Card;
