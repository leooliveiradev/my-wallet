import React from 'react';
import Button from 'app/js/common/Button';
import renderer from 'react-test-renderer';

describe('Button snapshot', () => {
  it('should render the Button', () => {
    const component = renderer.create(
      <Button>
        Add transaction
      </Button>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
