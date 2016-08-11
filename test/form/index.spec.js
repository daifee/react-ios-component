/**
 * @author haw
 */

import {
	Checkbox,
	Radio,
	Input,
	Switch,
	Textarea,
	Stepper,
	Slider
} from '../../src/components/form';


describe('Form 表单系列组件', () => {

	it('test Checkbox class', () => {
		// let bool = false;
		// const wrapper = mount(
		// 	<label>
		// 		<Checkbox onChange={() => {
		// 			bool = !bool;
		// 		}} />
		// 	</label>
		// );

		// // wrapper.find('input').simulate('change');
		// wrapper.find('label').simulate('click');
		// console.log(bool);
		const wrapper = shallow(<Checkbox />);

		expect(wrapper.hasClass(`${namespace}checkbox`)).to.equal(true);
	});

	it('test Radio class', () => {
		const wrapper = shallow(<Radio />);

		expect(wrapper.hasClass(`${namespace}radio`)).to.equal(true);
	});

	it('test Input class', () => {
		const wrapper = shallow(<Input />);

		expect(wrapper.hasClass(`${namespace}input`)).to.equal(true);
	});

	it('test Textarea class', () => {
		const wrapper = shallow(<Textarea />);

		expect(wrapper.hasClass(`${namespace}textarea`)).to.equal(true);
	});

	it('test Switch class', () => {
		const wrapper = shallow(<Switch />);

		expect(wrapper.hasClass(`${namespace}switch`)).to.equal(true);
	});

	it('test Stepper', () => {
		let stepValue = 1;
		const wrapper = mount(<Stepper
			value={stepValue}
			min={0}
			max={10}
			onChange={(current, preValue, step) => {
				stepValue = current;
			}}
		/>);
		const btns = wrapper.find('a');

		btns.at(0).simulate('click');
		expect(stepValue).to.equal(0);

		wrapper.setProps({value: 0});
		expect(btns.at(0).hasClass('disabled')).to.equal(true);

		btns.at(1).simulate('click');
		expect(stepValue).to.equal(1);

		wrapper.setProps({value: 10});
		expect(btns.at(1).hasClass('disabled')).to.equal(true);
	});

	it('test Slider', () => {
		let sliderValue = 20;
		const wrapper = mount(
			<Slider 
				value={sliderValue} 
				onChange={(value) => {
					
				}}
			/>
		);

		wrapper.setProps({disabled: true});
		expect(wrapper.find('div').at(0).hasClass('disabled')).to.equal(true);
	});

});