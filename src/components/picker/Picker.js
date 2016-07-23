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

export default function Picker(props) {
	const {
		visible,
		hasHeader = true,
		onConfirm,
		onCancel,
		close,
		...rest
	} = props;

	return (
		<Popup 
			visible={visible}
			close={close} 
			position="bottom"
		>
			<InlinePicker 
				onConfirm={(e) => {
					onConfirm && onConfirm(e);
				}}
				hasHeader={hasHeader} 
				{...rest} 
			/>
		</Popup>
	);
}

Picker.show = (props, container) => {
	Portal.show(Picker, props, container);
};

Picker.propTypes = {
	visible: PropTypes.bool,
	title: PropTypes.node,
	okText: PropTypes.node,
	cancelText: PropTypes.node,
	optionsList: PropTypes.array
};