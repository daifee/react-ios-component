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

/**
 * 搜索栏输入框
 */
export default class SearchBarInput extends Component {

	/**
	 * 构造函数
	 * @param {Object} props 组件所使用的属性
	 * @param {string} [props.type='text'] 输入框类型
	 * @param {boolean} [props.hasFooter=true] 是否有尾部
	 * @param {boolean} [props.hasClear=true] 是否有清除图标
	 * @param {string} [props.placeholder] 输入框 placeholder
	 * @param {function} [props.onBlur] 输入框失焦事件函数
	 * @param {function} [props.onFocus] 输入框激活事件函数
	 * @param {function} [props.onChange] 输入框值改变事件函数
	 * @param {function} [props.onClear] 清楚输入框内容的事件函数
	 * @param {Object} context
	 */
	constructor(props, context) {
		super(props, context);

		/**
		 * 组件内部状态值
		 * @type {Object}
		 * @property {boolean} state.active 当前输入框是否是激活状态
		 */
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

