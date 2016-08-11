/**
 * @author haw
 */

import Indicator from '../../src/components/indicator';


describe('Indicator 组件', () => {
  let visible = true;
  const wrapper = mount(
    <Indicator 
      icon="loading" 
      visible={visible}
      timeout={100}
      onClose={() => {
        visible = false;
      }}
    >加载中...</Indicator>
  );

  it('test Indicator onclose', (done) => {
    setTimeout(() => {
      expect(visible).to.equal(false);
      done();
    }, 110);
  });
});