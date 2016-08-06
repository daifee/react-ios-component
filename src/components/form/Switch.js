/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'switch';

/**
 * 开关按钮
 * @param {Object} props 组件所使用的属性
 */
export default function Switch(props) {
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
			type="checkbox"
			{...rest}
		/>
	);
}