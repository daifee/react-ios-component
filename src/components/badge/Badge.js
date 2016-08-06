/**
 * @author haw
 * 徽章
 */

import React, {
	PropTypes
} from 'react';
import config from '../util/config';
import {classNames} from '../util';

const prefix = 'badge';

/**
 * 徽章
 * @param {Object} props 组件所使用的属性
 * @param {string} [props.bgColor] 徽章的背景颜色，默认为主题颜色
 */
export default function Badge(props) {
	const {
		bgColor,
		children,
		className,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		[`bg-${bgColor}`]: !!bgColor
	});

	return (
		<span className={clazz} {...rest}>
			{children}
		</span>
	);
}

Badge.propTypes = {
	bgColor: PropTypes.oneOf(config.colors)
};

Badge.defaultProps = {
	bgColor: ''
};