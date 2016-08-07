/**
 * @author haw
 */

import React, {
	PropTypes,
	Component
} from 'react';
import ReactDOM from 'react-dom';
import IScroll from 'iscroll/build/iscroll-probe';
import {classNames} from '../util';

const prefix = 'options';
const optionHeight = 34;

/**
 * 单选择器
 */
export default class Options extends Component {

	/**
	 * 构造函数
	 * @param {Object} props 组件所使用的属性
	 * @param {Object[]|string[]|number[]} props.options 进行选择的数据列表
	 * @param {string} [props.labelName='name'] 当可选择的数据列表的项是对象(obj)时，`obj[labelName]` 就是选择器显示的文案
	 * @param {number} [props.selectedIndex=0] 当前选中的数据列表项的下标
	 * @param {function} props.onChange 选中某一个项时触发的函数回调
	 * @param {Object} [props.iScrollOptions] `iscroll` 的配置对象
	 * @param {Object} context
	 */
	constructor(props, context) {
		super(props, context);

		this.iScroll = null;
	}

	componentDidMount() {
		const {
			onChange,
			iScrollOptions
		} = this.props;
		const wraper = this.refs.wraper;

		setTimeout(() => {
			this.iScroll = new IScroll(wraper, {
				probeType: 2,
				...iScrollOptions
			});

			this.iScroll.on('scrollEnd', () => {
				const index = Math.round(-this.iScroll.y / optionHeight);

				onChange && onChange(Math.abs(index));
				// this.setPosition(index, 100);
			});
			
			this.setPosition();
		}, 0);
	}

	componentDidUpdate() {
		setTimeout(() => {
			this.iScroll.refresh();
			this.setPosition();
		}, 0);
	}

	componentWillUnmount() {
		this.iScroll.destroy();
		this.iScroll = null;
	}

	setPosition(index, time = 0) {
		const {selectedIndex} = this.props;

		index = index || selectedIndex;
		this.iScroll.scrollTo(0, -index * optionHeight, time);
	}

	render() {
		const {
			options,
			selectedIndex,
			labelName,
			className,
			children,
			...rest
		} = this.props;
		const clazz = classNames(prefix);
		const maskClazz = classNames(`${prefix}-mask`);
		const indicatorClazz = classNames(`${prefix}-indicator`);
		let nodes = options.map((item, i) => {
			const text = typeof item === 'object' ? item[labelName] : item;

			return (
				<li key={i + text}>{text}</li>
			);
		});

		nodes.unshift(<li key="headholder"></li>);
		nodes.push(<li key="postholder"></li>);

		return (
			<div 
				ref="wraper"
				className={clazz}
				{...rest}
			>
				<ul>{nodes}</ul>
				<div className={maskClazz}></div>
				<div className={indicatorClazz}></div>
			</div>
		);
	}
}

Options.propTypes = {
  options: PropTypes.array.isRequired,
  labelName: PropTypes.string,
	selectedIndex: PropTypes.number,
  onChange: PropTypes.func,
	iScrollOptions: PropTypes.object
};

Options.defaultProps = {
	labelName: 'name',
	selectedIndex: 0
};