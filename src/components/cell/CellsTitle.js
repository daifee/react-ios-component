/**
 * @author haw
 * 表格视图
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'cells-title';

export default function CellsTitle(props) {
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