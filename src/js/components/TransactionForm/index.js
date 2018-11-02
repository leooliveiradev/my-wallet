import React, { memo } from 'react';
import styled from 'styled-components';
import FormField from 'app/js/common/FormField';
import Button from 'app/js/common/Button';

const FormWrapper = styled.form`
  width: 20%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ErrorMessage = styled.span`
  color: red;
  margin-left: 0.4rem;
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
      placeholder="14,40"
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
