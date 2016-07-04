/**
 * @author haw
 * 标签栏
 */

import React, {
	PropTypes
} from 'react';
import config from '../util/config';
import {classNames} from '../util';
import TabbarIcon from './TabbarIcon';
import TabbarLabel from './TabbarLabel';

const prefix = 'tabbar-item';

export default function TabBarItem(props) {
	const {
		icon,
		badge,
		label,
		active,
		linkColor,
		activeColor,
		badgeColor,
		component,
		className,
		children,
		...rest
	} = props;
	const Component = component;
	const theme = active ? activeColor : linkColor;
	let clazz = classNames(prefix, {
		[`color-${theme}`]: !!theme,
		[className]: className
	});
	let labelClazz = classNames('tabbar-label');

	return (
		<Component className={clazz} {...rest}>
			{icon ? (
				<TabbarIcon 
					icon={icon}
					badge={badge}
					badgeColor={badgeColor}
				/>
			) : null}
			{label ? (
				<TabbarLabel>{label}</TabbarLabel>
			) : null}
			{!icon && !label ? children : null}
		</Component>
	);
}

TabBarItem.propTypes = {
	component: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.func
	]),
	linkColor: PropTypes.oneOf(config.colors),
	badgeColor: PropTypes.oneOf(config.colors),
	activeColor: PropTypes.oneOf(config.colors),
	active: PropTypes.bool
};

TabBarItem.defaultProps = {
	component: 'a',
	linkColor: 'gray',
	badgeColor: 'red',
	activeColor: '',
	active: false
};