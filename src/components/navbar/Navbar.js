/**
 * @author haw
 * 导航栏标题
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';
import NavBarItem from './NavbarItem';

const prefix = 'navbar';

/**
 * 导航条
 * @param {Object} props 组件所使用的属性
 * @param {PropTypes.node} [props.leftElement] 导航条左边位置的内容
 * @param {PropTypes.node} [props.centerElement] 导航条中间位置的内容
 * @param {PropTypes.node} [props.rightElement] 导航条右边位置的内容
 */
export default function NavBar(props) {
	const {
		leftElement,
		rightElement,
		centerElement,
		children,
		className,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		[className]: className
	});
	let nodes;

	if(!children) {
		nodes = [leftElement, centerElement, rightElement].map((el, i) => {
			return <NavBarItem key={i} />;
		})
	}

	return (
		<div className={clazz} {...rest}>
			{children || nodes}
		</div>
	);
}

NavBar.propTypes = {
	leftElement: PropTypes.node,
	centerElement: PropTypes.node,
	rightElement: PropTypes.node
};