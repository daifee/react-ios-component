/**
 * @author haw
 * 分段控件
 */

import React, {
  PropTypes
} from 'react';
import config from '../util/config';
import {classNames} from '../util';
import Button from '../button';

const prefix = 'segmented';

/**
 * 分段控件
 * @param {Object} props 组件所使用的属性
 * @param {Object[]} [props.elements] 分段控件的元素项列表（每一项都应该是 `Button` 组件的 props）
 * @param {string} [props.color=''] 分段控件的样式，默认为主题颜色
 * @param {string} [props.size=''] 分段控件的大小，默认为正常的按钮大小
 */
export default function Segmented(props) {
  const {
    elements,
    size,
    color,
    className,
    children,
    ...rest
  } = props;
  let renderNode = children;
  let clazz = classNames(prefix, {
    [`${prefix}-${size}`]: !!size,
    [className]: className
  });

  if (elements) {
    renderNode = elements.map((item, i) => {
      const {
        children,
        ...rest
      } = item;

      return (
        <Button {...rest} color={color} key={i}>
          {children}
        </Button>
      );
    });
  }

  return (
    <div className={clazz} {...rest}>
      {renderNode}
    </div>
  );
}

Segmented.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object),
  color: PropTypes.oneOf(config.colors),
  size: PropTypes.oneOf(['', 'small']),
  className: PropTypes.string,
  children: PropTypes.node
};
Segmented.defaultProps = {
  color: '',
  size: ''
};
