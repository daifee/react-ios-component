/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'mask';

export default function Mask(props) {
	const {
		transparent,
		className,
		children,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		[`${prefix}-transparent`]: transparent,
		className: className
	});

	return (
		<div className={clazz} {...rest}>{children}</div>
	);
}

Mask.propTypes = {
	transparent: PropTypes.bool
};

Mask.defaultProps = {
	transparent: false
};
