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
let now = new Date();

/**
 * 內联日期选择器
 */
export default class InlineDatePicker extends Component {

  /**
   * 构造函数
   * @param {Object} props 组件所使用的属性
   * @param {Date} [props.selectedDate=new Date()] 当前选中的日期
   * @param {Date} [props.minDate=new Date()] 最小可选择的日期
   * @param {Date} [props.maxDate=new Date()] 最大可选择的日期
   * @param {string} [props.yearUnit=''] 年份的单位文案
   * @param {string} [props.monthUnit=''] 月份的单位文案
   * @param {string} [props.dateUnit=''] 天的单位文案
   * @param {function} props.onChange 选中某一个项时触发的函数回调
   * @param {Object} context
   */
  constructor(props, context) {
    super(props, context);
  }

  _setYear(yearOptions, selectedIndex) {
    const {
      selectedDate
    } = this.props;
    const year = yearOptions[selectedIndex].value;
    const month = selectedDate.getMonth();
    const newDate = copyDate(selectedDate);

    newDate.setFullYear(year);
    this.onChange(adjustDate(newDate, month));
  }

  _setMonth(monthOptions, selectedIndex) {
    const {
      selectedDate
    } = this.props;
    const month = monthOptions[selectedIndex].value - 1;
    const newDate = copyDate(selectedDate);

    newDate.setMonth(month);
    this.onChange(adjustDate(newDate, month));
  }

  _setDate(dateOptions, selectedIndex) {
    const {
      selectedDate
    } = this.props;
    const date = dateOptions[selectedIndex].value;
    const newDate = copyDate(selectedDate);

    newDate.setDate(date);
    this.onChange(newDate);
  }

  onChange(newDate) {
    const {
      onChange
    } = this.props;

    onChange && onChange(newDate);
  }

  render() {
    const {
      selectedDate,
      minDate,
      maxDate,
      yearUnit,
      monthUnit,
      dateUnit,
      className,
      ...rest
    } = this.props;
    const clazz = classNames(prefix, {
      [className]: className
    });
    const yearOptions = createYearOptions(maxDate, minDate, yearUnit);
    const monthOptions = createMonthOptions(maxDate, minDate, selectedDate, monthUnit);
    const dateOptions = createDateOptions(maxDate, minDate, selectedDate, dateUnit);
    const yearIndex = indexOfOptions(selectedDate.getFullYear(), yearOptions);
    const monthIndex = indexOfOptions(getMonth(selectedDate), monthOptions);
    const dateIndex = indexOfOptions(selectedDate.getDate(), dateOptions);

    return (
      <div className={clazz} {...rest}>
        <Options
          selectedIndex={yearIndex}
          options={yearOptions}
          key={'year'}
          onChange={this._setYear.bind(this, yearOptions)}
        />
        <Options
          selectedIndex={monthIndex}
          options={monthOptions}
          key={'month'}
          onChange={this._setMonth.bind(this, monthOptions)}
        />
        <Options
          selectedIndex={dateIndex}
          options={dateOptions}
          key={'date'}
          onChange={this._setDate.bind(this, dateOptions)}
        />
      </div>
    );
  }
}

function adjustDate(newDate, month) {
  if (newDate.getMonth() > month) {
    newDate.setMonth(month);
    newDate.setDate(getTotalDateOfMonth(newDate));
  }

  return newDate;
}

function copyDate(date) {
  return new Date(date.getTime());
}

function createYearOptions(maxDate, minDate, yearUnit) {
  const max = maxDate.getFullYear();
  const min = minDate.getFullYear();

  return generateOptions(max, min, yearUnit);
}

function createMonthOptions(maxDate, minDate, selectedDate, monthUnit) {
  let max = isEqualYear(maxDate, selectedDate) ? getMonth(maxDate) : 12;
  let min = isEqualYear(minDate, selectedDate) ? getMonth(minDate) : 1;

  return generateOptions(max, min, monthUnit);
}

function createDateOptions(maxDate, minDate, selectedDate, dateUnit) {
  let max = isEqualYearMonth(maxDate, selectedDate) ? maxDate.getDate()
    : getTotalDateOfMonth(selectedDate);
  let min = isEqualYearMonth(minDate, selectedDate) ? minDate.getDate() : 1;

  return generateOptions(max, min, dateUnit);
}

function getMonth(date) {
  return date.getMonth() + 1;
}

function getTotalDateOfMonth(date) {
  let newDate = new Date(date.getTime());

  newDate.setDate(1);
  newDate.setMonth(getMonth(newDate));
  newDate.setDate(0);

  return newDate.getDate();
}

function isEqualYear(d1, d2) {
  return d1.getFullYear() === d2.getFullYear();
}

function isEqualYearMonth(d1, d2) {
  return isEqualYear(d1, d2) && (getMonth(d1) === getMonth(d2));
}

InlineDatePicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  yearUnit: PropTypes.string,
  monthUnit: PropTypes.string,
  dateUnit: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

InlineDatePicker.defaultProps = {
  selectedDate: now,
  maxDate: now,
  minDate: now,
  yearUnit: '',
  monthUnit: '',
  dateUnit: ''
};
