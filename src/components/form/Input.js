/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'input';

export default function Input(props) {
	const {
		type,
		className,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		[className]: className
	});

	return (
		<input 
			className={clazz} 
			{...rest}
		/>
	);
}

Input.propTypes = {
	type: PropTypes.string,
	defaultValue: PropTypes.string
};

Input.defaultProps = {
	type: 'text',
	defaultValue: undefined
};