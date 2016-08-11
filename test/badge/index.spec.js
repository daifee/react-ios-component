/**
 * @author haw
 */

import Badge from '../../src/components/badge';


describe('Badge 组件', () => {
  const wrapper = shallow(<Badge bgColor="red">badge</Badge>);

  it('test bgColor', () => {
    expect(wrapper.hasClass(`${namespace}bg-red`)).to.equal(true);
  });

  it('test badge text', () => {
    expect(wrapper.text()).to.equal('badge');
  });
});