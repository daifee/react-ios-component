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
		confirmText = '确定',
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
		children: confirmText,
		onClick: onConfirm
	}];

	return {
		className: clazz,
		buttons: buttons,
		...rest
	};
}

/**
 * Confirm 确认对话框
 * @param {Object} props 组件所使用的属性
 * @param {boolean} props.visible 是否显示确认对话框
 * @param {PropTypes.node} props.title 确认对话框标题
 * @param {PropTypes.node} props.body 确认对话框内容
 * @param {function} [props.onConfirm] 点击确认按钮触发的事件
 * @param {function} [props.onCancel] 点击取消按钮触发的事件
 * @param {PropTypes.node} [props.confirmText='确定'] 确认按钮的文案
 * @param {PropTypes.node} [props.cancelText='取消'] 取消按钮的文案
 */
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

/**
 * 确认对话框组件的 API 调用方法
 * @param  {Object} props     @see Confirm 组件属性
 * @param  {Node} container 确认对话框的容器节点
 */
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
	confirmText: PropTypes.node,
	cancelText: PropTypes.node
};
// Confirm.defaultProps = {
// 	onConfirm: () => {},
// 	onCancel: () => {},
// 	confirmText: '确定',
// 	cancelText: '取消'
// };