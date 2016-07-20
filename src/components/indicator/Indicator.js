/**
 * @author haw
 */

import React, {
	PropTypes,
	Component
} from 'react';
import {
	IconLoading
} from '../icon';
import Popup from '../popup';
import Portal from '../portal';
import {classNames} from '../util';
import config from '../util/config';

const prefix = 'indicator';

export default class Indicator extends Component {

	constructor(props, context) {
		super(props, context);

		this.timer = null;
	}

	componentDidMount() {
		this._delayClose();
	}

	componentDidUpdate(){
		this._delayClose();
	}

	_delayClose() {
		const {
			visible, 
			timeout,
			close
		} = this.props;

		if(visible && timeout) {
			clearTimeout(this.timer);
			this.timer = setTimeout(() => {
				close && close();
			}, timeout);
		}
	}

	render() {
		const {
			icon,
			content,
			visible,
			timeout,
			close,
			className,
			children,
			...rest
		} = this.props;
		let clazz = classNames(prefix, {
			[className]: className
		});

		if(!visible) {
			return null;
		}
		return (
			<div className={clazz} {...rest}>
				{icon ? (
					<div><IconLoading /></div>
				) : null}
				<p>{content || children}</p>
			</div>
		);
	}
}

Indicator.propTypes = {
	icon: PropTypes.node,
	content: PropTypes.node,
	visible: PropTypes.bool,
	timeout: PropTypes.number,
	close: PropTypes.func
};

Indicator.show = (props, container) => {
	props.timeout = props.timeout || 1500;
	Portal.show(Indicator, props, container);
};