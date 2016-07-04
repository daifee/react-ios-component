/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'page';

export default function Page(props) {
	const {
		hasNavBar,
		hasTabBar,
		duration,
		timingFunction,
		className,
		style,
		children,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		'navbar-fixed': hasNavBar,
		'tabbar-fixed': hasTabBar,
		[className]: className
	});
	let newStyle = {
		style,
		transitionDuration: `${duration}ms`,
		transitionTimingFunction: timingFunction
	};

	return (
		<div className={clazz} style={newStyle} {...rest}>
			{children}
		</div>
	);
}

Page.propTypes = {
	hasNavBar: PropTypes.bool,
	hasTabBar: PropTypes.bool,
	duration: PropTypes.number,
	timingFunction: PropTypes.string
};

Page.defaultProps = {
	hasNavBar: false,
	hasTabBar: false,
	duration: 300,
	timingFunction: 'ease'
};