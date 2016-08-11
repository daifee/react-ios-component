/**
 * @author haw
 */

import React, {
  PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'alert-button';

/**
 * AlertButton 警告框按钮组件
 * @param {Object} props 组件所使用的属性
 */
export default function AlertButton(props) {
  const {
    className,
    children,
    ...rest
  } = props;
  let clazz = classNames(prefix, {
    [className]: className
  });

  return (
    <a className={clazz} {...rest}>
      {children}
    </a>
  );
}

AlertButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
