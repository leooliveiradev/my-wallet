import React, { memo } from 'react';
import styled from 'styled-components';
import FormField from 'app/js/common/FormField';
import Button from 'app/js/common/Button';

const FormWrapper = styled.div`
  width: 20%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TransactionForm = memo(() => (
  <FormWrapper>
    <FormField
      rounded
      placeholder="0,00"
      name="Amount"
    />
    <FormField
      rounded
      placeholder="Bob's lunch"
      name="Description"
    />
    <ButtonWrapper>
      <Button>
        Add transaction
      </Button>
    </ButtonWrapper>
  </FormWrapper>
));

export default TransactionForm;
