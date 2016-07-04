/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'icon-';

export default function Icon(props) {
	const {
		value,
		sizeType, 
		size,
		children, 
		className,
		...rest
	} = props;
	let clazz = {
		[prefix + value]: true,
		[prefix + sizeType]: !!sizeType,
		[className]: className
	};
	let style = {};

	if(size) {
		style = {
			width: size,
			height: size,
			fontSize: size
		};
	}

	return (
		<i className={classNames(clazz)} style={style} {...rest}>
			{children}
		</i>
	);
}

Icon.propTypes = {
	value: PropTypes.string.isRequired,
	sizeType: PropTypes.string,
	size: PropTypes.string
};

Icon.defaultProps = {
	sizeType: ''
};