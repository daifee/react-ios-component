/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {classNames} from '../util';

const prefix = 'popup';

function ChildContainer(props) {
  return props.children[0] ? props.children[0] : null;
}

export default function Popup(props) {
	let {
		visible,
		close,
		position,
		duration,
		timingFunction,
		transitionName,
		className,
		style,
		onClick,
		children,
		...rest
	} = props;
	let clazz = classNames(`${prefix}-content`, {
		[`${prefix}-${position}`]: !!position,
		className: className
	});
	let newStyle = {
		transitionDuration: `${duration}ms`,
		transitionTimingFunction: timingFunction
	};
	const newTransitionName = classNames(transitionName || `${prefix}`);
	const onPopupClick = (e) => {
		onClick && onClick(e);
		e.stopPropagation();
	};

	return (
		<ReactCSSTransitionGroup
			component={ChildContainer}
			transitionAppearTimeout={duration}
			transitionEnterTimeout={duration}
			transitionLeaveTimeout={duration}
			transitionName={newTransitionName}
			transitionAppear={true}
		>
			{visible ? (
				<div
					className={classNames(prefix)}
					style={newStyle}
					key={'popup'}
					onClick={close}
				>
					<div 
						className={clazz} 
						style={{...newStyle, ...style}}
						onClick={onPopupClick}
						{...rest}
					>
						{children}
					</div>
				</div>
			) : null}
		</ReactCSSTransitionGroup>
	);
}

Popup.propTypes = {
	visible: PropTypes.bool,
	close: PropTypes.func,
	position: PropTypes.oneOf(['center', 'top', 'right', 'bottom', 'left']),
	duration: PropTypes.number,
	timingFunction: PropTypes.string,
	transitionName: PropTypes.oneOf([
		PropTypes.string,
		PropTypes.func
	])
};

Popup.defaultProps = {
	visible: false,
	position: 'center',
	duration: 400,
	timingFunction: 'ease'
};
