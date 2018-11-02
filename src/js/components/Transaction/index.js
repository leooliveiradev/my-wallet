import React from 'react';
import TransactionForm from 'app/js/components/TransactionForm';
import { isEmpty, hasKeys } from 'app/js/utils';
import { applyValidators } from 'app/js/utils/form';

export const formValidators = {
  isEmpty,
};

export const messageErrors = {
  isEmpty: 'This field is required!',
};

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
    };
  }

  onSubmit = () => {
    const { amount, description } = this.state;
    const fields = {
      amount: {
        value: amount,
        validators: ['isEmpty'],
      },
      description: {
        value: description,
        validators: ['isEmpty'],
      },
    };

    const errors = applyValidators(fields, formValidators, messageErrors);
    if (!hasKeys(errors)) {
      // add item
    }

    this.setState({
      errors,
    });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { errors } = this.state;
    return (
      <TransactionForm
        errors={errors}
        handleInputChange={this.handleInputChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default Transaction;
