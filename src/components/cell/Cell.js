/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'cell';

/**
 * 表格视图列表项
 * @param {Object} props 组件所使用的属性
 * @param {boolean} [props.hasArrow] 是否有访问箭头
 * @param {string} [props.href] 访问跳转链接
 * @param {string} [props.component='div'] 列表项的 `html` 标签，可选的有 `['a', 'label', 'div']`
 */
export default function Cell(props) {
	const {
		hasArrow,
		href,
		component,
		className,
		children,
		...rest
	} = props;
	let Component = href ? 'a' : component;
	let clazz = classNames(prefix, {
		[`${prefix}-arrow`]: Component === 'a' || hasArrow,
		[className]: className
	});

	return (
		<Component className={clazz} {...rest}>
			{children}
		</Component>
	);
}

Cell.propTypes = {
	hasArrow: PropTypes.bool,
	href: PropTypes.string,
	component: PropTypes.oneOf(['a', 'label', 'div'])
};

Cell.defaultProps = {
	component: 'div'
};