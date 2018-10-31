import React from 'react';
import Input from 'app/js/common/Input';
import renderer from 'react-test-renderer';

describe('Input snapshot', () => {
  it('should render the Input', () => {
    const component = renderer.create(
      <Input
        type="text"
        onChange={event => console.log(event.target.value)}
        name="transaction"
        placeholder="Transaction"
        rounded
      />,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
