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
import Badge from '../../src/components/badge';
import config from '../../src/components/util/config';
const {
  namespace
} = config;


describe('Badge 组件', () => {
  const wrapper = shallow(<Badge bgColor='red'>badge</Badge>);

  it('test bgColor', () => {
    expect(wrapper.hasClass(`${namespace}bg-red`)).to.equal(true);
  });

  it('test badge text', () => {
    expect(wrapper.text()).to.equal('badge');
  });
});
