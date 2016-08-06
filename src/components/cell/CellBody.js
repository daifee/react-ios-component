/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'cell-body';

/**
 * 表格视图列表项的内容区
 * @param {Object} props 组件所使用的属性
 */
export default function CellBody(props) {
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