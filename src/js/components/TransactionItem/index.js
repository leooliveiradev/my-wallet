import React, { memo } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import { dateFormatter } from 'app/js/utils';

const Wrapper = styled.li`
  display: flex;
  border-radius: ${({ rounded }) => (rounded ? '6px' : '0')};
  margin-top: 0.4rem;
  padding: 0.4rem 0.5rem;
  background: #fff;
  box-shadow: -1px 2px 0px rgba(0,0,0,0), 0 1px 2px rgba(0, 0, 0, 0.10);
`;

const sizes = {
  xs: '10%',
  sm: '20%',
  md: '30%',
};

const Column = styled.div` 
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
  flex-basis: ${({ size }) => sizes[size] || sizes.md};
  align-items: center;
  font-weight: 500;
  font-size: 1.3rem;
`;

const ColumnIcon = styled(Column)`
  padding-left: 1rem;  
  svg {
    width: 2.2rem;
    height: 2.2rem;
    path {
      fill: ${({ type }) => (type === 'credit' ? '#7ffabd' : '#f96666')};
    }
  }
`;

const statusColors = {
  pending: '#ccc',
  success: '#7803ff',
  declined: '#f96666',
};

const Bullet = styled.span`
  width: 1.2rem;
  height: 1.2rem;
  font-size: 1.6rem;
  color: ${({ status }) => statusColors[status]};
`;

const TransactionItem = memo(({
  description, value, transactionDate,
  type, status, deleteTransaction, uuid,
}) => (
  <Wrapper rounded>
    <ColumnIcon
      size="xs"
      type={type}
    >
      <ReactSVG
        title={type}
        src="/src/assets/dollar-symbol.svg"
      />
    </ColumnIcon>
    <Column size="md">
      {description}
    </Column>
    <Column size="md">
      {dateFormatter(transactionDate)}
    </Column>
    <Column size="sm">
      <Bullet
        status={status}
      >
        &#8226;
      </Bullet>
      {status}
    </Column>
    <Column size="xs">
      {value}
    </Column>
    <Column size="xs">
      <button
        type="button"
        data-uuid={uuid}
        onClick={deleteTransaction}
      >
        Remove
      </button>
    </Column>
  </Wrapper>
));

export default TransactionItem;
