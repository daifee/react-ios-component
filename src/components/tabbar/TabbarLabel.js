/**
 * @author haw
 * 标签栏
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'tabbar-label';

export default function TabBarLabel(props) {
	const {
		label,
		className,
		children,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		[className]: className
	});

	return (
		<div className={clazz} {...rest}>{children || label}</div>
	);
}

TabBarLabel.propTypes = {
	label: PropTypes.string
}