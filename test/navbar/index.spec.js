/**
 * @author haw
 */

import {
  NavBar,
  NavbarItem
} from '../../src/components/navbar';


describe('NavBar 组件', () => {
  const wrapper = mount(
    <NavBar
      leftElement={'left'}
      rightElement={'right'}
      centerElement={'center'}
    />
  );

  it('test NavBar text and class', () => {
    const items = wrapper.find(`.${namespace}navbar-item`);

    expect(wrapper.find(`.${namespace}navbar`).length).to.equal(1);
    expect(items.at(0).text()).to.equal('left');
    expect(items.at(1).text()).to.equal('center');
    expect(items.at(2).text()).to.equal('right');
  });
});