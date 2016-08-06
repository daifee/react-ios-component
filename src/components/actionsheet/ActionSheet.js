/**
 * @author haw
 */

import React, {
	PropTypes,
	Component
} from 'react';
import Popup from '../popup';
import Portal from '../portal';
import {classNames} from '../util';
import config from '../util/config';

const prefix = 'actionsheet';

/**
 * Button 操作列表组件（`ActionSheet`）里面的操作按钮组件
 * @param {Object} props 组件所使用的属性
 * @param {string} [props.color]	按钮文案的颜色，默认为主题颜色
 */
function Button(props) {
	const {
		color,
		className,
		children,
		...rest
	} = props;
	let clazz = classNames(`${prefix}-button`, {
		[className]: className,
		[`color-${color}`]: !!color
	});

	return (
		<a className={clazz} {...rest}>{children}</a>
	);
}

/**
 * 按钮组件的属性
 * @type {Object}
 * color: 按钮文案的颜色，默认为主题颜色
 */
Button.propTypes = {
	color: PropTypes.oneOf(config.colors)
};
Button.defaultProps = {
	color: ''
};

/**
 * ActionSheet 操作列表
 * @param {Object} props 组件所使用的属性
 * @param {boolean} props.visible	是否显示操作列表
 * @param {number|string|Object|Array} props.description 操作列表头部的描述组件
 * @param {Object[]} props.buttons 操作按钮配置列表
 * @param {boolean} [props.hasCancelButton=true] 是否有取消按钮
 * @param {function} [props.onCancel] 点击取消按钮触发的事件
 * @param {string|string|Object|Array} [props.cancelText='取消'] 取消按钮的文案
 * @param {function} props.close 关闭操作列表的回调（配合 API 调用来使用，一般不用手动传）
 */
export default function ActionSheet(props) {
	const {
		visible,
		description,
		buttons,
		hasCancelButton,
		onCancel,
		cancelText,
		close,
		className,
		children,
		...rest
	} = props;
	let clazz = classNames(prefix, {
		[className]: className
	});
	let buttonsClazz = classNames(`${prefix}-buttons`);
	let descClazz = classNames(`${prefix}-desc`);
	let buttonEls = buttons.map((btnProps, i) => {
		const onClick = btnProps.onClick;

		btnProps.onClick = (e) => {
			onClick && onClick(e);
			close && close(e);
		}
		return <Button {...btnProps} key={i}/>
	});

	return (
		<Popup 
			visible={visible} 
			close={close} 
			position="bottom"
		>
			<div className={clazz} {...rest}>
				<div className={buttonsClazz}>
					{description ? (
						<span className={descClazz}>{description}</span>
					) : null}
					{buttonEls}
				</div>
				{hasCancelButton ? (
					<div className={buttonsClazz}>
						<Button onClick={(e) => {
							onCancel && onCancel(e);
							close && close();
						}}>{cancelText}</Button>
					</div>
				) : null}
			</div>
		</Popup>
	);
}

/**
 * 操作列表组件属性
 * @type {Object}
 */
ActionSheet.propTypes = {
	visible: PropTypes.bool,
	description: PropTypes.node,
	buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
	hasCancelButton: PropTypes.bool,
	onCancel: PropTypes.func,
	cancelText: PropTypes.node,
	close: PropTypes.func
};

ActionSheet.defaultProps = {
	hasCancelButton: true,
	onCancel: () => {},
	cancelText: '取消'
};

/**
 * 操作列表组件的 API 调用方法
 * @param  {Object} props     @see ActionSheet 组件属性
 * @param  {Node} container 操作列表的容器节点
 */
ActionSheet.show = (props, container) => {
	Portal.show(ActionSheet, props, container);
};