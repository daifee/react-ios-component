/**
 * @author haw
 * 搜索栏
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'searchbar-footer';

/**
 * 搜索栏尾部内容
 * @param {Object} props 组件所使用的属性
 */
export default function SearchBarFooter(props) {
	const {
		children,
		className,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		[className]: className
	});

	return (
		<div className={clazz} {...rest}>{children}</div>
	);
}

