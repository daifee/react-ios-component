/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'radio';

/**
 * 单选框
 * @param {Object} props 组件所使用的属性
 */
export default function Radio(props) {
	const {
		className,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		[className]: className
	});

	return (
		<input 
			className={clazz} 
			type="radio"
			{...rest}
		/>
	);
}