/**
 * @author haw
 */

import React, {
  PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'alert-body';

/**
 * AlertBody 警告框内容组件
 * @param {Object} props 组件所使用的属性
 */
export default function AlertBody(props) {
  const {
    className,
    children,
    ...rest
  } = props;
  let clazz = classNames(prefix, {
    [className]: className
  });

  return (
    <div className={clazz} {...rest}>
      {children}
    </div>
  );
}

AlertBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
