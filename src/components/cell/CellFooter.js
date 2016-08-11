/**
 * @author haw
 */

import React, {
  PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'cell-footer';

/**
 * 表格视图列表项的尾部
 * @param {Object} props 组件所使用的属性
 */
export default function CellFooter(props) {
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

CellFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
