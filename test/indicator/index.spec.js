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
import Indicator from '../../src/components/indicator';
import config from '../../src/components/util/config';
const {
  namespace
} = config;


describe('Indicator 组件', () => {
  let visible = true;
  const wrapper = mount(
    <Indicator
      icon='loading'
      visible={visible}
      timeout={100}
      onClose={() => {
        visible = false;
      }}
    >
      加载中...
    </Indicator>
  );

  it('test Indicator onclose', (done) => {
    setTimeout(() => {
      expect(visible).to.equal(false);
      done();
    }, 110);
  });
});
