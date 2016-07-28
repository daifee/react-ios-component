/**
 * @author haw
 */

import React, {
	PropTypes,
	Component
} from 'react';
import Options from './Options';
import {
	classNames,
	generateOptions,
	indexOfOptions
} from '../util';

const prefix = 'picker-body';

export default class InlineTimePicker extends Component {

	_setHours = (hourOptions, selectedIndex) => {
		const value = hourOptions[selectedIndex].value;

		this.onChange(value, 'hours');
	};

	_setMinutes = (minuteOptions, selectedIndex) => {
		const value = minuteOptions[selectedIndex].value;

		this.onChange(value, 'minutes');
	};

	_setSeconds = (secondOptions, selectedIndex) => {
		const value = secondOptions[selectedIndex].value;

		this.onChange(value, 'seconds');
	};

	onChange(value, key) {
		const {
			onChange,
			selectedTime
		} = this.props;
		let time = parseTime(selectedTime);
		time[key] = value;
		const newTime = formatTime(time);

		onChange && onChange(newTime);
	}

	render() {
		let {
			selectedTime,
			maxTime,
			minTime,
			hourUnit,
			minuteUnit,
			secondUnit,
			className,
			...rest
		} = this.props;
		const clazz = classNames(prefix, {
			[className]: className
		});
		const selectedTimeObj = parseTime(selectedTime);
		const maxTimeObj = parseTime(maxTime);
		const minTimeObj = parseTime(minTime);
		const hourOptions = createHourOptions(maxTimeObj, minTimeObj, hourUnit);
		const minuteOptions = createMinuteOptions(maxTimeObj, minTimeObj, 
			selectedTimeObj, hourUnit);
		const secondOptions = createSecondOptions(maxTimeObj, minTimeObj, 
			selectedTimeObj, hourUnit);
		const hoursIndex = indexOfOptions(selectedTimeObj.hours, hourOptions);
		const minutesIndex = indexOfOptions(selectedTimeObj.minutes, minuteOptions);
		const secondsIndex = indexOfOptions(selectedTimeObj.seconds, secondOptions);

		return (
			<div className={clazz} {...rest}>
				<Options 
					selectedIndex={hoursIndex}
					options={hourOptions} 
					key={'hours'} 
					onChange={this._setHours.bind(this, hourOptions)}
				/>
				<Options 
					selectedIndex={minutesIndex}
					options={minuteOptions} 
					key={'minutes'} 
					onChange={this._setMinutes.bind(this, minuteOptions)}
				/>
				<Options 
					selectedIndex={secondsIndex}
					options={secondOptions} 
					key={'seconds'} 
					onChange={this._setSeconds.bind(this, secondOptions)}
				/>
			</div>
		);
	}
}

function formatTime(timeObj) {
	let hours = add0(timeObj.hours);
	let minutes = add0(timeObj.minutes);
	let seconds = add0(timeObj.seconds);
	
	return `${hours}:${minutes}:${seconds}`;
}

function add0(value) {
	return value < 10 ? `0${value}` : value;
}

function createHourOptions(maxTimeObj, minTimeObj, hourUnit) {
	return generateOptions(maxTimeObj.hours, minTimeObj.hours, hourUnit);
}

function createMinuteOptions(maxTimeObj, minTimeObj, selectedTimeObj, minuteUnit) {
	const max = isEqualHour(maxTimeObj, selectedTimeObj) ? maxTimeObj.minutes : 59;
	const min = isEqualHour(minTimeObj, selectedTimeObj) ? minTimeObj.minutes : 0;

	return generateOptions(max, min, minuteUnit);
}

function createSecondOptions(maxTimeObj, minTimeObj, selectedTimeObj, secondUnit) {
	const max = isEqualHourMinute(maxTimeObj, selectedTimeObj) ? maxTimeObj.minutes : 59;
	const min = isEqualHourMinute(minTimeObj, selectedTimeObj) ? minTimeObj.minutes : 0;

	return generateOptions(max, min, secondUnit);
}

function isEqualHour(t1, t2) {
	return t1.hours === t2.hours;
}

function isEqualHourMinute(t1, t2) {
	return isEqualHour(t1, t2) && t1.minutes === t2.minutes;
}

function parseTime(time) {
	const times = time.split(':');

	return {
		hours: parseInt(times[0]),
		minutes: parseInt(times[1]),
		seconds: parseInt(times[2])
	};
}

InlineTimePicker.propTypes = {
	selectedTime: PropTypes.string.isRequired,
	minTime: PropTypes.string,
	maxTime: PropTypes.string,
	hourUnit: PropTypes.string,
	minuteUnit: PropTypes.string,
	secondUnit: PropTypes.string
};

InlineTimePicker.defaultProps = {
	minTime: '00:00:00',
	maxTime: '23:59:59',
	hourUnit: '',
	minuteUnit: '',
	secondUnit: ''
};