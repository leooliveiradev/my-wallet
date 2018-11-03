import React, { Fragment } from 'react';
import styled from 'styled-components';
import TransactionForm from 'app/js/components/TransactionForm';
import {
  isEmpty, hasKeys, calculateTotalOfTransactions,
  precise,
} from 'app/js/utils';
import { applyValidators } from 'app/js/utils/form';
import {
  addTransaction, getTransactions, removeTransaction,
} from 'app/js/api';
import TransactionItem from 'app/js/components/TransactionItem';
import List from 'app/js/common/List';
import Header from 'app/js/common/Header';
import CardAmount from 'app/js/components/CardAmount';

const ListTransactions = styled.div`
  display: flex;
  padding: 2rem;
`;

export const formValidators = {
  isEmpty,
};

export const messageErrors = {
  isEmpty: 'This field is required!',
};

const defaultTransaction = {
  amount: '',
  description: '',
  type: 'credit',
  status: 'pending',
};

const getFields = (amount, description) => ({
  amount: {
    value: amount,
    validators: ['isEmpty'],
  },
  description: {
    value: description,
    validators: ['isEmpty'],
  },
});

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      description: '',
      type: 'credit',
      errors: {
        amount: '',
        description: '',
      },
      items: [],
      total: 0,
    };
  }

  componentDidMount = () => {
    const items = getTransactions();
    const { debit, credit } = calculateTotalOfTransactions(items);
    this.setState({
      items,
      total: (credit - debit).toFixed(2),
    });
  }

  onSubmit = () => {
    const {
      amount, description, type, items,
    } = this.state;
    const errors = applyValidators(
      getFields(amount, description),
      formValidators,
      messageErrors,
    );

    if (!hasKeys(errors)) {
      // TODO when api is ready I need to use chain or async await
      const { credit, debit } = calculateTotalOfTransactions(items);
      const oldTotal = (credit - debit).toFixed(2);
      const total = (type === 'credit' ? precise(oldTotal) + precise(amount) : precise(oldTotal) - precise(amount)).toFixed(2);

      const finalAmount = amount.replace(/,/g, '.');
      addTransaction({
        amount: parseFloat(Math.round(finalAmount * 100) / 100).toFixed(2),
        description,
        type,
        status: 'pending', // TODO validate with the team how this values should come here
        transactionDate: new Date(),
      });
      this.setState({
        ...defaultTransaction,
        items: getTransactions(),
        errors,
        total,
      });
    } else {
      this.setState({
        errors,
        amount,
        description,
      });
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    let inputValue = value;

    if (name === 'amount') {
      inputValue = value.replace(/[a-z]/gi, '');
    }

    this.setState({
      [name]: inputValue,
    });
  }

  deleteTransaction = (event) => {
    // TODO create pipeline here when api is ready
    removeTransaction(event.target.dataset.uuid);
    const items = getTransactions();
    const { credit, debit } = calculateTotalOfTransactions(items);
    this.setState({
      items,
      total: (credit - debit).toFixed(2),
    });
  }

  render() {
    const {
      errors, amount, description, type,
      items, total,
    } = this.state;
    return (
      <Fragment>
        <Header>
          <CardAmount
            title="Total Amount"
            size="md"
            amount={total}
            subtitle="Current amount"
          />
          <TransactionForm
            errors={errors}
            values={{ amount, description, type }}
            handleInputChange={this.handleInputChange}
            onSubmit={this.onSubmit}
          />
        </Header>
        {items.length ? (
          <ListTransactions>
            <List
              items={items}
              deleteTransaction={this.deleteTransaction}
              ItemComponent={TransactionItem}
            />
          </ListTransactions>
        ) : (
          <p>
            There are no transactions
          </p>
        )}
      </Fragment>
    );
  }
}

export default Transaction;
