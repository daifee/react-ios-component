/**
 * @author haw
 * 搜索栏
 */

import React, {
	PropTypes,
	Component
} from 'react';
import {classNames} from '../util';

const prefix = 'searchbar-input';

export default class SearchBarInput extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			active: false
		};
	}

	onBlur(e) {
		const {onBlur} = this.props;

		onBlur && onBlur(e);
		this.setState({
			active: false
		});
	}

	onFocus(e) {
		const {onFocus} = this.props;

		onFocus && onFocus(e);
		this.setState({
			active: true
		});
	}

	onChange(e) {
		const {onChange} = this.props;
		const innerValue = e.target.value;

		onChange && onChange(e, innerValue);
	}

	onClear(e) {
		const {onClear} = this.props;
		const input = this.refs.input;

		input.focus();
		onClear && onClear(e, '');
	}

	render() {
		let {
			placeholder,
			hasFooter,
			hasClear,
			onBlur,
			onFocus,
			onChange,
			onClear,
			children,
			className,
			value,
			...rest
		} = this.props;
		const {active} = this.state;
		let clazz = classNames(prefix, {
			[className]: className,
			'active': active || value ? 'active' : false,
			'has-footer': hasFooter ? 'has-footer' : false
		});
		let placeHolderClazz = classNames('searchbar-placeholder');

		return (
			<div className={clazz}>
				<input 
					{...rest} 
					ref="input"
					value={value}
					onBlur={e => {
						this.onBlur(e);
					}} 
					onFocus={e => {
						this.onFocus(e);
					}}
					onChange={e => {
						this.onChange(e);
					}}
				/>
				<div className={placeHolderClazz}>
					<i></i>
					{value ? null : (
						<span>{placeholder}</span>
					)}
				</div>
				{hasClear ? (
					<a 
						className={value ? 'active' : ''} 
						onClick={e => {
							this.onClear(e);
						}}>
					</a>
				) : null}
			</div>
		);
	}
}

SearchBarInput.propTypes = {
	type: PropTypes.string,
	hasFooter: PropTypes.bool,
	hasClear: PropTypes.bool,
	placeholder: PropTypes.string,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func,
	onChange: PropTypes.func,
	onClear: PropTypes.func
};

SearchBarInput.defaultProps = {
	type: 'text',
	hasFooter: true,
	hasClear: true
};

