/**
 * @author haw
 */

import React, {
	PropTypes,
	Component
} from 'react';
import Confirm from './Confirm';
import Portal from '../portal';
import {classNames} from '../util';

const prefix = 'alert-prompt';

export default class Prompt extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			value: props.inputProps.value || ''
		};
	}

	onChange(e) {
		const onChange = this.props.inputProps.onChange;
		const value = e.target.value;

		onChange && onChange(e, value);
		this.setState({value});
	}
	
	render() {
		const {
			className,
			inputProps,
			...rest
		} = this.props;
		const {value} = this.state;
		let clazz = classNames(prefix, {
			[className]: className
		});

		return (
			<Confirm 
				className={clazz}
				{...rest}
			>
				<div className={classNames('alert-input')}>
					<input 
						{...inputProps} 
						value={value} 
						onChange={(e) => {
							this.onChange(e);
						}}
					/>
				</div>
			</Confirm>
		);
	}
}

Prompt.show = (props, container) => {
	Portal.show(Prompt, props, container);
};

Prompt.propTypes = {
	visible: PropTypes.bool,
	title: PropTypes.node,
	body: PropTypes.node,
	inputProps: PropTypes.object,
	onConfirm: PropTypes.func,
	onCancel: PropTypes.func,
	confirmText: PropTypes.node,
	cancelText: PropTypes.node
};

Prompt.defaultProps = {
	inputProps: {}
};
