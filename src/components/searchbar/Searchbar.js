/**
 * @author haw
 * 搜索栏
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'searchbar';

/**
 * 搜索栏
 * @param {Object} props 组件所使用的属性
 * @param {string} [props.theme] 搜索栏的主题，默认为灰色，可选有 `white`
 */
export default function SearchBar(props) {
	const {
		theme,
		className,
		children,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		[className]: className,
		[theme]: theme
	});

	return (
		<form className={clazz} {...rest}>{children}</form>
	);
}

SearchBar.propTypes = {
	theme: PropTypes.string
};
