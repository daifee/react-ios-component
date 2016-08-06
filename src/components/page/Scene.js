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

/**
 * Scene 页面切换的动画场景
 * @param {Object} props 组件所使用的属性
 * @param {string} props.animation 场景切换的动画类型，其值是由当前页面路由变化确定的
 * @param {number} [props.timeout] 场景切换时动画的执行时间
 */
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

/**
 * Scene 组件的属性
 * @type {Object}
 * animation: 场景切换的动画类型，其值是由当前页面路由变化确定的
 * timeout: 场景切换时动画的执行时间，默认值为 `400` （单位是毫秒）
 */
Scene.propTypes = {
	animation: PropTypes.oneOf(animations),
	timeout: PropTypes.number
};
Scene.defaultProps = {
	timeout: 400
};