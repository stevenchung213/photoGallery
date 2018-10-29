import React from 'react';
import { mount } from 'enzyme';

describe('Jest and Enzyme tests should be functioning', () => {

  test('Confirm Jest is working', () => {
    expect(true).toBe(true);
  });

  test('Confirm Enzyme mount method is working', () => {
    const divTest = <div>testing</div>;
    const response = mount(divTest);
    expect(response.text()).toBe('testing');
  });
  
});
