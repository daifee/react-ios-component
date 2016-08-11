/**
 * @author haw
 */

import Button from '../../src/components/button';


describe('Button 组件', () => {
  const wrapper = shallow(<Button
    size="lg"
    color="red"
    fill={true}
  >button text</Button>);

  it('test button size color fill style', () => {
    expect(wrapper.hasClass(`${namespace}button-lg`)).to.equal(true);
    expect(wrapper.hasClass(`${namespace}button-red`)).to.equal(true);
    expect(wrapper.hasClass(`${namespace}button-fill`)).to.equal(true);
  });
});