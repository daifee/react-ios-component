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

/**
 * 标签项图标
 * @param {Object} props 组件所使用的属性
 * @param {string} [props.icon] 标签项图标
 * @param {string} [props.badge] 徽章的文案
 * @param {string} [props.badgeColor='red'] 徽章的背景颜色
 */
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