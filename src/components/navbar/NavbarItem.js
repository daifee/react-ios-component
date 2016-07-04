/**
 * @author haw
 * 导航栏标题
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'navbar-item';

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