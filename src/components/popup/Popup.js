/**
 * @author haw
 */

import React, {
  PropTypes
} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {classNames} from '../util';

const prefix = 'popup';

function ChildContainer(props) {
  return props.children[0] ? props.children[0] : null;
}

/**
 * 弹窗组件，本身并不包含内容，但是其他弹窗相关的组件都依赖该组件和 `Portal` 组件实现弹窗效果
 * @param {Object} props 组件所使用的属性
 * @param {boolean} [props.visible=false] 弹窗是否显示
 * @param {function} [props.close] 控制弹窗关闭的函数，由 `Portal` 组件传进来，一般不用手动指定，不传的话点击弹窗组件阴影的地方不会自动关闭弹窗
 * @param {string} [props.position='center'] 弹窗里内容的位置
 * @param {number} [props.duration=400] 弹窗的动画持续时间
 * @param {string} [props.timingFunction='ease'] 动画过度函数
 * @param {string|function} [props.transitionName] 动画过度名称，传给`ReactCSSTransitionGroup` 使用
 */
export default function Popup(props) {
  let {
    visible,
    close,
    position,
    duration,
    timingFunction,
    transitionName,
    className,
    style,
    onClick,
    children,
    ...rest
  } = props;
  let clazz = classNames(`${prefix}-content`, {
    [`${prefix}-${position}`]: !!position,
    className: className
  });
  let newStyle = {
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFunction
  };
  const newTransitionName = classNames(transitionName || `${prefix}`);
  const onPopupClick = (e) => {
    onClick && onClick(e);
    e.stopPropagation();
  };

  return (
    <ReactCSSTransitionGroup
      component={ChildContainer}
      transitionAppearTimeout={duration}
      transitionEnterTimeout={duration}
      transitionLeaveTimeout={duration}
      transitionName={newTransitionName}
      transitionAppear
    >
      {visible ? (
        <div
          className={classNames(prefix)}
          style={newStyle}
          key={'popup'}
          onClick={close}
        >
          <div
            className={clazz}
            style={{...newStyle, ...style}}
            onClick={onPopupClick}
            {...rest}
          >
            {children}
          </div>
        </div>
      ) : null}
    </ReactCSSTransitionGroup>
  );
}

Popup.propTypes = {
  visible: PropTypes.bool,
  close: PropTypes.func,
  position: PropTypes.oneOf(['center', 'top', 'right', 'bottom', 'left']),
  duration: PropTypes.number,
  timingFunction: PropTypes.string,
  transitionName: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.func
  ]),
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Popup.defaultProps = {
  visible: false,
  position: 'center',
  duration: 400,
  timingFunction: 'ease'
};
