/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'textarea';

export default function Textarea(props) {
	const {
		className,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		[className]: className
	});

	return (
		<textarea 
			className={clazz} 
			{...rest}
		></textarea>
	);
}

Textarea.propTypes = {
	defaultValue: PropTypes.string
};

Textarea.defaultProps = {
	defaultValue: undefined
};