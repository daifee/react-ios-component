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

export default class TimePicker extends Component {

	constructor(props, context) {
		super(props, context);

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