/**
 * @author haw
 * 搜索栏
 */

import React, {
	PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'searchbar';

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
