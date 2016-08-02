/**
 * @author haw
 */

import React, {
	PropTypes,
	Component
} from 'react';
import {
	classNames
} from '../util';

const prefix = 'slider';

export default class Slider extends Component {

	constructor(props, context) {
		super(props, context);

		this.isInSliding = false;
		this.start = 0;
		this.state = {
			percent: this.caclInitPosition(this.props.value)
		};
	}

	componentWillReceiveProps({value}) {
		if(!this.isInSliding) {
			this.state = {
				percent: this.caclInitPosition(value)
			};
		}
	}

	_startSlide = (e) => {
		const targetTouch = e.targetTouches[0];

		this.start = targetTouch.clientX;
		this.isInSliding = true;
	};

	_sliding = (e) => {
		const changedTouch = e.changedTouches[0];
		this.calcPosition(changedTouch.clientX);
	};

	_endSlide = (e) => {
		const changedTouch = e.changedTouches[0];
		this.calcPosition(changedTouch.clientX);
		
		this.isInSliding = false;
	};

	calcPosition(clientX) {
		const {
			onChange
		} = this.props;
		const sliderBar = this.refs.sliderBar;
		const offsetWidth = sliderBar.offsetWidth;
		const offsetLeft = this.state.percent * offsetWidth;
		const diff = clientX - this.start;
		const distance = offsetLeft + diff;
		let percent = distance / offsetWidth;

		percent = percent < 0 ? 0 : percent;
		percent = percent > 1 ? 1 : percent;
		this.start = clientX;
		this.setState({percent});

		const value = this.caclValue(percent);
		onChange && onChange(value);
	}

	caclInitPosition(value) {
		const {
			min,
			max
		} = this.props;
		const percent = (value - min) / (max - min);

		return percent;
	}

	caclValue(percent) {
		const {
			min,
			max
		} = this.props;

		return percent * (max - min);
	}

	render() {
		const {
			min,
			max,
			minLabel,
			maxLabel,
			step,
			onChange,
			className,
			...rest
		} = this.props;
		const {
			percent
		} = this.state;
		let clazz = classNames(prefix, {
			[className]: className
		});
		let leftClazz = classNames(`${prefix}-left`);
		let rightClazz = classNames(`${prefix}-right`);
		let barClazz = classNames(`${prefix}-bar`);

		return (
			<div className={clazz} {...rest}>
				<div className={leftClazz}>{minLabel}</div>
				<div className={barClazz} ref="sliderBar">
					<a 
						style={{
							left: `${percent * 100}%`
						}}
						onTouchStart={this._startSlide}
						onTouchMove={this._sliding}
						onTouchEnd={this._endSlide}
					></a>
					<span style={{
						width: `${percent * 100}%`
					}}></span>
				</div>
				<span></span>
				<div className={rightClazz}>{maxLabel}</div>
			</div>
		);
	}
}

Slider.propTypes = {
	value: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	minLabel: PropTypes.node,
	maxLabel: PropTypes.node,
	step: PropTypes.number,
	onChange: PropTypes.func
};

Slider.defaultProps = {
	value: 0,
	step: 1,
	min: 0,
	max: 100,
	minLabel: 0,
	maxLabel: 100
};