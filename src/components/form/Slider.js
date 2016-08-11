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

/**
 * 滑块
 */
export default class Slider extends Component {

  /**
   * 构造函数
   * @param {Object} props 组件所使用的属性
   * @param {number} [props.value=0] 滑块的值
   * @param {number} [props.min=0] 滑块的最小值
   * @param {number} [props.max=100] 滑块的最大值
   * @param {PropTypes.node} [minLabel=0] 最小值的显示文案
   * @param {PropTypes.node} [maxLabel=0] 最大值的显示文案
   * @param {boolean} [props.disabled=false] 是否不可用
   * @param {function} [props.onChange] 滑块滑动改变值时触发的函数回调
   * @param {Object} context
   */
  constructor(props, context) {
    super(props, context);

    this.isInSliding = false;
    this.start = 0;

    /**
     * 组件内部状态值
     * @type {Object}
     * @property {number} state.percent 当前值占滑块的百分比
     */
    this.state = {
      percent: this.caclInitPosition(this.props.value)
    };
  }

  componentWillReceiveProps({value}) {
    if (!this.isInSliding) {
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

    e.stopPropagation();
    e.preventDefault();
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
      minLabel,
      maxLabel,
      disabled,
      className,
      ...rest
    } = this.props;
    const {
      percent
    } = this.state;
    const width = `${percent * 100}%`;
    let clazz = classNames(prefix, {
      [className]: className,
      disabled: disabled ? 'disabled' : ''
    });
    let leftClazz = classNames(`${prefix}-left`);
    let rightClazz = classNames(`${prefix}-right`);
    let barClazz = classNames(`${prefix}-bar`);

    return (
      <div className={clazz} {...rest}>
        <div className={leftClazz}>{minLabel}</div>
        <div className={barClazz} ref='sliderBar'>
          {disabled ? (
            <a
              style={{
                left: width
              }}
            />
          ) : (
            <a
              style={{
                left: width
              }}
              onTouchStart={this._startSlide}
              onTouchMove={this._sliding}
              onTouchEnd={this._endSlide}
            />
          )}
          <span style={{
            width: width
          }} />
        </div>
        <span />
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
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string
};

Slider.defaultProps = {
  value: 0,
  min: 0,
  max: 100,
  minLabel: 0,
  maxLabel: 100,
  disabled: false
};
