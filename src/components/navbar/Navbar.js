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