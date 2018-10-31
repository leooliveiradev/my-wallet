import React, { Fragment } from 'react';
import styled from 'styled-components';
import ThemeProvider from 'app/js/common/ThemeProvider';
import GlobalStyle from 'app/theme/global';
import List from 'app/js/common/List';
import TransactionItem from 'app/js/components/TransactionItem';
import CardAmount from 'app/js/components/CardAmount';

const transactions = [
  {
    uuid: 'sda56as56s5a',
    description: 'habibs',
    value: '50.00',
    dateOfTransaction: 'Fri Sep 25 2018 09:18:04',
    type: 'credit',
    status: 'pending',
  },
  {
    uuid: 'opop54545',
    description: 'outback',
    value: '200.00',
    dateOfTransaction: 'Fri Oct 25 2018 09:18:04',
    type: 'debit',
    status: 'success',
  },
];

const ListTransactions = styled.li`
  display: flex;
  width: 50%;
`;

const App = () => (
  <ThemeProvider>
    <Fragment>
      <GlobalStyle />
      <CardAmount
        title="Total Amount"
        size="sm"
        amount="220.00"
        subtitle="Current amount"
      />
      <ListTransactions>
        <List
          items={transactions}
          ItemComponent={TransactionItem}
        />
      </ListTransactions>
    </Fragment>
  </ThemeProvider>
);

export default App;
