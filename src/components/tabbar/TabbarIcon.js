/**
 * @author haw
 * 标签栏
 */

import React, {
	PropTypes
} from 'react';
import config from '../util/config';
import {classNames} from '../util';
import Badge from '../badge';
import {Icon} from '../icon';

const prefix = 'tabbar-icon';

export default function TabBarIcon(props) {
	const {
		icon,
		badge,
		badgeColor,
		className,
		children,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		[className]: className
	});

	console.log(props);
	return (
		<div className={clazz} {...rest}>
			{icon ? (
				<Icon value={icon}>
					{badge ? (
						<Badge bgColor={badgeColor}>{badge}</Badge>
					) : null}
				</Icon>
			) : children}
		</div>
	);
}

TabBarIcon.propTypes = {
	icon: PropTypes.string,
	badge: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	badgeColor: PropTypes.oneOf(config.colors)
}

TabBarIcon.defaultProps = {
	badgeColor: 'red'
};