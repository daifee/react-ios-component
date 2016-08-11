/**
 * @author haw
 * 表格视图
 */

import React, {
  PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'cells';

/**
 * 表格视图
 * @param {Object} props 组件所使用的属性
 */
export default function Cells(props) {
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

Cells.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
