/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'alert-footer';

/**
 * AlertFooter 警告框尾部组件
 * @param {Object} props 组件所使用的属性
 */
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
		<div className={clazz} {...rest}>
			{children}
		</div>
	);
} 