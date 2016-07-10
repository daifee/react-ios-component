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
		position,
		duration,
		timingFunction,
		className,
		style,
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
	const transitionName = classNames(`${prefix}`);

	return (
		<ReactCSSTransitionGroup
			component={ChildContainer}
			transitionAppearTimeout={duration}
			transitionEnterTimeout={duration}
			transitionLeaveTimeout={duration}
			transitionName={transitionName}
			transitionAppear={true}
		>
			{visible ? (
				<div
					className={classNames(prefix)}
					style={newStyle}
					key={'popup'}
				>
					<div 
						className={clazz} 
						style={{...newStyle, ...style}}
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
	position: PropTypes.oneOf(['center', 'top', 'right', 'bottom', 'left']),
	duration: PropTypes.number,
	timingFunction: PropTypes.string
};

Popup.defaultProps = {
	visible: false,
	position: 'center',
	duration: 400,
	timingFunction: 'ease'
};
