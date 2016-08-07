/**
 * @author haw
 * 搜索栏
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'searchbar-header';

/**
 * 搜索栏尾部头部
 * @param {Object} props 组件所使用的属性
 */
export default function SearchBarHeader(props) {
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

