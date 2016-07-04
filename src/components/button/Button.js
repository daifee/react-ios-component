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

