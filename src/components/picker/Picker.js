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
		...rest
	} = props;

	return (
		<Popup>
			<InlinePicker {...rest} />
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