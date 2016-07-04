/**
 * @author haw
 */

import React, {
	PropTypes,
	cloneElement
} from 'react';
import {classNames} from '../util';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const prefix = 'scene';
const animations = ['push', 'pop', 'replace', 
	'PUSH', 'POP', 'REPLACE'];

export default function Scene(props) {
	let {
		animation,
		timeout,
		children,
		...rest
	} = props;
	const clazz = classNames(prefix);
	const transitionName = classNames(`${prefix}-${animation.toLowerCase()}`);

	return (
		<ReactCSSTransitionGroup
			component="div"
			transitionName={transitionName}
			transitionEnterTimeout={timeout}
			transitionLeaveTimeout={timeout}
			className={clazz}
			{...rest}
		>
			{children}
		</ReactCSSTransitionGroup>
	);
}

Scene.propTypes = {
	animation: PropTypes.oneOf(animations),
	timeout: PropTypes.number
};
Scene.defaultProps = {
	timeout: 400
};