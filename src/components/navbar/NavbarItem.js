/**
 * @author haw
 * 导航栏标题
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'navbar-item';

/**
 * 导航条子项
 * @param {Object} props 组件所使用的属性
 * @param {string} [props.label] 导航条子项显示的内容
 */
export default function NavBarItem(props) {
	const {
		label,
		children,
		className,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		[className]: className
	});

	return (
		<div className={clazz} {...rest}>
			{children || label}
		</div>
	);
}

NavBarItem.propTypes = {
	label: PropTypes.string
};