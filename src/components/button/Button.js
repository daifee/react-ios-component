/**
 * @author haw
 * 按钮
 */

import React, {
	PropTypes
} from 'react';
import config from '../util/config';
import {classNames} from '../util';

const prefix = 'button';

/**
 * 按钮
 * @param {Object} props 组件所使用的属性
 * @param {string} [props.component='a'] 按钮的 `html` 标签
 * @param {string} [props.size] 按钮的大小，默认为正常按钮，设置为 `lg` 是大按钮
 * @param {boolean} [props.fill=false] 是否填充背景色
 * @param {boolean} [props.disabled=false] 是否不可用
 * @param {boolean} [props.color] 按钮文案的颜色，默认为主题颜色
 */
export default function Button(props) {
	const {
		component,
		size,
		fill,
		color,
		active,
		disabled,
		className,
		children,
		...rest
	} = props;
	const Component = component;
	let clazz = classNames(prefix, {
		[`${prefix}-${size}`]: !!size,
		[`${prefix}-fill`]: fill,
		[`${prefix}-${color}`]: !!color,
		[`${prefix}-disabled`]: disabled,
		[className]: className,
		active: active ? 'active' : false
	});

	return (
		<Component className={clazz} {...rest}>
			{children}
		</Component>
	);
}

Button.propTypes = {
	component: PropTypes.oneOf(['a', 'button']),
	size: PropTypes.oneOf(['', 'lg']),
	fill: PropTypes.bool,
	disabled: PropTypes.bool,
	color: PropTypes.oneOf(config.colors)
};

Button.defaultProps = {
	component: 'a',
	size: '',
	fill: false,
	disabled: false,
	color: ''
};

