/**
 * @author haw
 */

import React, {
  PropTypes,
  Component
} from 'react';
import Portal from '../portal';
import Popup from '../popup';
import InlineDatePicker from './InlineDatePicker';
import {
  classNames,
  date2str
  } from '../util';

const prefix = 'picker';

/**
 * 日期弹窗选择器
 */
export default class DatePicker extends Component {

  /**
   * 构造函数
   * @param {Object} props 组件所使用的属性
   * @param {Date} [props.selectedDate=new Date()] 当前选中的日期
   * @param {Date} [props.minDate=new Date()] 最小可选择的日期
   * @param {Date} [props.maxDate=new Date()] 最大可选择的日期
   * @param {string} [props.yearUnit=''] 年份的单位文案
   * @param {string} [props.monthUnit=''] 月份的单位文案
   * @param {string} [props.dateUnit=''] 天的单位文案
   * @param {boolean} [props.visible] 选择器是否显示
   * @param {PropTypes.node} [props.title] 选择器标题
   * @param {PropTypes.node} [props.confirmText='确定'] 确认按钮文案
   * @param {PropTypes.node} [props.cancelText='取消'] 取消按钮文案
   * @param {function} [props.onConfirm] 确认按钮的回调函数
   * @param {function} [props.onCancel] 取消按钮的回调函数
   * @param {function} props.onChange 选中某一个项时触发的函数回调
   * @param {Object} context
   */
  constructor(props, context) {
    super(props, context);

    /**
     * 组件内部状态值
     * @type {Object}
     * @property {Date} state.selectedDate 当前选中的日期
     */
    this.state = {
      selectedDate: props.selectedDate
    };
  }

  componentWillReceiveProps({selectedDate}) {
    this.setState({selectedDate});
  }

  _onCancel = (e) => {
    const {
      close,
      onCancel
    } = this.props;

    close && close();
    onCancel && onCancel(this.state.selectedDate, e);
  };

  _onChange = (selectedDate) => {
    const {
      onChange
    } = this.props;

    this.setState({selectedDate});
    onChange && onChange(selectedDate);
  };

  _onConfirm = (e) => {
    const {
      close,
      onConfirm
    } = this.props;

    close && close();
    onConfirm && onConfirm(this.state.selectedDate, e);
  };

  render() {
    let {
      visible,
      title = date2str(this.state.selectedDate),
      confirmText,
      cancelText,
      onConfirm,
      onCancel,
      selectedDate,
      minDate,
      maxDate,
      yearUnit,
      monthUnit,
      dateUnit,
      onChange,
      close,
      className,
      ...rest
    } = this.props;
    const clazz = classNames(prefix, {
      [className]: className
    });
    const headerClazz = classNames(`${prefix}-header`);

    return (
      <Popup
        visible={visible}
        close={close}
        position='bottom'
      >
        <div className={clazz} {...rest}>
          <div className={headerClazz}>
            <a onClick={this._onCancel}>{cancelText}</a>
            <span>{title}</span>
            <a onClick={this._onConfirm}>{confirmText}</a>
          </div>
          <InlineDatePicker
            selectedDate={this.state.selectedDate}
            minDate={minDate}
            maxDate={maxDate}
            yearUnit={yearUnit}
            monthUnit={monthUnit}
            dateUnit={dateUnit}
            onChange={this._onChange}
          />
        </div>
      </Popup>
    );
  }
}

/**
 * 日期弹窗选择器组件的 API 调用方法
 * @param  {Object} props     @see DatePicker 组件属性
 * @param  {Node} container 日期弹窗选择器的容器节点
 */
DatePicker.show = (props, container) => {
  Portal.show(DatePicker, props, container);
};

DatePicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  yearUnit: PropTypes.string,
  monthUnit: PropTypes.string,
  dateUnit: PropTypes.string,
  visible: PropTypes.bool,
  title: PropTypes.node,
  confirmText: PropTypes.node,
  cancelText: PropTypes.node,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  className: PropTypes.string,
  close: PropTypes.func
};

DatePicker.defaultProps = {
  confirmText: '确定',
  cancelText: '取消'
};
