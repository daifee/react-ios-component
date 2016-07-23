/**
 * @author haw
 */

import React, {
	PropTypes,
	cloneElement
} from 'react';
import Alert from './Alert';
import {classNames} from '../util';

const prefix = 'alert-confirm';

function decorateProps(props) {
	const {
		onConfirm = () => {},
		onCancel = () => {},
		okText = '确定',
		cancelText = '取消',
		className,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		[className]: className
	});
	let buttons = [{
		children: cancelText,
		onClick: onCancel
	}, {
		children: okText,
		onClick: onConfirm
	}];

	return {
		className: clazz,
		buttons: buttons,
		...rest
	};
}

export default function Confirm(props) {
	const {
		children,
		...alertProps
	} = decorateProps(props);

	return (
		<Alert 
			{...alertProps}
		>
			{children}
		</Alert>
	);
}

Confirm.show = (props) => {
	const alertProps = decorateProps(props);

	Alert.show(alertProps);
};

Confirm.propTypes = {
	visible: PropTypes.bool,
	title: PropTypes.node,
	body: PropTypes.node,
	onConfirm: PropTypes.func,
	onCancel: PropTypes.func,
	okText: PropTypes.node,
	cancelText: PropTypes.node
};
// Confirm.defaultProps = {
// 	onConfirm: () => {},
// 	onCancel: () => {},
// 	okText: '确定',
// 	cancelText: '取消'
// };