/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'checkbox';

export default function Checkbox(props) {
	const {
		className,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		[className]: className
	});

	return (
		<input 
			className={clazz} 
			type="checkbox"
			{...rest}
		/>
	);
}