import React, { memo } from 'react';
import styled from 'styled-components';
import Card from 'app/js/common/Card';
import { fromTheme } from 'app/js/utils';

const ContentWrapper = styled.div`
  font-size: 1rem;
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
`;

const Text = styled.div`
  font-size: 2.6rem;
  font-weight: 500;
`;

const Subtitle = styled.div`
  font-size: 1rem;
  color: ${fromTheme('color.gray')};
  display: inline-flex;
`;

const CardBalance = memo(({
  size, title, subtitle, amount,
}) => (
  <Card
    title={title}
    size={size}
    withShadow
  >
    <ContentWrapper>
      <Subtitle>
        {subtitle}
      </Subtitle>
      <Text>
        {amount}
      </Text>
    </ContentWrapper>
  </Card>
));

export default CardBalance;
