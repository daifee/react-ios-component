/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import {classNames, px2rem} from '../util';

const prefix = 'icon-loading';
const defaultSize = 34;

export default function IconLoading(props) {
	const {
		size,
		className,
		style,
		...rest
	} = props;
	const loadingLeafs = createLeafs(prefix);
	let clazz = classNames(prefix, {
		[className]: className
	});
	let rem = px2rem(size);
	let scale = size / defaultSize;
	let scaleStyle = {
		transform: (`scale(${scale})`)
	};
	let newStyle = {
		...style,
		width: `${rem}rem`,
		height: `${rem}rem`
	};

	return (
		<div className={clazz} style={newStyle} {...rest}>
			<div style={scaleStyle}>{loadingLeafs}</div>
		</div>
	);
}

IconLoading.propTypes = {
	size: PropTypes.number
};

IconLoading.defaultProps = {
	size: defaultSize
};

function createLeafs(prefix) {
	const count = 12;
	const leafPrefix = `${prefix}-leaf`;
	const leafs = [];
	let className;

	for(let i = 0; i < count; i++) {
		className = classNames(leafPrefix, `${leafPrefix}-${i}`);
		leafs.push(<i className={className} key={i}></i>);
	}

	return leafs;
}