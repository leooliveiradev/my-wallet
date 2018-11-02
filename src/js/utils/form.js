export const checkField = (validators, value, currentField, formValidators, messageErrors) => {
  const result = validators.reduce((acc, fnValidator) => {
    const currentValidator = formValidators[fnValidator];
    if (currentValidator(value) && !acc[currentField]) {
      acc[currentField] = messageErrors[fnValidator];
    }
    return acc;
  }, {});
  return result;
};

// TODO make unit test move to utils
export const applyValidators = (fields, formValidators, messageErrors) => {
  const result = Object.keys(fields).reduce((acc, currentField) => {
    const { validators, value } = fields[currentField];
    const resultOfValidate = checkField(
      validators,
      value,
      currentField,
      formValidators,
      messageErrors,
    );
    return { ...acc, ...resultOfValidate };
  }, {});
  return result;
};
