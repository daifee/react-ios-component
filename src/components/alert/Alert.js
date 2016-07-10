/**
 * @author haw
 */

import React, {
	PropTypes,
	Component,
	cloneElement
} from 'react';
import Animate from '../animate';
import Popup from '../popup';
import Portal from '../portal';
import AlertHeader from './AlertHeader';
import AlertBody from './AlertBody';
import AlertFooter from './AlertFooter';
import AlertButton from './AlertButton';
import {classNames} from '../util';
import {render} from 'react-dom';

const prefix = 'alert';

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
				<AlertHeader>{title}</AlertHeader>
				<AlertBody>{body}</AlertBody>
				<AlertFooter>
					{buttonEls}
				</AlertFooter>
			</div>
		</Popup>
	);
}

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