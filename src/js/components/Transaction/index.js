import React from 'react';
import TransactionForm from 'app/js/components/TransactionForm';

const isEmpty = value => value === undefined || value === null || value === '';

const formValidators = {
  isEmpty,
};

const messageErros = {
  isEmpty: 'This field is required!',
};

// Todo make unit test and move to utils
const checkValue = (
  validators, value, currentField,
) => {
  const result = validators.reduce((acc, fnValidator) => {
    const currentValidator = formValidators[fnValidator];
    if (currentValidator(value)) {
      acc[currentField] = messageErros[fnValidator];
    }
    return acc;
  }, {});
  return result;
};

// TODO make unit test move to utils
const applyValidators = (fields) => {
  const result = Object.keys(fields).reduce((acc, currentField) => {
    const { validators, value } = fields[currentField];
    const resultOfValidate = checkValue(validators, value, currentField);
    return { ...acc, ...resultOfValidate };
  }, {});
  return result;
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

    const errors = applyValidators(fields);
    if (Object.keys(errors).length) {
      this.setState({
        errors,
      });
    } else {
      this.setState({
        errors: {},
      });
      // add transaction
    }
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
