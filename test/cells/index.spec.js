/**
 * @author haw
 */

import {
  Cells,
  CellsTitle,
  Cell,
  CellHeader,
  CellBody,
  CellDesc,
  CellFooter
} from '../../src/components/cell';
import {
  Icon
} from '../../src/components/icon';


describe('Cell 系列组件', () => {
  const wrapper = mount(
    <Cells>
      <Cell>
        <CellHeader>
          <Icon value='settings' />
        </CellHeader>
        <CellBody>body</CellBody>
        <CellFooter>footer</CellFooter>
      </Cell>
      <Cell hasArrow>
        <CellHeader>icon</CellHeader>
        <CellBody>body</CellBody>
        <CellFooter>footer</CellFooter>
      </Cell>
      <Cell component='a'>
        <CellHeader>icon</CellHeader>
        <CellBody>
          <span>Changes</span>
          <CellDesc>desc text</CellDesc>
        </CellBody>
        <CellFooter>footer</CellFooter>
      </Cell>
    </Cells>
  );

  it('test CellsTitle text and class', () => {
    const wrapper = shallow(<CellsTitle>cells</CellsTitle>);

    expect(wrapper.text()).to.equal('cells');
    expect(wrapper.hasClass(`${namespace}cells-title`)).to.equal(true);
  });

  it('test Cells class', () => {
    expect(wrapper.find('div').at(0).hasClass(`${namespace}cells`)).to.equal(true);
  });

  it('test Cell is hasArrow', () => {
    const clazz = `${namespace}cell-arrow`;
    const cellWrappers = wrapper.find('Cell');

    expect(cellWrappers.at(0).find('div').at(0).hasClass(clazz)).to.equal(false);
    expect(cellWrappers.at(1).find('div').at(0).hasClass(clazz)).to.equal(true);
    expect(cellWrappers.at(2).find('a').at(0).hasClass(clazz)).to.equal(true);
  });

  it('test CellHeader class', () => {
    const clazz = `${namespace}cell-header`;
    const headerWrapper = wrapper.find('Cell').at(2).find('CellHeader');

    expect(headerWrapper.find('div').hasClass(clazz)).to.equal(true);
  });

  it('test CellBody and CellDesc class', () => {
    const clazz = `${namespace}cell-body`;
    const bodyWrapper = wrapper.find('Cell').at(2).find('CellBody');

    expect(bodyWrapper.find('div').at(0).hasClass(clazz)).to.equal(true);
    expect(bodyWrapper.find('div').at(1).hasClass(`${namespace}cell-desc`)).to.equal(true);
  });

  it('test CellFooter class', () => {
    const clazz = `${namespace}cell-footer`;
    const footerWrapper = wrapper.find('Cell').at(2).find('CellFooter');

    expect(footerWrapper.find('div').hasClass(clazz)).to.equal(true);
  });
});
