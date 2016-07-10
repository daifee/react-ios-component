/**
 * @author haw
 */

import React, {
	Children,
	PropTypes,
	cloneElement
} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {classNames} from '../util';

export default function Animate(props) {
	const {
		component,
		duration,
		timeout,
		timingFunction,
		children,
		...rest
	} = props;
	let style = children.props.style;
	let newStyle = {
		transitionDuration: `${duration}ms`,
		transitionTimingFunction: timingFunction,
		...style
	};

	console.log(children);

	return (
		<ReactCSSTransitionGroup
			component={component}
			transitionEnterTimeout={timeout}
			transitionLeaveTimeout={timeout}
			{...rest}
		>
			{cloneElement(children, {
				style: newStyle
			})}
		</ReactCSSTransitionGroup>
	);
}

Animate.propTypes = {
	component: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func
	]),
	duration: PropTypes.number,
	timeout: PropTypes.number,
	timingFunction: PropTypes.string
};

Animate.defaultProps = {
	component: 'span',
	duration: 300,
	timeout: 3000,
	timingFunction: 'ease'
};