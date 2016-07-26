/**
 * @author haw
 */

import React, {
	PropTypes,
	Component
} from 'react';
import ReactDOM from 'react-dom';
import Portal from '../portal';
import Popup from '../popup';
import InlinePicker from './InlinePicker';
import {classNames} from '../util';

const prefix = 'picker';

export default class Picker extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			selectedList: props.selectedList
		};
	}

	render() {
		let {
			visible,
			title,
			confirmText,
			cancelText,
			onConfirm,
			onCancel,
			selectedList,
			optionsList,
			onChange,
			close,
			className,
			...rest
		} = this.props;
		const clazz = classNames(prefix, {
			[className]: className
		});
		const headerClazz = classNames(`${prefix}-header`);

		selectedList = this.state.selectedList;
		return (
			<Popup 
				visible={visible}
				close={close} 
				position="bottom"
			>
				<div className={clazz} {...rest}>
					<div className={headerClazz}>
						<a onClick={(e) => {
							close && close();
							onCancel && onCancel(e);
						}}>{cancelText}</a>
						<span>{title}</span>
						<a onClick={(e) => {
							close && close()
							onConfirm && onConfirm(this.state.selectedList, e);
						}}>{confirmText}</a>
					</div>
					<InlinePicker 
						selectedList={selectedList}
						optionsList={optionsList}
						onChange={(selectedList) => {
							this.setState({selectedList});
							onChange && onChange();
						}}
					/>
				</div>
			</Popup>
		);
	}
}

Picker.show = (props, container) => {
	Portal.show(Picker, props, container);
};

Picker.propTypes = {
	selectedList: PropTypes.array.isRequired,
	optionsList: PropTypes.array.isRequired,
	visible: PropTypes.bool,
	title: PropTypes.node,
	confirmText: PropTypes.node,
	cancelText: PropTypes.node,
	onConfirm: PropTypes.func,
	onCancel: PropTypes.func,
	onChange: PropTypes.func
};

Picker.defaultProps = {
	confirmText: '确定',
	cancelText: '取消'
};