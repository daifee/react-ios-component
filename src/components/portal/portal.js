/**
 * @author haw
 */

import React, {
  PropTypes,
  Component,
  cloneElement
} from 'react';
import {
  render
} from 'react-dom';
import {
  createPortalEl,
  getContainer
} from '../util/dom';

/**
 * 为所有弹窗组件提供包裹容器，并控制是否显示
 */
export default class Portal extends Component {

  /**
   * 构造函数
   * @param {Object} props 组件所使用的属性
   * @param {boolean} props.visible 是否显示弹窗
   * @param {Object} context
   */
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: props.visible
    };
  }

  componentWillReceiveProps(nextProps) {
    this._setVisible(nextProps.visible);
  }

  _close = () => {
    this._setVisible(false);
  }

  _setVisible(visible) {
    this.setState({
      visible
    });
  }

  render() {
    let {
      children
    } = this.props;

    if (children) {
      children = cloneElement(children, {
        visible: this.state.visible,
        close: this._close
      });
    }
    return children || null;
  }
}

/**
 * 显示弹窗的 API 调用方法
 * @param {PropTypes.element} Component 弹窗组件
 * @param  {Object} props     @see Component 组件属性
 * @param  {Node} container 弹窗的容器节点
 */
Portal.show = (Component, props, container) => {
  container = getContainer(container);
  Component.portalEl = Component.portalEl || createPortalEl(container);

  return render((
    <Portal visible>
      <Component {...props} />
    </Portal>
  ), Component.portalEl);
};

Portal.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node
};

Portal.defaultProps = {
  visible: false
};
