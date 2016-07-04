/**
 * @author haw
 * 徽章
 */

import React, {
	PropTypes
} from 'react';
import config from '../util/config';
import {classNames} from '../util';

const prefix = 'badge';

export default function Badge(props) {
	const {
		bgColor,
		children,
		className,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		[`bg-${bgColor}`]: !!bgColor
	});

	return (
		<span className={clazz} {...rest}>
			{children}
		</span>
	);
}

Badge.propTypes = {
	bgColor: PropTypes.oneOf(config.colors)
};

Badge.defaultProps = {
	bgColor: ''
};