/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'page';

/**
 * Page 页面基本结构
 * @param {Object} props 组件所使用的属性
 * @param {boolean} [props.hasNavBar=false] 页面是否有导航栏 (`NavBar`) 组件
 * @param {boolean} [props.hasTabBar=false] 页面是否有标签栏 (`TabBar`) 组件
 * @param {number} [props.duration=300] 页面的过场动画时间
 * @param {string} [props.timingFunction='ease'] 页面过场动画的过渡函数
 */
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

/**
 * Page 组件所使用的属性
 * @type {Object}
 * hasNavBar: 页面是否有导航栏 (`NavBar`) 组件，默认值为 `false`
 * hasTabBar: 页面是否有标签栏 (`TabBar`) 组件，默认值为 `false`
 * duration: 页面过场动画时间，默认值为 `300`
 * timingFunction: 页面过场动画的过渡函数，默认值为 `ease`
 */
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