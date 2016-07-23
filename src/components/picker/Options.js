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

export default class Options extends Component {

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

				onChange && onChange(index);
				this.setPosition(index);
			});
			
			console.log(this.iScroll);
			this.setPosition();
		}, 0);
	}

	componentDidUpdate() {
		this.iScroll.refresh();
		this.setPosition();
	}

	setPosition(index) {
		const {selectedIndex} = this.props;

		index = index || selectedIndex;
		this.iScroll.scrollTo(0, -index * optionHeight);
	}

	render() {
		const {
			options,
			selectedIndex,
			name,
			className,
			children,
			...rest
		} = this.props;
		let clazz = classNames(prefix);
		let maskClazz = classNames(`${prefix}-mask`);
		let indicatorClazz = classNames(`${prefix}-indicator`);
		let nodes = options.map((item, i) => {
			const text = typeof item === 'object' ? item[name] : item;

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
  name: PropTypes.string,
	selectedIndex: PropTypes.number,
  onChange: PropTypes.func,
	iScrollOptions: PropTypes.object
};

Options.defaultProps = {
	name: 'name',
	selectedIndex: 0
};