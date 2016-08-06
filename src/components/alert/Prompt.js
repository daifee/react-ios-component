/**
 * @author haw
 */

import React, {
	PropTypes,
	Component
} from 'react';
import Confirm from './Confirm';
import Portal from '../portal';
import {classNames} from '../util';

const prefix = 'alert-prompt';

/**
 * 提示输入框
 */
export default class Prompt extends Component {

	/**
	 * 构造函数
	 * @param {Object} props 组件所使用的属性
	 * @param {boolean} props.visible 是否显示确认对话框
	 * @param {PropTypes.node} props.title 确认对话框标题
	 * @param {PropTypes.node} props.body 确认对话框内容
	 * @param {Object} props.inputProps 输入框的属性对象
	 * @param {function} [props.onConfirm] 点击确认按钮触发的事件
	 * @param {function} [props.onCancel] 点击取消按钮触发的事件
	 * @param {PropTypes.node} [props.confirmText='确定'] 确认按钮的文案
	 * @param {PropTypes.node} [props.cancelText='取消'] 取消按钮的文案
	 * @param {Object} context
	 */
	constructor(props, context) {
		super(props, context);

		/**
		 * 组件内部状态值
		 * @type {Object}
		 * @property {string} state.value 输入框当前的值
		 */
		this.state = {
			value: props.inputProps.value || ''
		};
	}

	onChange(e) {
		const onChange = this.props.inputProps.onChange;
		const value = e.target.value;

		onChange && onChange(e, value);
		this.setState({value});
	}
	
	render() {
		const {
			className,
			inputProps,
			...rest
		} = this.props;
		const {value} = this.state;
		let clazz = classNames(prefix, {
			[className]: className
		});

		return (
			<Confirm 
				className={clazz}
				{...rest}
			>
				<div className={classNames('alert-input')}>
					<input 
						{...inputProps} 
						value={value} 
						onChange={(e) => {
							this.onChange(e);
						}}
					/>
				</div>
			</Confirm>
		);
	}
}

/**
 * 提示输入框组件的 API 调用方法
 * @param  {Object} props     @see Prompt 组件属性
 * @param  {Node} container 提示输入框的容器节点
 */
Prompt.show = (props, container) => {
	Portal.show(Prompt, props, container);
};

Prompt.propTypes = {
	visible: PropTypes.bool,
	title: PropTypes.node,
	body: PropTypes.node,
	inputProps: PropTypes.object,
	onConfirm: PropTypes.func,
	onCancel: PropTypes.func,
	confirmText: PropTypes.node,
	cancelText: PropTypes.node
};

Prompt.defaultProps = {
	inputProps: {}
};
