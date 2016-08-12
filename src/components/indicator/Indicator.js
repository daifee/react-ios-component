/**
 * @author haw
 */

import React, {
  PropTypes,
  Component
} from 'react';
import {
  IconLoading
} from '../icon';
import Portal from '../portal';
import {classNames} from '../util';

const prefix = 'indicator';

/**
 * 活动指示器
 */
export default class Indicator extends Component {

  /**
   * 构造函数
   * @param {Object} props 组件所使用的属性
   * @param {PropTypes.node} [props.icon] 指示器要显示的图标
   * @param {PropTypes.node} [props.content] 指示器要显示的内容
   * @param {boolean} [props.visible] 活动指示器是否显示
   * @param {number} [props.timeout] 活动指示器自动关闭的时间
   * @param {function} props.close 关闭指示器的回调（配合 API 调用来使用，一般不用手动传）
   * @param {Object} context
   */
  constructor(props, context) {
    super(props, context);

    this.timer = null;
  }

  componentDidMount() {
    this._delayClose();
  }

  componentDidUpdate() {
    this._delayClose();
  }

  _delayClose() {
    const {
      visible,
      timeout,
      close,
      onClose
    } = this.props;

    if (visible && timeout) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        onClose && onClose();
        close && close();
      }, timeout);
    }
  }

  render() {
    const {
      icon,
      content,
      visible,
      timeout,
      close,
      onClose,
      className,
      children,
      ...rest
    } = this.props;
    let clazz = classNames(prefix, {
      [className]: className
    });

    if (!visible) {
      return null;
    }
    return (
      <div className={clazz} {...rest}>
        {icon ? (
          <div><IconLoading /></div>
        ) : null}
        <p>{content || children}</p>
      </div>
    );
  }
}

Indicator.propTypes = {
  icon: PropTypes.node,
  content: PropTypes.node,
  visible: PropTypes.bool,
  timeout: PropTypes.number,
  close: PropTypes.func,
  onClose: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node
};

/**
 * 活动指示器组件的 API 调用方法
 * @param  {Object} props     @see Indicator 组件属性
 * @param  {Node} container 活动指示器的容器节点
 */
Indicator.show = (props, container) => {
  props.timeout = props.timeout || 1500;
  Portal.show(Indicator, props, container);
};
