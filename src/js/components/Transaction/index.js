import React, { Fragment } from 'react';
import styled from 'styled-components';
import TransactionForm from 'app/js/components/TransactionForm';
import {
  isEmpty, hasKeys, calculateTotalOfTransactions,
} from 'app/js/utils';
import { applyValidators } from 'app/js/utils/form';
import {
  addTransaction, getTransactions, removeTransaction,
} from 'app/js/api';
import TransactionItem from 'app/js/components/TransactionItem';
import List from 'app/js/common/List';

const ListTransactions = styled.li`
  display: flex;
  width: 50%;
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
  type: 'debit',
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
    this.setState({
      items,
      total: calculateTotalOfTransactions(items),
    });
  }

  onSubmit = () => {
    const { amount, description, type } = this.state;
    const errors = applyValidators(
      getFields(amount, description),
      formValidators,
      messageErrors,
    );

    if (!hasKeys(errors)) {
      // TODO when api is ready I need to use chain or async await
      addTransaction({
        amount,
        description,
        type: type || 'debit',
        status: 'pending',
        transactionDate: new Date(),
      });
      const items = getTransactions();
      this.setState({
        ...defaultTransaction,
        items,
        errors,
        total: calculateTotalOfTransactions(items),
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
    this.setState({
      [name]: value,
    });
  }

  deleteTransaction = (event) => {
    // TODO create pipeline here when api is ready
    removeTransaction(event.target.dataset.uuid);
    this.setState({ items: getTransactions() });
  }

  render() {
    const {
      errors, amount, description, type,
      items, total,
    } = this.state;
    return (
      <Fragment>
        <p>
          Total:
          {total}
        </p>
        <TransactionForm
          errors={errors}
          values={{ amount, description, type }}
          handleInputChange={this.handleInputChange}
          onSubmit={this.onSubmit}
        />
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
