import React from 'react';
import Card from 'app/js/common/Card';
import renderer from 'react-test-renderer';

describe('Card snapshot', () => {
  it('should render the Card', () => {
    const component = renderer.create(
      <Card
        title="title of transaction"
        size="md"
      >
        <p>
          Card body
        </p>
      </Card>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
