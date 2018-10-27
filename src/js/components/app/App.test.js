import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App specs', () => {
  it('should render App', () => {
    const AppComponent = shallow(<App />);
    expect(AppComponent.html()).toBeDefined();
  });
});
