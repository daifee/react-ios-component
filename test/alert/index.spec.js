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
import {
	Alert,
	Confirm,
	Prompt
} from '../../src/components/alert';
import config from '../../src/components/util/config';
const {
  namespace
} = config;


describe('Alert 组件', () => {
	let firstNum = 0;
	let secondNum = 0;
	const alert = (<Alert 
		visible={true}
		title="my title" 
		body="测试 body"
		buttons={[
			{
				children: 'first btn',
				onClick: () => {
					firstNum++;
				}
			},
			{
				children: 'second btn',
				onClick: () => {
					secondNum++;
				}
			}
		]}
	/>);

	it('test title and body', () => {
		const wrapper = shallow(alert);

		expect(wrapper.find('AlertHeader').prop('children')).to.equal('my title');
		expect(wrapper.find('AlertBody').prop('children')).to.equal('测试 body');
	});

	it('test first and second btn click', () => {
		const wrapper = mount(alert);
		const buttons = wrapper.find('AlertButton');

		buttons.at(0).simulate('click');
		expect(firstNum).to.equal(1);
		buttons.at(1).simulate('click');
		expect(secondNum).to.equal(1);
	});
});


describe('Confirm 组件', () => {
	let okNum = 0;
	let cancelNum = 0;
	const wrapper = mount(<Confirm 
		visible={true}
		title="my confirm" 
		body="confirm body"
		onConfirm={() => {
			okNum++;
		}}
		onCancel={() => {
			cancelNum++;
		}}
	/>);
	const alertWrapper = wrapper.find('Alert').at(0);

	it('test title and body', () => {
		// const wrapper = shallow(confirm);	// 不可以通过测试
		// const wrapper = mount(confirm);	// 可以通过测试
		// const alertWrapper = wrapper.find('Alert').at(0);

		expect(alertWrapper.find('AlertHeader').prop('children')).to.equal('my confirm');
		expect(alertWrapper.find('AlertBody').prop('children')).to.equal('confirm body');
	});

	it('test first and second btn click', () => {
		// const wrapper = mount(confirm);
		// const alertWrapper = wrapper.find('Alert').at(0);
		const buttons = alertWrapper.find('AlertButton');

		buttons.at(0).simulate('click');
		expect(cancelNum).to.equal(1);
		buttons.at(1).simulate('click');
		expect(okNum).to.equal(1);
	});
});


describe('Prompt 组件', () => {
	let value = 'initial value';
	const wrapper = mount(<Prompt 
		visible={true}
		title="my Prompt" 
		body="Prompt body"
		inputProps={{
			value: value,
			placeholder: 'haha',
			onChange: (e) => {
				value = e.target.value;
			}
		}}
	/>);

	it('test input value change', () => {
		const inputWrapper = wrapper.find('input');
		const input = inputWrapper.get(0);

		input.value = 'last value';
		inputWrapper.simulate('change');
		expect(value).to.equal('last value');
		expect(wrapper.state('value')).to.equal('last value')
	});
});