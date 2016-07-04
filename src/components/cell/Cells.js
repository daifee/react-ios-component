/**
 * @author haw
 * 表格视图
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'cells';

export default function Cells(props) {
	const {
		className,
		children,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		[className]: className
	});

	return (
		<div className={clazz} {...rest}>
			{children}
		</div>
	);
}