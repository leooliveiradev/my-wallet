import React, { memo } from 'react';
import FormRow from 'app/js/common/FormRow';
import Input from 'app/js/common/Input';

const FormField = memo(props => (
  <FormRow>
    <Input {...props} />
  </FormRow>
));

export default FormField;
