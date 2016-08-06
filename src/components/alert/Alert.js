/**
 * @author haw
 */

import React, {
	PropTypes,
	Component,
	cloneElement
} from 'react';
import Popup from '../popup';
import Portal from '../portal';
import AlertHeader from './AlertHeader';
import AlertBody from './AlertBody';
import AlertFooter from './AlertFooter';
import AlertButton from './AlertButton';
import {classNames} from '../util';
import {render} from 'react-dom';

const prefix = 'alert';

/**
 * Alert 警告框
 * @param {Object} props 组件所使用的属性
 * @param {boolean} props.visible 是否显示警告框
 * @param {PropTypes.node} props.title 警告框标题
 * @param {PropTypes.node} props.body 警告框内容
 * @param {Object[]} props.buttons 警告框按钮配置列表
 * @param {function} props.close 关闭警告框的回调（配合 API 调用来使用，一般不用手动传）
 */
export default function Alert(props) {
	const {
		visible,
		title,
		body,
		buttons,
		close,
		className,
		children,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		[className]: className
	});
	const buttonEls = buttons.map((btnProps, i) => {
		const onClick = btnProps.onClick;

		btnProps.onClick = (e) => {
			const bool = onClick && onClick(e);

			if(!bool) {
				close && close();
			}
		}
		return (
			<AlertButton {...btnProps} key={i} />
		);
	});

	return (
		<Popup visible={visible}>
			<div className={clazz} {...rest}>
				{title ? (
					<AlertHeader>{title}</AlertHeader>
				) : null}
				{body ? (
					<AlertBody>{body}</AlertBody>
				) : null}
				{children}
				<AlertFooter>
					{buttonEls}
				</AlertFooter>
			</div>
		</Popup>
	);
}

/**
 * 警告框组件的 API 调用方法
 * @param  {Object} props     @see Alert 组件属性
 * @param  {Node} container 警告框的容器节点
 */
Alert.show = (props, container) => {
	Portal.show(Alert, props, container);
};

Alert.propTypes = {
	visible: PropTypes.bool,
	title: PropTypes.node,
	body: PropTypes.node,
	buttons: PropTypes.arrayOf(PropTypes.object),
	close: PropTypes.func
};