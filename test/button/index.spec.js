/**
 * @author haw
 */

import React from 'react';
import {
  expect
} from 'chai';
import {
  shallow,
  mount
} from 'enzyme';
import Button from '../../src/components/button';
import config from '../../src/components/util/config';
const {
  namespace
} = config;


describe('Button 组件', () => {
  const wrapper = shallow(
    <Button
      size='lg'
      color='red'
      fill
    >
      button text
    </Button>
  );

  it('test button size color fill style', () => {
    expect(wrapper.hasClass(`${namespace}button-lg`)).to.equal(true);
    expect(wrapper.hasClass(`${namespace}button-red`)).to.equal(true);
    expect(wrapper.hasClass(`${namespace}button-fill`)).to.equal(true);
  });
});
