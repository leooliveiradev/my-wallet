import React, { memo } from 'react';
import styled from 'styled-components';
import FormField from 'app/js/common/FormField';
import Button from 'app/js/common/Button';
import Radio from 'app/js/common/Radio';
import { fromTheme } from 'app/js/utils';

const FormWrapper = styled.form`
  margin-left: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 3.8rem;
  align-items: flex-end;
`;

const ErrorMessage = styled.span`
  color: red;
  margin-left: 0.4rem;
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  label {
    display: flex;
    align-items: center;
    margin-right: 1rem; 
  }
  span {
    height: 100%;
    align-items: center;
    display: flex;
    margin-top: 0.1rem;
    margin-left: 0.4rem;
    color: ${fromTheme('color.gray')}
  }
`;

const TransactionForm = memo(({
  onSubmit, handleInputChange, errors,
  values,
}) => (
  <FormWrapper
    onSubmit={(event) => {
      event.persist();
      event.preventDefault();
      onSubmit(event);
    }}
  >
    <FormField
      rounded
      placeholder="14.40"
      name="amount"
      value={values.amount}
      onChange={handleInputChange}
    />
    {errors.amount && (
      <ErrorMessage>
        {errors.amount}
      </ErrorMessage>
    )}
    <FormField
      rounded
      placeholder="Outback dinner"
      name="description"
      value={values.description}
      onChange={handleInputChange}
    />
    {errors.description && (
      <ErrorMessage>
        {errors.description}
      </ErrorMessage>
    )}
    <Box>
      <label
        htmlFor="debit"
      >
        <Radio
          type="radio"
          name="type"
          value="debit"
          checked={values.type === 'debit'}
          id="debit"
          onChange={handleInputChange}
        />
        <span>
          Debit
        </span>
      </label>
      <label
        htmlFor="credit"
      >
        <Radio
          type="radio"
          value="credit"
          name="type"
          checked={values.type === 'credit'}
          id="credit"
          onChange={handleInputChange}
        />
        <span>
          Credit
        </span>
      </label>
    </Box>
    <ButtonWrapper>
      <Button
        type="submit"
      >
        Add transaction
      </Button>
    </ButtonWrapper>
  </FormWrapper>
));

export default TransactionForm;
