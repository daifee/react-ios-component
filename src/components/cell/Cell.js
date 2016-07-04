/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'cell';

export default function Cell(props) {
	const {
		hasArrow,
		href,
		component,
		className,
		children,
		...rest
	} = props;
	let Component = href ? 'a' : component;
	let clazz = classNames(prefix, {
		[`${prefix}-arrow`]: Component === 'a' || hasArrow,
		[className]: className
	});

	return (
		<Component className={clazz} {...rest}>
			{children}
		</Component>
	);
}

Cell.propTypes = {
	hasArrow: PropTypes.bool,
	href: PropTypes.string,
	component: PropTypes.oneOf(['a', 'label', 'div'])
};

Cell.defaultProps = {
	component: 'div'
};