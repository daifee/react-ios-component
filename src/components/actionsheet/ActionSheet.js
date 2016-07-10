/**
 * @author haw
 */

import React, {
	PropTypes,
	Component
} from 'react';
import Animate from '../animate';
import Popup from '../popup';
import Portal from '../portal';
import {classNames} from '../util';
import config from '../util/config';

const prefix = 'actionsheet';

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

Button.propTypes = {
	color: PropTypes.oneOf(config.colors)
};
Button.defaultProps = {
	color: ''
};

export default function ActionSheet(props) {
	const {
		visible,
		description,
		buttons,
		hasCancelButton,
		onCancelHide,
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
	let onCancel = (e) => {
		onCancelHide && onCancelHide(e);
		close && close();
	};
	let buttonEls = buttons.map((btnProps, i) => {
		const onClick = btnProps.onClick;

		btnProps.onClick = (e) => {
			onClick && onClick(e);
			close && close();
		}
		return <Button {...btnProps} key={i}/>
	});

	return (
		<Popup visible={visible} position="bottom">
			<div className={clazz} {...rest}>
				<div className={buttonsClazz}>
					{description ? (
						<span className={descClazz}>{description}</span>
					) : null}
					{buttonEls}
				</div>
				{hasCancelButton ? (
					<Button onClick={onCancel}>{cancelText}</Button>
				) : null}
			</div>
		</Popup>
	);
}

ActionSheet.propTypes = {
	visible: PropTypes.bool,
	description: PropTypes.node,
	buttons: PropTypes.arrayOf(PropTypes.object),
	hasCancelButton: PropTypes.bool,
	onCancelHide: PropTypes.func,
	cancelText: PropTypes.node,
	close: PropTypes.func
};

ActionSheet.defaultProps = {
	hasCancelButton: true,
	onCancelHide: () => {},
	cancelText: '取消'
};

ActionSheet.show = (props, container) => {
	Portal.show(ActionSheet, props, container);
};