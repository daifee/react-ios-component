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
import ActionSheet from '../../src/components/actionsheet';
import config from '../../src/components/util/config';
const {
  namespace
} = config;


describe('ActionSheet 组件', () => {
	const actionsheet = (<ActionSheet 
		visible={true}
		description="my description" 
		buttons={[
			{
				children: 'ok btn',
				onClick: () => {
					// this.setState({visible: !visible});
				}
			}
		]}
	/>);

	it('测试 description 的值', () => {
		const wrapper = shallow(actionsheet);
		// const buttons = wrapper.find(`.${namespace}actionsheet-button`);
		
		expect(wrapper.find(`.${namespace}actionsheet-desc`).text()).to.equal('my description');
	});

	it('测试按钮的文案', () => {
		const wrapper = mount(actionsheet);
		const buttons = wrapper.find('Button');

		expect(buttons.at(0).prop('children')).to.equal('ok btn');
		expect(buttons.at(1).prop('children')).to.equal('取消');

		// expect(ActionSheet.prototype.componentDidMount.calledOnce).to.equal(true);
	});

	// it('test click cancel button', () => {
	// 	const wrapper = mount(actionsheet);
	// 	const buttons = wrapper.find('Button');

	// 	// console.log(buttons.at(1).find(`.${namespace}actionsheet-button`).text())
	// 	buttons.at(1).find(`.${namespace}actionsheet-button`).at(0).simulate('click');
	// 	// buttons.at(1).simulate('click');
	// 	expect(wrapper.prop('visible')).to.equal(false);
	// });
});
