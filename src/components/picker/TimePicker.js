/**
 * @author haw
 */

import React, {
	PropTypes,
	Component
} from 'react';
import InlineTimePicker from './InlineTimePicker';
import Popup from '../popup';
import Portal from '../portal';
import {
	classNames
} from '../util';

const prefix = 'picker';

/**
 * 时间弹窗选择器
 */
export default class TimePicker extends Component {

	/**
	 * 构造函数
	 * @param {Object} props 组件所使用的属性
	 * @param {string} [props.selectedTime] 当前选中的日期
	 * @param {string} [props.minDate='00:00:00'] 最小可选择的日期
	 * @param {string} [props.maxDate='23:59:59'] 最大可选择的日期
	 * @param {string} [props.hourUnit=''] 小时的单位文案
	 * @param {string} [props.minuteUnit=''] 分钟的单位文案
	 * @param {string} [props.secondUnit=''] 秒的单位文案
	 * @param {boolean} [props.visible] 选择器是否显示
	 * @param {PropTypes.node} [props.title] 选择器标题
	 * @param {PropTypes.node} [props.confirmText='确定'] 确认按钮文案
	 * @param {PropTypes.node} [props.cancelText='取消'] 取消按钮文案
	 * @param {function} [props.onConfirm] 确认按钮的回调函数
	 * @param {function} [props.onCancel] 取消按钮的回调函数
	 * @param {function} props.onChange 选中某一个项时触发的函数回调
	 * @param {Object} context
	 */
	constructor(props, context) {
		super(props, context);

		/**
		 * 组件内部状态值
		 * @type {Object}
		 * @property {Date} state.selectedTime 当前选中的时间
		 */
		this.state = {
			selectedTime: props.selectedTime
		};
	}

	componentWillReceiveProps({selectedTime}) {
		this.setState({selectedTime});
	}

	_onChange = (selectedTime) => {
		const {
			onChange
		} = this.props;

		this.setState({selectedTime});
		onChange && onChange(selectedTime);
	};

	_onCancel = (e) => {
		const {
			close,
			onCancel
		} = this.props;

		close && close();
		onCancel && onCancel(this.state.selectedTime, e);
	};

	_onConfirm = (e) => {
		const {
			close,
			onConfirm
		} = this.props;

		close && close();
		onConfirm && onConfirm(this.state.selectedTime, e);
	};

	render() {
		const {
			visible,
			title = this.state.selectedTime,
			confirmText,
			cancelText,
			onConfirm,
			onCancel,
			selectedTime,
			maxTime,
			minTime,
			hourUnit,
			minuteUnit,
			secondUnit,
			onChange,
			close,
			className,
			...rest
		} = this.props;
		const clazz = classNames(prefix, {
			[className]: className
		});
		const headerClazz = classNames(`${prefix}-header`);

		return (
			<Popup 
				visible={visible}
				close={close} 
				position="bottom"
			>
				<div className={clazz} {...rest}>
					<div className={headerClazz}>
						<a onClick={this._onCancel}>{cancelText}</a>
						<span>{title}</span>
						<a onClick={this._onConfirm}>{confirmText}</a>
					</div>
					<InlineTimePicker 
						selectedTime={this.state.selectedTime}
						minTime={minTime}
						maxTime={maxTime}
						hourUnit={hourUnit}
						minuteUnit={minuteUnit}
						secondUnit={secondUnit}
						onChange={this._onChange}
					/>
				</div>
			</Popup>
		);
	}
}

/**
 * 时间弹窗选择器组件的 API 调用方法
 * @param  {Object} props     @see TimePicker 组件属性
 * @param  {Node} container 时间弹窗选择器的容器节点
 */
TimePicker.show = (props, container) => {
	Portal.show(TimePicker, props, container);
}

TimePicker.propTypes = {
	selectedTime: PropTypes.string,
	minTime: PropTypes.string,
	maxTime: PropTypes.string,
	hourUnit: PropTypes.string,
	minuteUnit: PropTypes.string,
	secondUnit: PropTypes.string,
	onChange: PropTypes.func,
	visible: PropTypes.bool,
	title: PropTypes.node,
	confirmText: PropTypes.node,
	cancelText: PropTypes.node,
	onConfirm: PropTypes.func,
	onCancel: PropTypes.func,
	onChange: PropTypes.func
};

TimePicker.defaultProps = {
	confirmText: '确定',
	cancelText: '取消'
};