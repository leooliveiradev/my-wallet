import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe('App specs', () => {
  it('should render App', () => {
    const AppComponent = shallow(<App />);
    expect(AppComponent.html()).toBeDefined();
  });
});
