/**
 * @author haw
 */

import React, {
	PropTypes,
	Component
} from 'react';
import Portal from '../portal';
import Popup from '../popup';
import InlineDatePicker from './InlineDatePicker';
import {
	classNames, 
	date2str
	} from '../util';

const prefix = 'picker';

export default class DatePicker extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			selectedDate: props.selectedDate
		};
	}

	componentWillReceiveProps({selectedDate}) {
		this.setState({selectedDate})
	}

	_onCancel = (e) => {
		const {
			close,
			onCancel
		} = this.props;

		close && close();
		onCancel && onCancel(e);
	};

	_onChange = (selectedDate) => {
		const {
			onChange
		} = this.props;

		this.setState({selectedDate});
		onChange && onChange(selectedDate);
	}

	_onConfirm = (e) => {
		const {
			close,
			onConfirm
		} = this.props;

		close && close()
		onConfirm && onConfirm(this.state.selectedDate, e);
	};

	render() {
		let {
			visible,
			title = date2str(this.state.selectedDate),
			confirmText,
			cancelText,
			onConfirm,
			onCancel,
			selectedDate,
			minDate,
			maxDate,
			yearUnit,
			monthUnit,
			dateUnit,
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
					<InlineDatePicker 
						selectedDate={this.state.selectedDate}
						minDate={minDate}
						maxDate={maxDate}
						yearUnit={yearUnit}
						monthUnit={monthUnit}
						dateUnit={dateUnit}
						onChange={this._onChange}
					/>
				</div>
			</Popup>
		);
	}
}

DatePicker.show = (props, container) => {
	Portal.show(DatePicker, props, container);
};

DatePicker.propTypes = {
	selectedDate: PropTypes.instanceOf(Date),
	minDate: PropTypes.instanceOf(Date),
	maxDate: PropTypes.instanceOf(Date),
	yearUnit: PropTypes.string,
	monthUnit: PropTypes.string,
	dateUnit: PropTypes.string,
	onChange: PropTypes.func,
	visible: PropTypes.bool,
	title: PropTypes.node,
	confirmText: PropTypes.node,
	cancelText: PropTypes.node,
	onConfirm: PropTypes.func,
	onCancel: PropTypes.func,
	onChange: PropTypes.func
};

DatePicker.defaultProps = {
	confirmText: '确定',
	cancelText: '取消'
};