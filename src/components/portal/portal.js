/**
 * @author haw
 */

import React, {
	PropTypes,
	Component,
	cloneElement
} from 'react';
import ReactDom, {
	render
} from 'react-dom';
import {
	createPortalEl,
	getContainer
} from '../util/dom';

export default class Portal extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			visible: props.visible
		};
	}

	componentWillReceiveProps(nextProps) {
		this._setVisible(nextProps.visible);
	}

	close() {
		this._setVisible(false);
	}

	_setVisible(visible) {
		this.setState({
			visible
		});
	}

	render() {
		let {
			children
		} = this.props;

		if(children) {
			children = cloneElement(children, {
				visible: this.state.visible,
				close: this.close.bind(this)
			});
		}
		return children || null;
	}
}

Portal.show = (Component, props, container) => {
	container = getContainer(container);
	Component.portalEl = Component.portalEl || createPortalEl(container);

	return render((
		<Portal 
			visible={true}
		>
			<Component {...props} />
		</Portal>
	), Component.portalEl);
};

Portal.propTypes = {
	visible: PropTypes.bool
};

Portal.defaultProps = {
	visible: false
};