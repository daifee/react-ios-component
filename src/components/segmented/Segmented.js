/**
 * @author haw
 * 分段控件
 */

import React, {
	PropTypes
} from 'react';
import config from '../util/config';
import {classNames} from '../util';
import Button from '../button';

const prefix = 'segmented';

export default function Segmented(props) {
	const {
		elements,
		size,
		color,
		className,
		children,
		...rest
	} = props;
	let renderNode = children;
	let clazz = classNames(prefix, {
		[`${prefix}-${size}`]: !!size,
		[className]: className
	});

	if(elements) {
		renderNode = elements.map((item, i) => {
			const {
				children,
				...rest
			} = item;

			return (
				<Button {...rest} color={color} key={i}>
					{children}
				</Button>
			);
		});
	}

	return (
		<div className={clazz} {...rest}>
			{renderNode}
		</div>
	);
}

Segmented.propTypes = {
	elements: PropTypes.arrayOf(PropTypes.object),
	color: PropTypes.oneOf(config.colors),
	size: PropTypes.oneOf(['', 'small'])
};
Segmented.defaultProps = {
	color: '',
	size: ''
};