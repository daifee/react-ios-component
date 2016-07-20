/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'switch';

export default function Switch(props) {
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