/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'stepper';

export default function Stepper(props) {
	const {
		value,
		min,
		max,
		step,
		onChange,
		className,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		[className]: className
	});
	let cutClazz = classNames(`${prefix}-cut`, {
		disabled: value === min ? 'disabled' : ''
	});
	let addClazz = classNames(`${prefix}-add`, {
		disabled: value === max ? 'disabled' : ''
	});

	return (
		<div className={clazz} {...rest}>
			<a className={cutClazz} onClick={() => {
				let current = value - step;

				if(current >= min) {
					onChange && onChange(current, value, step);
				}
			}}></a>
			<a className={addClazz}  onClick={() => {
				let current = value + step;

				if(current <= max) {
					onChange && onChange(current, value, step);
				}
			}}></a>
		</div>
	);
}

Stepper.propTypes = {
	value: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	onChange: PropTypes.func
};

Stepper.defaultProps = {
	value: 0,
	step: 1,
	min: -Infinity,
	max: Infinity
};