/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'alert-button';

export default function AlertFooter(props) {
	const {
		className,
		children,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		[className]: className
	});

	return (
		<a className={clazz} {...rest}>
			{children}
		</a>
	);
} 