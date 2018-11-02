import { messageErrors, formValidators } from 'app/js/components/Transaction';
import {
  checkField, applyValidators,
} from 'app/js/utils/form';

describe('Transaction component tests', () => {
  it('checkValue - receive all validators, the current field and the current value, should return an object where the key is the field name and the value is the message of error related with the function validator', () => {
    const field = { value: null, validators: ['isEmpty'] };
    const resultOfValidate = checkField(
      field.validators,
      field.value,
      'amount',
      formValidators,
      messageErrors,
    );
    expect(resultOfValidate).toMatchObject({ amount: messageErrors.isEmpty });
  });

  it('applyValidators - receive a schema with many fields and apply validators to the value, returns a object with the errors if a field is not valid', () => {
    const fields = {
      amount: {
        value: '',
        validators: ['isEmpty'],
      },
      description: {
        value: '',
        validators: ['isEmpty'],
      },
    };
    expect(applyValidators(fields, formValidators, messageErrors)).toMatchObject({
      amount: messageErrors.isEmpty,
      description: messageErrors.isEmpty,
    });
  });
});
